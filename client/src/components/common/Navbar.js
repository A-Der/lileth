import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import facebookIcon from "../styles/assets/facebook.png";
import instaIcon from "../styles/assets/instagram.png";

function Navbar() {
  const [eyeLogo, setEyeLogo] = useState("eye-logo-blue.png");

  const home = "/";
  const development = "/Development&Training";
  const healing = "/HealingClinics";
  const membership = "/BecomeAMember";
  const contact = "/Contact";

  const handleOnMouse = (direction = "e") => {
    if (direction === "e") {
      setEyeLogo("eye-logo-white.png");
    } else {
      setEyeLogo("eye-logo-blue.png");
    }
  };

  const location = window.location.pathname;
  const getClassName = (name) => {
    const className = name === location ? "nav-item is-active" : "nav-item";
    return className;
  };
  return (
    <nav className="nav-menu">
      <div className="navbar-start">
        <Link to={home} className="nav-logo-box">
          <img
            className="nav-logo"
            onMouseEnter={() => handleOnMouse("e")}
            onMouseLeave={() => handleOnMouse("l")}
            src={eyeLogo}
            alt="Logo"
          />
        </Link>
      </div>
      <div class="nav-end">
        <Link to={development} className={getClassName(development)}>
          <span>Development & Training</span>
        </Link>
        <Link to={healing} className={getClassName(healing)}>
          Healing Clinics
        </Link>

        <Link className="nav-item">Events</Link>
        <Link to={membership} className={getClassName(membership)}>
          Become A Member
        </Link>
        <Link to={contact} className={getClassName(contact)}>
          Contact
        </Link>
        <div className="social-box">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100005362395878"
            rel="noreferrer"
          >
            <img
              className="facebook-icon"
              src={facebookIcon}
              alt="facebook-icon"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/lilethhealing/"
            rel="noreferrer"
          >
            <img className="insta-icon" src={instaIcon} alt="instagram-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
