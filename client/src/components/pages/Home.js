import React from "react";
import { withRouter } from "react-router";
import healingHandsWhite from "../styles/assets/hands-logo-white.png";
import healingHandsBlue from "../styles/assets/hands-blue.png";
import angelWhite from "../styles/assets/angel-white.png";
import angelBlue from "../styles/assets/angel-blue.png";
import leaderWhite from "../styles/assets/leader-white.png";
import leaderBlue from "../styles/assets/leader-blue.png";
import tarotWhite from "../styles/assets/tarot-white.png";
import tarotBlue from "../styles/assets/tarot-blue.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class Home extends React.Component {

  imgBorderColour = '#8292FC';

  state = {
    healingHandsImg: healingHandsBlue,
    angelImg: angelBlue,
    leaderImg: leaderBlue,
    tarotImg: tarotBlue,
    handsBorderColor: this.imgBorderColour,
    angelBorderColor: this.imgBorderColour,
    leaderBorderColor: this.imgBorderColour,
    tarotBorderColor: this.imgBorderColour,
  }

  render() {
    
    const { healingHandsImg, angelImg, leaderImg, tarotImg, handsBorderColor, angelBorderColor, leaderBorderColor, tarotBorderColor } = this.state;

    const style = borderColor => ({
      height: "100px",
      width: "auto",
      padding: "10px",
      marginTop: "5px",
      border: "2px solid #4A4A4A",
      borderRadius: "45%",
      borderColor,
    });

    const handleOnMouse = (direction = 'e', name) => {
      const border = `${name}BorderColor`;
      const borderColor = direction === 'e' ? 'white' : this.imgBorderColour;
      switch(name){
        case 'hands':
          const handsImg = direction === 'e' ? healingHandsWhite : healingHandsBlue;
          this.setState({ healingHandsImg: handsImg, [border]: borderColor });
          break;
        case 'angel':
          const angelImg = direction === 'e' ? angelWhite : angelBlue;
          this.setState({ angelImg: angelImg, [border]: borderColor });
          break;
        case 'leader':
          const leaderImg = direction === 'e' ? leaderWhite : leaderBlue;
          this.setState({ leaderImg: leaderImg, [border]: borderColor});
          break;
        case 'tarot':
          const tarotImg = direction === 'e' ? tarotWhite : tarotBlue;
          this.setState({ tarotImg: tarotImg, [border]: borderColor });
          break;
          default:
            return null
          };
    };

    return (
      <>
        <div className="hero" data-aos="fade-in" data-aos-duration={2000}>
          <div className="hero-info">
            <span className="home-title"> The Lileth Healing Sanctuary </span>
            <span className="home-subtitle">A Place For All</span>
          </div>
        </div>
        <div data-aos="fade-in" data-aos-duration={2000}>
          <div className="home-info">
            {/* <div className="home-title"> The Lileth Healing Sanctuary </div>
            <div className="home-subtitle">A Place For All</div> */}
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

          <div class="cards-container">
            <div class="box" data-aos="fade-up" data-aos-delay={100} onMouseEnter={() => handleOnMouse('e', 'hands')} onMouseLeave={() => handleOnMouse('l', 'hands')}>
              <div class="boxContent">
                <i class="fa fa-microchip icon"></i>
                <h1 class="title">Healing</h1>
                <p class="desc">In-house healing clinics run fortnightly</p>
                <br></br>
                <img
                  src={healingHandsImg}
                  alt={"healing"}
                  style={style(handsBorderColor)}
                />
              </div>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay={250} onMouseEnter={() => handleOnMouse('e', 'angel')} onMouseLeave={() => handleOnMouse('l', 'angel')}>
              <div class="boxContent">
                <i class="fa fa-calendar icon"></i>
                <h1 class="title">Angel & Fairy Cards</h1>
                <p class="desc">
                  Monthly session to practice learning Angel and Fairy Cards
                </p>
                <br></br>
                  <img
                  src={angelImg}
                  alt={"angel"}
                  style={style(angelBorderColor)}
                />
              </div>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay={400} onMouseEnter={() => handleOnMouse('e', 'leader')} onMouseLeave={() => handleOnMouse('l', 'leader')}>
              <div class="boxContent">
                <i class="fa fa-podcast icon"></i>
                <h1 class="title">Become a Healer</h1>
                <p class="desc">
                  Talk to us if you are considering
                  a path in Spiritual Healing
                </p>
                <br></br>
                <img
                  src={leaderImg}
                  alt={"leader"}
                  style={style(leaderBorderColor)}
                />
              </div>
            </div>
            <div class="box" data-aos="fade-up" data-aos-delay={550} onMouseEnter={() => handleOnMouse('e', 'tarot')} onMouseLeave={() => handleOnMouse('l', 'tarot')}>
              <div class="boxContent">
                <i class="fa fa-podcast icon"></i>
                <h1 class="title">Psychic Readings</h1>
                <p class="desc">
                  We hold monthly special events on a Saturday evening
                </p>
                <br></br>
                <img
                  src={tarotImg}
                  alt={"tarot"}
                  style={style(tarotBorderColor)}
                />
              </div>
            </div>
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
