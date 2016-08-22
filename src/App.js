import React from 'react';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Navbar from './components/Navbar'
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = React.createClass({
  getInitialState(){
    var logged = Boolean(localStorage.getItem('logged') || false);
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
  },

  render: function() {
    return (
      <div>
        <Navbar logged={this.state.loggedIn} logout={this.doLogout}/>
        <div className="container">
          { this.state.loggedIn ?
            (
              <Dashboard />
            ) :
            (
              <Login login={this.doLogin}/>
            )
          }
        </div>
      </div>
    );
  }
});

export default App;
