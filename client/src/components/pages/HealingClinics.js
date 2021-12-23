import React from "react";
import { withRouter } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import reikiHealing from "../styles/assets/reikihealing.jpg";
import lotus from "../styles/assets/lotus-white.png";
AOS.init();

class HealingClinics extends React.Component {
  render() {
    return (
      <div className="hc-page">
        <div className="hc-hero" data-aos="fade-in" data-aos-duration={2000}>
          <div className="dev-hero-info">
            <span className="hc-title"> Healing Clinics</span>
            <span className="hc-subtitle">
              Spiritual healing can provide a peaceful uplifting experience of
              rebalancing and attuning the mind, body and spirit
            </span>
          </div>
        </div>
        {/* <div className="hc-section">
          <div className="hc-text" ata-aos="fade-in" data-aos-duration={2000}>
            Our Healing Clinics are run every 2 weeks on a Saturday - 11am to
            1pm. The last appointment is at 12.30pm.
            <br></br>
            <br></br>
            Each healing session is half an hour and booking is required in
            advance.
            <br></br>
            <br></br>
            As a guide, we ask for a donation of £15 per healing session.
            <br></br>
            <br></br>
            All healers are qualified and insured with the Essex Healers
            Association (EHA) which is affiliated to The Healer Practitioner
            Association International (HPAI). All practitioners work to a Code
            of Conduct and Practice.
          </div>
          
        </div> */}
        <hr className="divider" />
        <div className="hc-info-box">
          <div className="hc-info">
            <div className="hc-info-title">What To Expect?</div>
            If it is your first visit you will be required to fill out some
            paper work before being introduced to your practioner who will
            listen to any specific ailments or concerns you may have or answer
            any questions.
            <br></br>
            Our healing is performed on a massage table, the lights are lowered
            and quiet, gentle and calming relaxation music is played. Only
            shoes, glasses and any bulky jewelry are removed. Sheets, blankets
            and a bolster under the knees are provided for your comfort. Your
            comfort is the first priority.
            {/* <br></br> */}
          </div>
          <div className="hc-info">
            <div className="hc-info-title">Does it require touching?</div>
            Our healing is frequently done with a gentle touch; however, it can
            be done completely hands-off for those who might not like touch.
            This does not make it any less effective for enhancing over-all
            well-being and the self-healing process.
            <br></br>
            Traditional hand placements that are frequently used include areas
            on and around the head, neck, upper chest, abdomen, knees and feet,
            as well as the shoulders, elbows and hands. Some people ask if there
            is anything that they need to say or do during the treatment. It is
            always helpful to set a clear intention to be open to the energy
            going where it is needed most. The energy of Reiki has its own
            intelligence and intuitively knows where to go on its own.
            <br></br>
          </div>
          <div className="hc-info">
            <div className="hc-info-title">
              What should I expect to feel during a session?
            </div>
            During the session you may feel waves of subtle energy gently moving
            through their body. Others may experience heat or coolness from the
            practitioner’s hands and perhaps even see comforting colors or
            visions. While these are normal responses, it is also completely
            common to “feel” nothing during the session, but still be left with
            a sense of deep relaxation, overall wellbeing and inner peace. What
            is important to remember is that Reiki works on all levels, so even
            though there might not be a physical sensation, the energy could be
            working on a deep emotional or spiritual level.
            <br></br>
            <br></br>
          </div>
          <strong>
            After the treatment we encourage people to drink plenty of water and
            avoid alcohol.
          </strong>
        </div>
        <hr className="divider" />
        <div className="hc-section">
          <div className="hc-text" ata-aos="fade-in" data-aos-duration={2000}>
            <div className="icon-box">
              <img className="lotus-icon" src={lotus} alt="lotus" />{" "}
              <p>
                Our Healing Clinics are run every 2 weeks on a Saturday - 11am
                to 1pm. The last appointment is at 12.30pm.
              </p>
            </div>
            <br></br>
            <br></br>
            <div className="icon-box">
              <img className="lotus-icon" src={lotus} alt="lotus" />{" "}
              <p>
                Each healing session is half an hour and booking is required in
                advance.
              </p>
            </div>
            <br></br>
            <br></br>
            <div className="icon-box">
              <img className="lotus-icon" src={lotus} alt="lotus" />{" "}
              <p>
                As a guide, we ask for a donation of £15 per healing session.
              </p>
            </div>
            <br></br>
            <br></br>
            <div className="icon-box">
              <img className="lotus-icon" src={lotus} alt="lotus" />{" "}
              <p>
                All healers are qualified and insured with the Essex Healers
                Association (EHA) which is affiliated to The Healer Practitioner
                Association International (HPAI). All practitioners work to a
                Code of Conduct and Practice.
              </p>
            </div>
          </div>

          <img src={reikiHealing} alt="reiki healing" />
        </div>
      </div>
    );
  }
}

export default withRouter(HealingClinics);
