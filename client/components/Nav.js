import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Garden Planner</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/special">New Crops</Link> :  ''
            }
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
           {
             (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
           }
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
