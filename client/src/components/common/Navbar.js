import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    eyeLogo:"eye-logo-blue.png"
  }

   handleOnMouse = (direction = 'e') => {
    if(direction === 'e'){
      this.setState({ eyeLogo: "eye-logo-white.png" })
    }else{
      this.setState({ eyeLogo: "eye-logo-blue.png" })
    };
  };

  render() {
    return (
      <nav className="nav-menu">
        <div className="navbar-start">
          <Link to="/" className="nav-logo-box">
            <img className="nav-logo" onMouseEnter={() => this.handleOnMouse('e')} onMouseLeave={() => this.handleOnMouse('l')} src={this.state.eyeLogo} alt="Logo" />
          </Link>
        </div>
        <div class="nav-end">
        <Link to="/Development&Training" className="nav-item">
          <span>Development & Training</span>
        </Link>
        <Link to="/HealingClinics" className="nav-item">Healing Clinics</Link>

          <Link className="nav-item">Events</Link>
          <Link className="nav-item">Become A Member</Link>
          <Link className="nav-item">Administration</Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
