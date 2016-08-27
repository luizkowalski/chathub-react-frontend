import React from 'react';
import TimeAgo from 'react-timeago'

var Message = React.createClass({
  render: function () {
    var message = JSON.parse(this.props.message);
    return (
      <li className="left clearfix">
        <span className="chat-img pull-left">
          <img src={message.sender.avatar} alt="User Avatar" />
        </span>
        <div className="chat-body clearfix">
          <div className="header">
            <strong className="primary-font">{message.sender.name}</strong>
            <small className="pull-right text-muted"><i className="fa fa-clock-o"></i> <TimeAgo date={message.createdAt} /></small>
          </div>
          <p>
            {message.content}
          </p>
        </div>
      </li>
      )
  }
});
export default Message;
