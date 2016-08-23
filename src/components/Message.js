import React from 'react';
import './Message.css';

var Message = React.createClass({
  render: function () {
    var message = JSON.parse(this.props.message);
    return (
      <li>
        <div className="avatar">
          <img src={ message.sender.avatar } className="img-circle"/>
        </div>
        <div className="messages">
          <p>{ message.content }</p>
          <span className="date">{ "@"+message.sender.login + " • " }</span>
          <span className="date timeago" title={ message.created_at }>
            { message.created_at }
          </span>
        </div>
      </li>
      )
  }
});
export default Message;
