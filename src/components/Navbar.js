import React from 'react';
import './Navbar.css'
import githubLogo from '../github-octocat.svg';

const Navbar = React.createClass({

  render(){
    return(
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item is-brand" href="#">
            <img src={githubLogo} alt="Bulma logo" />
            Chathub
            </a>
          </div>

          <div className="nav-center">

          </div>

          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="nav-right nav-menu">
            {
              this.props.logged ? (
            <span className="nav-item">
              <a className="button is-primary" onClick={this.props.logout}>
                <span className="icon">
                  <i className="fa fa-cog"></i>
                </span>
                <span>Logout</span>
              </a>
            </span>
          ) : '' }
          </div>
        </nav>
      )
    }
  });

  export default Navbar;
