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
      <div className="row">
          <div className="col-md-5" id="chat-body">
              <div className="panel panel-primary">
                  <div className="panel-heading">
                      <span className="glyphicon glyphicon-comment"></span> Chat
                  </div>
                  <div className="panel-body">
                      <ul className="chat">
                          { messages }
                      </ul>
                  </div>
                  <div className="panel-footer">
                      <div className="input-group">
                          <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                          <span className="input-group-btn">
                              <button className="btn btn-warning btn-sm" id="btn-chat">
                                  Send</button>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    );
  }
});
export default Room;
