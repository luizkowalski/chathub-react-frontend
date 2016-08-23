import React from 'react';
import './Navbar.css'

const Navbar = React.createClass({

  render(){
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            {
              this.props.logged ? (
                <a className="navbar-brand" href="#" onClick={this.props.logout}>
                  Logout
                </a>) : ''
              }

            </div>
          </div>
        </nav>
      )
    }
  });

  export default Navbar;
