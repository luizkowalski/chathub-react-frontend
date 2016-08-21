import React from 'react';
import { Link } from 'react-router';

const Login = React.createClass({
  getInitialState(){
    return {user: JSON.parse(localStorage.getItem('user'))};
  },
  componentDidMount(){

  },
  render(){
    return(
      <div>
        Hello { this.state.user.name }, <Link to="/" className="goback">Go back</Link>
      </div>
    )
  }
});

export default Login;
