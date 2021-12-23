import React from "react";
import { withRouter } from "react-router";
import ReactModal from "react-modal";
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
  imgBorderColour = "#8292FC";

  state = {
    healingHandsImg: healingHandsBlue,
    angelImg: angelBlue,
    leaderImg: leaderBlue,
    tarotImg: tarotBlue,
    handsBorderColor: this.imgBorderColour,
    angelBorderColor: this.imgBorderColour,
    leaderBorderColor: this.imgBorderColour,
    tarotBorderColor: this.imgBorderColour,
    reikiModalStatus: false,
    massageModalStatus: false
  };

  render() {
    const {
      healingHandsImg,
      angelImg,
      leaderImg,
      tarotImg,
      handsBorderColor,
      angelBorderColor,
      leaderBorderColor,
      tarotBorderColor,
      reikiModalStatus,
      massageModalStatus
    } = this.state;

    const style = (borderColor) => ({
      height: "100px",
      width: "auto",
      padding: "10px",
      marginTop: "5px",
      border: "2px solid #4A4A4A",
      borderRadius: "45%",
      borderColor,
    });

    const handleOnMouse = (direction = "e", name) => {
      const border = `${name}BorderColor`;
      const borderColor = direction === "e" ? "white" : this.imgBorderColour;
      switch (name) {
        case "hands":
          const healingHandsImg =
            direction === "e" ? healingHandsWhite : healingHandsBlue;
          this.setState({ healingHandsImg, [border]: borderColor });
          break;
        case "angel":
          const angelImg = direction === "e" ? angelWhite : angelBlue;
          this.setState({ angelImg, [border]: borderColor });
          break;
        case "leader":
          const leaderImg = direction === "e" ? leaderWhite : leaderBlue;
          this.setState({ leaderImg, [border]: borderColor });
          break;
        case "tarot":
          const tarotImg = direction === "e" ? tarotWhite : tarotBlue;
          this.setState({ tarotImg, [border]: borderColor });
          break;
        default:
          return null;
      }
    };

    const customModalStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
      },
    };

    const handleModal = (name) => {
      const modal = name + "ModalStatus";
      const status = this.state[[modal]];
      console.log(modal, status)
      this.setState({ [modal]: !status });
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

          <div className="cards-container">
            <div
              className="box"
              data-aos="fade-up"
              data-aos-delay={100}
              onMouseEnter={() => handleOnMouse("e", "hands")}
              onMouseLeave={() => handleOnMouse("l", "hands")}
              onClick={() => handleModal("reiki")}
            >
              <div className="boxContent">
                <i className="fa fa-microchip icon"></i>
                <h1 className="title">What is Reiki?</h1>
                {/* <p className="desc">In-house healing clinics run fortnightly</p> */}


                <br></br>
                <img
                  src={healingHandsImg}
                  alt={"healing"}
                  style={style(handsBorderColor)}
                />
                <ReactModal
                  isOpen={reikiModalStatus}
                  style={customModalStyles}
                >
                  <button onClick={() => handleModal("reiki")}>Close Modal</button>
                  Reiki is a non-invasive treatment and can be used on all age
                  groups from babies to pensioners, regardless of present
                  medical complications. It is a complimentary and not an
                  alternative to medical treatment An example of some of the
                  symptoms Reiki has helped people with are, pain relief, back
                  problems, anxiety, headaches, stomach upsets, sinus problems,
                  blood pressure and asthma, just to mention a few.. Reiki has
                  been regulated and approved by the Complementary and Natural
                  Healthcare Council (CNHC)
                </ReactModal>
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-delay={250}
              onMouseEnter={() => handleOnMouse("e", "angel")}
              onMouseLeave={() => handleOnMouse("l", "angel")}
              onClick={() => handleModal("massage")}
            >
              <div className="boxContent">
                <i className="fa fa-calendar icon"></i>
                <h1 className="title">What is Aromatherapy Massage?</h1>
                {/* <p className="desc">
                  Monthly session to practice learning Angel and Fairy Cards
                </p> */}

                <br></br>
                <img
                  src={angelImg}
                  alt={"angel"}
                  style={style(angelBorderColor)}
                />
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-delay={400}
              onMouseEnter={() => handleOnMouse("e", "leader")}
              onMouseLeave={() => handleOnMouse("l", "leader")}
            >
              <div className="boxContent">
                <i className="fa fa-podcast icon"></i>
                <h1 className="title">Become a Healer</h1>
                <p className="desc">
                  Talk to us if you are considering a path in Spiritual Healing
                </p>
                <br></br>
                <img
                  src={leaderImg}
                  alt={"leader"}
                  style={style(leaderBorderColor)}
                />
                <ReactModal
                  isOpen={massageModalStatus}
                  style={customModalStyles}
                >
                  <button onClick={() => handleModal("massage")}>Close Modal</button>
                  Aromatherapy Massage is a non-invasive treatment and can be used on all age groups from babies to pensioners. It is a complimentary and not an alternative to medical treatment. Usually the massage will involve back, shoulders, necks arms and hands. Using aromatic oils mixed with a base oil and lightly massage above mention areas. The oils are chosen by the therapist according to the patient’s needs. However current medical condition should be discuss with the therapist prior to the massage.
                </ReactModal>
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-delay={550}
              onMouseEnter={() => handleOnMouse("e", "tarot")}
              onMouseLeave={() => handleOnMouse("l", "tarot")}
            >
              <div className="boxContent">
                <i className="fa fa-podcast icon"></i>
                <h1 className="title">Psychic Readings</h1>
                <p className="desc">
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

          <hr classNameName="divider" />

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
