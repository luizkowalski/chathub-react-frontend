import React from 'react';
import githubLogo from '../github-octocat.svg';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import './Login.css';

const Login = React.createClass({
  render() {
    return (
      <div id="fullscreen_bg" className="fullscreen_bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="App">
              <h1 className="form-signin-heading">
                <img src={githubLogo} /> Chathub
              </h1>
              <RaisedButton onClick={this.props.login} label="Login with Github"
                icon={<i className="fa fa-github-square fa-6" aria-hidden="true"></i>}
                labelPosition="after" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
});

export default Login;
