import React from 'react';
import './RoomList.css';
import ReactDOM from 'react-dom';
import Room from './Room';

var RoomList = React.createClass({
  renderComponent(room){
    var node = document.getElementById('room-placeholder');
    ReactDOM.unmountComponentAtNode(node);
    ReactDOM.render((<Room room={room}/>), node);
  },
  render: function() {
    var comp = this;
    var roomList = this.props.rooms.map(function(room) {
      return (
        <li className="room-link" key={room.id}>
          <a href="javascript:void(0)" onClick={() => comp.renderComponent(room.content)}>#{room.content.fullName}</a>
        </li>);
    });
    return (
      <div className="room-list">
        <ul className="list-unstyled">
          { roomList }
        </ul>
      </div>
    );
  }
});
export default RoomList;
