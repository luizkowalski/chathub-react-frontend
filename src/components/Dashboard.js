import React from 'react';
import ReactDOM from 'react-dom';
import Room from './Room';
import $ from 'jquery';
import './Dashboard.css'
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './MaterialTitlePane';

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
        'Authorization': self.state.user.backendAccessToken
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
      console.log(room)
      return (
        <a className="panel-block is-active" href="#"  key={room.id} onClick={() => comp.renderRoom(room.content)}>
          <span className="panel-icon">
            <img src={ room.content.avatar } alt="" className="img-circle" />
          </span>
          <strong className="room-name">{room.content.fullName}</strong>
        </a>
      )});
      var sidebarContent =
        <MaterialTitlePanel title="Your rooms">
          {rooms}
        </MaterialTitlePanel>

      return(
        <div>
          <Sidebar sidebar={sidebarContent}
           docked={true}
           open={true}
           shadow={true}
           sidebarClassName={'sidebar-class'}
           pullRight={false}>
           <MaterialTitlePanel title={"Chat"}
             button={true}
             buttonLabel={"Quit"}
             buttonAction={this.props.logoutFunction}>
             <div className="dashboard">
               <div className="columns is-fullwidth">
                 <div className="column bg-gray scroll" id="room-placeholder">
                 </div>
               </div>
             </div>
           </MaterialTitlePanel>
          </Sidebar>
          </div>
      );
    }
  });

  export default Dashboard;
