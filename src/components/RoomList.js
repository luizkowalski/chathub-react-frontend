import React from 'react';
import './RoomList.css';
import ReactDOM from 'react-dom';
import Room from './Room';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

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
        <ListItem key={room.id}
          primaryText={room.content.fullName}
          rightIcon={<CommunicationChatBubble />}
          onClick={() => comp.renderComponent(room.content)}
          />
      )});
      return (
        <div className="room-list">
          <List>
            <Subheader>Your rooms</Subheader>
            { roomList }
          </List>
        </div>
      );
    }
  });
  export default RoomList;
