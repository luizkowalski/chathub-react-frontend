import React from 'react';
import logo from './logo.svg';
import githubLogo from './github-octocat.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = React.createClass({
  getInitialState(){
    var logged = localStorage.getItem('logged') || false;
    return { loggedIn: logged };
  },

  doLogout(){
    localStorage.removeItem('logged');
    this.setState({loggedIn: false});
  },

  doLogin(){
    var component = this;
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('user:email');
    provider.addScope('repo');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(token);
      console.log(user);
      localStorage.setItem('logged', true);
      component.setState({loggedIn: true});
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode+ " - "+errorMessage)
    });
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

        { this.state.loggedIn ? (
          <RaisedButton onClick={this.doLogout} label="Logout"/>
        ) : (
          <RaisedButton onClick={this.doLogin} label="Sign-in"/>
        )}
      </div>
    );
  }
});

export default App;
