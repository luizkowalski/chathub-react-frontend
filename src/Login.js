import './App.css'
import React from 'react';
import githubLogo from './github-octocat.svg';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactFireMixin from 'reactfire';
import axios from 'axios';

injectTapEventPlugin();

var Login = React.createClass({
  mixins: [ReactFireMixin],
  doLogin(){
    var component = this;
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('user:email');
    provider.addScope('repo');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8080/auth/github?token='+token,
      })
      .then(function (response) {
        localStorage.setItem('logged', true);
        localStorage.setItem('user', JSON.stringify(response.data));

        component.setState({loggedIn: true});
        component.props.history.push('/dashboard');
      })
      .catch(function (error) {
        console.log(error);
      });

    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode+ " - "+errorMessage)
    });
  },

  render: function() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={githubLogo} className="App-logo" alt="logo" />
          <h2>Chathub</h2>
        </div>
        <p className="App-intro">
          To get started, login with your Github account
        </p>
        <RaisedButton onClick={this.doLogin} label="Sign-in"/>
      </div>
    );
  }
});

export default Login;
