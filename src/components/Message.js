import React from 'react';

var Message = React.createClass({
  render: function () {
    return (
      <li key={ this.props.message.uid }>
        <div className="avatar">
          <img src={ this.props.message.avatar } className="img-circle"/>
        </div>
        <div className="messages">
          <p>{ this.props.message.content }</p>
          <span className="date">{ "@"+this.props.message.user + " • " }</span>
          <span className="date timeago" title={ this.props.message.created_at }>
            { this.props.message.created_at }
          </span>
        </div>
      </li>
      )
  }
});
export default Message;
