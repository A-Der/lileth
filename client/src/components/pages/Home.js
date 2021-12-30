import React from "react";
import { withRouter } from "react-router";
import ReactModal from "react-modal";
import handsWhite from "../styles/assets/hands-logo-white.png";
import handsBlue from "../styles/assets/hands-blue.png";
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
    handsImg: handsBlue,
    angelImg: angelBlue,
    leaderImg: leaderBlue,
    tarotImg: tarotBlue,
    handsBorderColor: this.imgBorderColour,
    angelBorderColor: this.imgBorderColour,
    leaderBorderColor: this.imgBorderColour,
    tarotBorderColor: this.imgBorderColour,
    handsModalStatus: false,
    angelModalStatus: false,
    leaderModalStatus: false,
    tarotModalStatus: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      handsImg,
      angelImg,
      leaderImg,
      tarotImg,
      handsBorderColor,
      angelBorderColor,
      leaderBorderColor,
      tarotBorderColor,
      handsModalStatus,
      angelModalStatus,
      leaderModalStatus,
      tarotModalStatus,
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
          const handsImg = direction === "e" ? handsWhite : handsBlue;
          this.setState({ handsImg, [border]: borderColor });
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
      const border = `${name}BorderColor`;
      const imageName = name + "Img";
      const image =
        name === "hands"
          ? handsBlue
          : name === "angel"
          ? angelBlue
          : name === "leader"
          ? leaderBlue
          : tarotBlue;
      this.setState({
        [modal]: !status,
        [imageName]: image,
        leaderImg: leaderBlue,
        leaderBorderColor: this.imgBorderColour,
        [border]: this.imgBorderColour,
      });
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
              onClick={() => handleModal("hands")}
            >
              <div className="boxContent">
                <i className="fa fa-microchip icon"></i>
                <h1 className="title">What is Reiki?</h1>
                {/* <p className="desc">In-house healing clinics run fortnightly</p> */}
                <br></br>
                <br></br>
                <br></br>
                <img
                  src={handsImg}
                  alt={"healing"}
                  style={style(handsBorderColor)}
                />
                <ReactModal
                  isOpen={handsModalStatus}
                  style={customModalStyles}
                  ariaHideApp={false}
                  overlayClassName="Overlay"
                >
                  <p>
                    <h1 className="modal-title">What is it?</h1>
                    Reiki (pronounced ray-key) is defined as spiritual energy,
                    or the beautiful and loving life force that surrounds and
                    embodies all living things. It is non-invasive and can be
                    used on all age groups from babies to pensioners, regardless
                    of present medical complications.
                  </p>
                  <br></br>
                  <p>
                    <h1 className="modal-title">How can it help us?</h1>
                    When we experience stress, pain, illness or worry, our
                    energy often becomes unbalanced, impeding the natural flow
                    of energy through the body.
                    <br></br>
                    Reiki helps to return the body’s flow of energy to its
                    intended state of harmony and creates a state of
                    peacefulness and calming. Reiki is a holistic, natural
                    system that promotes healing in body, mind and spirit.
                    <br></br>
                    It is complimentary and not an alternative to medical
                    treatment.
                  </p>
                  <br></br>
                  An example of some of the symptoms Reiki has helped people
                  with are:
                  <ul>
                    <li>• Pain Relief</li>
                    <li>• Back Problem</li>
                    <li>• Anxiety</li>
                    <li>• Headaches</li>
                    <li>• Stomach Problems</li>
                    <li>• Sinus Problems</li>
                    <li>• Blood Pressure</li>
                    <li>• Asthma</li>
                  </ul>
                  just to mention a few..
                  <br></br>
                  <br></br>
                  Reiki has been regulated and approved by the Complementary and
                  Natural Healthcare Council (CNHC).
                </ReactModal>
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-delay={250}
              onMouseEnter={() => handleOnMouse("e", "angel")}
              onMouseLeave={() => handleOnMouse("l", "angel")}
              onClick={() => handleModal("angel")}
            >
              <div className="boxContent">
                <i className="fa fa-calendar icon"></i>
                <h1 className="title">What is Aromatherapy Massage?</h1>

                <br></br>
                <img
                  src={angelImg}
                  alt={"angel"}
                  style={style(angelBorderColor)}
                />
                <ReactModal
                  isOpen={angelModalStatus}
                  style={customModalStyles}
                  ariaHideApp={false}
                  overlayClassName="Overlay"
                >
                  Aromatherapy Massage is a hands-on, non-invasive treatment and
                  can be used on all age groups. It is complimentary and not an
                  alternative to medical treatment.
                  <br></br>A light, calming massage using a blend of oils, which
                  works the whole body. Using blended aromatherapy oils, this
                  massage is personally tailored to the individual’s needs. This
                  massage will treat all areas of the body most prone to stress
                  and tension, such as the back, shoulders and neck, along with
                  the upper and lower legs, arms and hands.
                  <br></br>
                  <br></br>
                  <h1 className="modal-title">How will this benefit us?</h1>
                  <ul>
                    <li>
                      • Provides a relaxing and revitalising experience which
                      helps the body physically and mentally
                    </li>
                    <li>• Eases the symptoms of stiff, tired joints</li>
                    <li>
                      • Encourages improved circulation and speeds up digestion
                    </li>
                    <li>• Stress relief and improvement on sleep</li>
                  </ul>
                  <br></br>
                  Any current medical condition should be discuss with the
                  therapist beforehand.
                </ReactModal>
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-delay={400}
              onMouseEnter={() => handleOnMouse("e", "leader")}
              onMouseLeave={() => handleOnMouse("l", "leader")}
              onClick={() => handleModal("leader")}
            >
              <div className="boxContent">
                <i className="fa fa-podcast icon"></i>
                <h1 className="title">Thinking Of Becoming A Healer?</h1>
                <br></br>
                <img
                  src={leaderImg}
                  alt={"leader"}
                  style={style(leaderBorderColor)}
                />
                <ReactModal
                  isOpen={leaderModalStatus}
                  style={customModalStyles}
                  ariaHideApp={false}
                  overlayClassName="Overlay"
                >
                  <p>
                    <i>
                      "A healer’s power stems not from any special ability, but
                      from maintaining the courage and awareness to embody and
                      express the universal healing power that every human being
                      naturally possesses."
                    </i>
                    - E. Leventhal.
                  </p>
                  <br></br>
                  <p>
                    At heart, we all have the capacity to heal ourselves and
                    nurture others. Spirit, energy, thought, intention, skillful
                    practice, and belief are available to all people. Yet as
                    individual expressions of the life force, we all have
                    different paths, and not all of us feel called to healing
                    practices.
                  </p>
                  <br></br>
                  Spiritual healers come in many shapes and forms. For example,
                  some may find their way through writing. Others through
                  practicing reiki, kinesiology, yoga, meditation, hypnotherapy,
                  psychotherapy, herbalism, acupuncture, EFT, and a whole range
                  of other practices. Many people study by themselves – however,
                  with that being said, formal study can help to hone these
                  innate talents. To become a spiritual healer, focus on what
                  subjects and topics you’re drawn to – that is your path.
                  <br></br>
                  Here at the Lileth we offer ..
                </ReactModal>
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-delay={550}
              onMouseEnter={() => handleOnMouse("e", "tarot")}
              onMouseLeave={() => handleOnMouse("l", "tarot")}
              onClick={() => handleModal("tarot")}
            >
              <div className="boxContent">
                <i className="fa fa-podcast icon"></i>
                <h1 className="title">What Are Psychic Readings?</h1>
                <br></br>
                <img
                  src={tarotImg}
                  alt={"tarot"}
                  style={style(tarotBorderColor)}
                />
                <ReactModal
                  isOpen={tarotModalStatus}
                  style={customModalStyles}
                  ariaHideApp={false}
                  overlayClassName="Overlay"
                >
                  Psychic reading is to discern information or divine guidance
                  through the use of heightened perceptive abilities. These are
                  extensions of the basic human senses of sight, sound, touch,
                  taste and instinct. These natural extensions are Clairvoyance
                  (vision), Clairsentience (feeling), Claircognisance (factual
                  knowing) and Clairaudience (hearing).
                </ReactModal>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="class-info">
            <div className="class-info-text">
              <h1 style={{ fontSize: "45px" }}>
                <span style={{ fontSize: "45px" }}>◎</span> Development Circle -
                Join us in class at the Lileth
              </h1>
              <p>
                Development Circle runs weekly on a Wednesday from 8pm to 10pm.
                Each week in the month focuses on a particular area. We cover
                clairvoyance, guided meditation, aura readings, psychometry,
                pendulum dowsing and healing to name but a few. <br></br>
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
