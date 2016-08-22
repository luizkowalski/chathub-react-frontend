import React from 'react';
import RoomList from './RoomList';
import $ from 'jquery';

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

  render(){
    return(
      <div className="app">
        <div className="row">
          <div className="col-md-3">
            <RoomList rooms={this.state.rooms} />
          </div>
          <div className="col-md-9" id="room-placeholder">
          </div>
        </div>
      </div>
    );
  }
});

export default Dashboard;
