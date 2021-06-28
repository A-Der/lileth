import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div class="navbar-menu">
        <div class="navbar-end">
          <Link to="/" className="navbar-item"><span>Home</span></Link>
          <Link to="/Development&Training" className="navbar-item"><span>Development & Training</span></Link>
          <a class="navbar-item">Healing Clinics</a>
        </div>

        <div className="nav-logo-box">
          <img className="nav-logo" src="eye-logo-blue.png" alt="Logo" />
        </div>
        
        <div class="navbar-start">
          <a class="navbar-item">Events</a>
          <a class="navbar-item">Become A Member</a>
          <a class="navbar-item">Administration</a>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
