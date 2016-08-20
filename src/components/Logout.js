import React from 'react';
import { Link } from 'react-router';

const Logout = React.createClass({

  render(){
    return(
      <div>
          <Link to="/" className="goback">Go back</Link>
      </div>
    )
  }
});

export default Logout;
