import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav-menu">
        <div className="navbar-start">
          <div className="nav-logo-box">
            <img className="nav-logo" src="eye-logo-blue.png" alt="Logo" />
          </div>
        </div>
        <div class="nav-end">
        <Link to="/" className="nav-item">
          <span>Home</span>
        </Link>
        <Link to="/Development&Training" className="nav-item">
          <span>Development & Training</span>
        </Link>
        <Link className="nav-item">Healing Clinics</Link>

          <Link className="nav-item">Events</Link>
          <Link className="nav-item">Become A Member</Link>
          <Link className="nav-item">Administration</Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
