import React from 'react';
import githubLogo from '../github-octocat.svg';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.css';

const Login = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
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
        </div>
      </div>
    );
  }
});

export default Login;
