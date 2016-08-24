import React from 'react';
import ReactDOM from 'react-dom';
import Room from './Room';
import $ from 'jquery';
import './Dashboard.css'

var Dashboard = React.createClass({
  getInitialState(){
    return {
      user: JSON.parse(localStorage.getItem('user')),
      rooms: []
    };
  },

  componentWillMount(){
    var self = this;
    $.get({
      url: 'http://127.0.0.1:8080/v1/rooms',
      headers: {
        'Auth-Token': self.state.user.backendAccessToken
      },
      success: function(data){
        var rooms = []
        for(var i = 0; i < data.length; i++){
          rooms.push({id: data[i].uid, content: data[i]})
        }
        self.setState({rooms: rooms});
      }
    })
  },

  renderRoom(room){
    var node = document.getElementById('room-placeholder');
    ReactDOM.unmountComponentAtNode(node);
    ReactDOM.render((<Room room={room}/>), node);
  },
  render(){
    var comp = this;
    var rooms = this.state.rooms.map(function(room) {
      return (
        <li className="bounceInDown" key={room.id}>
          <a href="#" className="clearfix" onClick={() => comp.renderRoom(room.content)}>
            <img src={ room.organization != null ? room.organization.avatar : '' } alt="" className="img-circle" />
            <div className="friend-name">
              <strong>{room.content.name}</strong>
            </div>
          </a>
        </li>
      )});
      return(
        <div className="container">
          <div className="row no-gutter">

            <div className="col-md-4 bg-white scroll">
              <ul className="friend-list">
                { rooms }
              </ul>
            </div>
            <div className="col-md-8 bg-white scroll" id="room-placeholder">

            </div>
          </div>
        </div>
      );
    }
  });

  export default Dashboard;
