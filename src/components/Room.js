import React from 'react';

var Room = React.createClass({
  componentWillMount(){
    console.log(this.props.room);
  },
  render: function() {
    return (
        <div>
          {this.props.room.fullName}
        </div>
    );
  }
});
export default Room;
