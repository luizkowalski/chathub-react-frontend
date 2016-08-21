import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Logout from './components/Logout';
import Login from './components/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, hashHistory } from 'react-router'
import './index.css';

const ContainerApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={ContainerApp} />
    <Route path="/logout" component={Logout} />
    <Route path="/dashboard" component={Login} />
  </Router>
), document.getElementById('root'));
