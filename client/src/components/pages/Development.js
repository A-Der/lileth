import React from "react";
import { withRouter } from "react-router";
import door from "../styles/assets/door-square.jpg";
import trees from "../styles/assets/trees-square.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import DevPanels from "../lib/DevPanels";
AOS.init();

class Development extends React.Component {
  render() {
    return (
      <div className="development-page">
        <div className="dev-hero" data-aos="fade-in" data-aos-duration={2000}>
          <div className="dev-hero-info">
            <span className="dev-title"> Development & Training</span>
            <span className="dev-subtitle">
              The Lileth is proud of its Spiritual Development training and has
              given countless members a firm foundation over many years in which
              to develop their spiritual gifts from mediumship, clairvoyance to
              aura energy, psychometry and platform work.
            </span>
          </div>
        </div>

        <div className="development-section">
          <div className="development-subsection">
            <span className="development-subsection-title">
              Is This For Me?
            </span>
            <p className="development-subsection-subtitle">
              Everyone has the potential to develop their psychic abilities and
              intuition. Our Wednesday Circle allows you to work at your own
              pace and unique style. We provide a wide ranging field of
              development and believe that Spirits teaching is limitless as is
              your potential to work with Spirit in whichever way you choose.
            </p>
          </div>

          <div className="board">
            <div className="square text" data-aos="fade-right">
              <div className="development-text">
                <p>Our Classes Ensure That:</p>
                <br></br>
                <span style={{ fontSize: "15px" }}>
                  <p>
                    ◎ They are <i>Spirit</i> led - your teaching, demos and
                    guidance is channelled as opposed to only learning that
                    which your teacher has learned.
                  </p>
                  <br></br>
                  <p>
                    ◎ Developing and improving your link with <i>Spirit</i> will
                    open a world to you that will inspire you to explore further
                    and deeper than you thought possible.
                  </p>
                  <br></br>
                  <p>
                    ◎ Conducted in safety - you will be taught the basics from
                    learning to ground and protect yourself, to making your
                    first links and delivering your first <i>Spirit</i> reading.
                  </p>
                </span>
              </div>
            </div>
            <div className="square" data-aos="fade-left">
              <img src={door} alt="door" />
            </div>
            <div className="square" data-aos="fade-right">
              <img src={trees} alt="tree" />
            </div>
            <div
              className="square text"
              style={{ marginLeft: "10%" }}
              data-aos="fade-left"
            >
              <div className="development-text">
                <p>Wednesday Circle</p>
                <br></br>
                <span style={{ fontSize: "15px" }}>
                  <p>
                    Our weekly occurring class is our most popular and the
                    easiest way to taking your first steps on your journey with
                    us. This is hosted online or in person at our wonderful
                    Lileth Sanctuary.
                    <br></br>
                    <br></br>
                    This is open to non-members at a cost of £6 per session and
                    held every week from 8pm to 10pm (please arrive at least 15
                    minutes earlier).
                  </p>
                </span>
              </div>
            </div>
          </div>

          <hr className="divider" style={{}} />
          <p style={{ margin: "0" }} className="no-limit-slogan">
            The only limitations to working with Spirit are those you place upon
            yourself
          </p>
          <hr className="divider" style={{}} />

          <p className="development-title">Other Ways To Work With <i>Spirit</i></p>

          {DevPanels()}
        </div>
      </div>
    );
  }
}

export default withRouter(Development);
