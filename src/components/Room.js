import React from 'react';
import ReactFireMixin from 'reactfire';
import Message from './Message'
import './Room.css'

var Room = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState(){
    return {
      messages: []
    };
  },
  componentWillMount(){
    var ref = firebase.database().ref("messages/"+this.props.room.uid);
    this.bindAsArray(ref, "messages");
  },
  componentDidMount(){
    var elem = document.getElementById('chat-room');
    elem.scrollTop = elem.scrollHeight;
  },
  render: function() {
    var messages = this.state.messages.map(function(message) {
      return(
        <Message message={message['.value']} key={message['.key']}>
        </Message>
      );
    });
    return (
      <div className="chat-message">
        <ul className="chat">
          { messages }
        </ul>
        <div className="chat-box bg-white">
          <div className="input-group">
            <input className="form-control border no-shadow no-rounded" placeholder="Type your message here" />
            <span className="input-group-btn">
              <button className="btn btn-success no-rounded" type="button">Send</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
});
export default Room;
