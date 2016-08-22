import React from 'react';
import githubLogo from '../github-octocat.svg';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';

const Login = React.createClass({
  getInitialState(){
    return {
      user: JSON.parse(localStorage.getItem('user'))
    };
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={githubLogo} className="App-logo" alt="logo" />
          <h2>Chathub</h2>
        </div>
        <p className="App-intro">
          To get started, login with your Github account
        </p>
        <RaisedButton onClick={this.props.login} label="Login" />
      </div>
    );
  }
});

export default Login;
