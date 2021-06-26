import React from "react";
import { withRouter } from "react-router";
import healingHands from "../styles/assets/hands-logo-white.png";
import angel from "../styles/assets/angel-white.png";
import leader from "../styles/assets/leader-white.png";
import tarot from "../styles/assets/tarot-white.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class Home extends React.Component {
  render() {
    const cardMaker = (img, alt, title, text) => (
      <div className="card-container">
        <div className="card-image">
          <img
            src={img}
            alt={alt}
            style={{ height: "90px", width: "auto", padding: "10px 0 0 0" }}
          />
        </div>
        <div className="card-content">
          <div className="content">
            <h4 style={{ color: "white" }}>{title}</h4>
            {text}
          </div>
        </div>
      </div>
    );

    const card1 = cardMaker(
      healingHands,
      "healing-hands",
      "Healing",
      "Would you benefit from healing? Our healing clinics are held fortnightly on a Saturday and we are introducing two new therapies, which will run alongside the Healing clinic, Reiki and Aromatherapy Massage Please see the Healing Clinics page here for further details"
    );
    const card2 = cardMaker(
      angel,
      "angel-wings",
      "Angel & Fairy Cards",
      "Enhance your intuition by learning to read Angel and Fairy Cards. Practice on your fellow students in a relaxed environment. Sessions are held once a month on a Saturday and are open to non-members. The cost is £5 per session payable on the day. Please see our Development and Training page here for dates."
    );
    const card3 = cardMaker(
      leader,
      "leader",
      "Become a Healer",
      "Do you have a desire to help others? Ever considered becoming a Spiritual Healer? We offer a complete training programme. Also we offer a new Meditation Course. Please see our Development and Training page here for details."
    );
    const card4 = cardMaker(
      tarot,
      "tarot",
      "Psychic Readings",
      "Looking for guidance and would like a psychic reading? We hold monthly special events on a Saturday evening. Please see our Events Calendar page here for further details."
    );

    return (
      <>
        <div className="hero"></div>
        <div data-aos="fade-in">
          <div className="home-info">
            <div className="home-title"> The Lileth Healing Sanctuary </div>
            <div className="home-subtitle">A Place For All</div>
            <br></br>
            <div className="home-text">
              A very warm welcome to the Lileth Website. We are a registered
              charity established for over 50 years based in Uxbridge, West
              London.
              <br></br>
              <br></br>
              Our aim is to help those wishing to train further in mediumship,
              psychic abilities, healing and meditation via a Development
              Circle. <br></br>
              <br></br>
              People from all different faiths and abilities are welcome.
              Whether you are a beginner curious to explore your intuitive side
              or looking to advance your skills, we hope the Lileth has
              something to offer you.
            </div>
          </div>

          <hr className="divider" />

          <div className="cards-container" data-aos="fade-up">
            {card1}
            {card2}
            {card3}
            {card4}
          </div>

          <hr className="divider" />

          <div className="class-info" data-aos="fade-up">
            <div className="class-info-text">
              <h1 style={{ fontSize: "50px" }}>
                <span style={{ fontSize: "50px" }}>◎</span> Development Circle -
                Join us in class at the Lileth
              </h1>
              <p>
                Development Circle runs weekly on a Wednesday from 8pm to 10pm.
                Each week in the month focuses on a particular area. We cover
                clairvoyance, guided meditation, aura readings, psychometry,
                pendulum dowsing, healing to name but a few. <br></br>
                <br></br>
                <span style={{ fontSize: "20px" }}>
                  For non-members, the cost is £6 per evening payable on the
                  night. For membership, please enquire.
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Home);
