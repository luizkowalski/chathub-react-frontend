import React from 'react';
import ReactFireMixin from 'reactfire';
import Message from './Message'
import $ from 'jquery';
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
    this.bindAsArray(ref.orderByChild('id'), "messages");
  },
  componentDidMount(){
    this.scrollRoom();
  },
  scrollRoom(){
    var elem = document.getElementById('chat-room');
    elem.scrollTop = elem.scrollHeight;
  },
  sendMessage: function (e){
    e.preventDefault();
    var content = this.refs.content.value;
    var self = this;
    $.post({
      url: 'http://127.0.0.1:8080/v1/rooms/'+this.props.room.uid+"/messages/new",
      headers: {
        'Auth-Token': this.props.user.backendAccessToken
      },
      contentType:"application/json; charset=utf-8",
      data: JSON.stringify({content: content}),
      success: function(data){
        self.refs.content.value = '';
        var elem = document.getElementById('chat-room');
        elem.scrollTop = elem.scrollHeight;
      }
    });
  },
  render: function() {
    var messages = this.state.messages.map(function(message) {
      return(
        <Message message={message['.value']} key={message['.key']}>
        </Message>
      );
    });
    return (
      <div>
        <ul className="chat" id="chat-room">
          { messages }
        </ul>
        <div>
          <form className="commentForm" onSubmit={this.sendMessage}>
            <p className="control has-icon has-icon-right">
            <input className="input is-success" type="text" placeholder={ 'Message '+this.props.room.fullName} ref="content" />
          </p>
          </form>
        </div>
      </div>
    );
  }
});
export default Room;
