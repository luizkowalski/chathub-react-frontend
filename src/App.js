import React, { Component } from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';
import firebase from 'firebase';
import FIREBASE_CONFIG from './components/consts/firebase_config';
import './App.css'

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    var logged = Boolean(localStorage.getItem('logged') || false);
    firebase.initializeApp(FIREBASE_CONFIG)
    this.state = {
      loggedIn: logged
    };

    this.doLoginHandler = () => this.doLogin()
    this.doLogoutHandler = () => this.doLogout()
  }

  doLogout(){
    localStorage.removeItem('logged');
    localStorage.removeItem('user');
    this.setState({loggedIn: false});
  }

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
      })
      .catch(function (error) {
        console.log(error);
      });

    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode+ " - "+errorMessage)
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          { this.state.loggedIn ?
            (
              <Dashboard logoutFunction={this.doLogoutHandler}/>
            ) :
            (
              <Login login={this.doLoginHandler}/>
            )
          }
        </div>
      </div>
    );
  }
};

export default App;
