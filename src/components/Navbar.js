import React from 'react';

const Navbar = React.createClass({

  render(){
    return(
      <nav className="navbar navbar-default">
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
