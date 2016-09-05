import React from 'react';
import ReactDOM from 'react-dom';
import Room from './Room';
import $ from 'jquery';
import './Dashboard.css'
import Sidebar from 'react-sidebar';

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
    ReactDOM.render((<Room room={room} user={this.state.user}/>), node);
  },
  render(){
    var comp = this;
    var rooms = this.state.rooms.map(function(room) {
      return (
        <a className="panel-block is-active" href="#"  key={room.id} onClick={() => comp.renderRoom(room.content)}>
          <span className="panel-icon">
            <img src={ room.content.organization != null ? room.content.organization.avatar : 'https://robohash.org/' + room.content.uid } alt="" className="img-circle" />
          </span>
          <strong className="room-name">{room.content.fullName}</strong>
        </a>
      )});
      return(
        <div>
          <Sidebar sidebar={rooms}
           docked={true}
           open={true}
           shadow={true}
           sidebarClassName={'sidebar-class'}
           pullRight={false}>
             <div className="dashboard">
               <div className="columns is-fullwidth">
                 <div className="column bg-gray scroll" id="room-placeholder">
                 </div>
               </div>
             </div>
          </Sidebar>
          </div>
      );
    }
  });

  export default Dashboard;
