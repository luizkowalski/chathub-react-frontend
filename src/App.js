import React from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = React.createClass({
  getInitialState(){
    return { loggedIn: false };
  },

  doLogin(){
    this.setState({loggedIn: !this.state.loggedIn});
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RaisedButton onClick={this.doLogin} label="Sign-in"/>

          {this.state.loggedIn ? (
            <Link to="/logout">Log out</Link>
          ) : (
            <Link to="/login">Sign in</Link>
          )}
      </div>
    );
  }
});

export default App;
