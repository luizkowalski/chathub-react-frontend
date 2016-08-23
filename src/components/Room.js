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
      <div className="room-div" id="room-div">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">
              <img src={this.props.room.avatar} className="room-image-title"/>
              { this.props.room.fullName }
            </h2>
          </div>
          <div id="chat-container">
            <div className="panel-body" id="chat-body">
              <ul className="list-unstyled chat" id="chat-room">
                { messages }
              </ul>
            </div>
              </div>
            <div className="panel-footer">
              <form className="new_message" id="new_message" action="/messages" acceptCharset="UTF-8" data-remote="true" method="post">
                <input name="utf8" type="hidden" value="✓" />
                <div className="form-group">
                  <textarea className="chat-text-field form-control" autoComplete="off" autoFocus="autofocus" placeholder="Type your message" name="message[content]" id="message_content"></textarea>
                </div>
              </form>
          </div>
        </div>
      </div>
    );
  }
});
export default Room;
