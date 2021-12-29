import React from "react";
import { withRouter } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import reiki2 from "../styles/assets/reiki2.jpg";
import healing2 from "../styles/assets/healing2.jpg";
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
        <hr className="divider" />
        <div
          className="hc-info-container"
          data-aos="zoom-in-up"
          data-aos-duration={400}
        >
          <div className="hc-info-box">
            <div className="hc-info">
              <div className="hc-info-title">What To Expect?</div>
              If it is your first visit you will be required to fill out some
              paper work before being introduced to your practioner who will
              listen to any specific ailments or concerns you may have or answer
              any questions.
              <br></br>
              Our healing is performed on a massage table, the lights are
              lowered and quiet, gentle and calming relaxation music is played.
              Only shoes, glasses and any bulky jewelry are removed. Sheets,
              blankets and a bolster under the knees are provided for your
              comfort. Your comfort is the first priority.
              {/* <br></br> */}
            </div>
            <div className="hc-info">
              <div className="hc-info-title">Does it require touching?</div>
              Our healing is frequently done with a gentle touch; however, it
              can be done completely hands-off for those who might not like
              touch. This does not make it any less effective for enhancing
              over-all well-being and the self-healing process.
              <br></br>
              Traditional hand placements that are frequently used include areas
              on and around the head, neck, upper chest, abdomen, knees and
              feet, as well as the shoulders, elbows and hands. Some people ask
              if there is anything that they need to say or do during the
              treatment. It is always helpful to set a clear intention to be
              open to the energy going where it is needed most. The energy of
              Reiki has its own intelligence and intuitively knows where to go
              on its own.
              <br></br>
            </div>
            <div className="hc-info">
              <div className="hc-info-title">
                What should I expect to feel during a session?
              </div>
              During the session you may feel waves of subtle energy gently
              moving through their body. Others may experience heat or coolness
              from the practitioner’s hands and perhaps even see comforting
              colors or visions. While these are normal responses, it is also
              completely common to “feel” nothing during the session, but still
              be left with a sense of deep relaxation, overall wellbeing and
              inner peace. What is important to remember is that Reiki works on
              all levels, so even though there might not be a physical
              sensation, the energy could be working on a deep emotional or
              spiritual level.
              <br></br>
              <br></br>
            </div>
            <strong>
              After the treatment we encourage people to drink plenty of water
              and avoid alcohol.
            </strong>
          </div>
          <div className="hc-info-images">
            <img
              className="hc-info-image"
              src={healing2}
              alt="healing-energy"
            />
            <img className="hc-info-image" src={reiki2} alt="reiky-energy" />
          </div>
        </div>
        <div className="hc-text">
          <div className="hc-text-left">
            <div className="icon-box">
              <p>
                <span style={{ fontSize: "8px", marginRight: "10px" }}>
                  ⚪️
                </span>
                Our Healing Clinics are run every 2 weeks on a Saturday - 11am
                to 1pm. The last appointment is at 12.30pm.
              </p>
            </div>
            <br></br>
            <div className="icon-box">
              <p>
                <span style={{ fontSize: "8px", marginRight: "10px" }}>
                  ⚪️
                </span>
                Each healing session is half an hour and booking is required in
                advance.
              </p>
            </div>
          </div>
          <div className="hc-text-right">
            <div className="icon-box">
              <p>
                <span style={{ fontSize: "8px", marginRight: "10px" }}>
                  ⚪️
                </span>
                As a guide, we ask for a donation of £15 per healing session.
              </p>
            </div>
            <br></br>
            <div className="icon-box">
              <p>
                <span style={{ fontSize: "8px", marginRight: "10px" }}>
                  ⚪️
                </span>
                All healers are qualified and insured with the Essex Healers
                Association (EHA) which is affiliated to The Healer Practitioner
                Association International (HPAI). All practitioners work to a
                Code of Conduct and Practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HealingClinics);
