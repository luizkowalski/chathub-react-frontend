import React from 'react';
import TimeAgo from 'react-timeago'
import ReactEmoji from 'react-emoji'

var Message = React.createClass({
  mixins: [
    ReactEmoji
  ],

  render: function () {
    var message = JSON.parse(this.props.message);
    return (
      <li className="left clearfix">
        <span className="chat-img pull-left">
          <img src={message.sender.avatar} alt="User Avatar" className="avatar" />
        </span>
        <div className="chat-body clearfix">
          <div className="header">
            <strong className="primary-font">{message.sender.name}</strong>
            <small className="pull-right text-muted"><i className="fa fa-clock-o"></i> <TimeAgo date={message.createdAt} /></small>
          </div>
          <p>
            {this.emojify(message.content, {attribute: {width: '20px', height: '20px'}})}
          </p>
        </div>
      </li>
      )
  }
});
export default Message;
