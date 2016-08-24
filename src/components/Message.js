import React from 'react';
import './Message.css';

var Message = React.createClass({
  render: function () {
    var message = JSON.parse(this.props.message);
    return (
      <li className="left clearfix"><span className="chat-img pull-left ">
          <img src={message.sender.avatar} alt="User Avatar" className="img-circle avatar" />
      </span>
          <div className="chat-body clearfix">
              <div className="header">
                  <strong className="primary-font">{message.sender.name}</strong> <small className="pull-right text-muted">
                      <span className="glyphicon glyphicon-time"></span>12 mins ago</small>
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
