import React from "react";
import { withRouter } from "react-router";
import door from "../styles/assets/door-square.jpg";
import trees from "../styles/assets/trees-square.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
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

          {/* <div className="info-container"> */}
          {/* <div className="info-box-classes">
              <div className="development-text">
                <br></br>
                <br></br>

                <p>Our Classes Ensure That:</p>
                <br></br>
                <p style={{ fontSize: "20px" }}>
                  ◎ They are <i>Spirit</i> led - your teaching, demos and
                  guidance is channelled as opposed to only learning that which
                  your teacher has learned.
                </p>
                <br></br>
                <p style={{ fontSize: "20px" }}>
                  ◎ Developing and improving your link with <i>Spirit</i> will
                  open a world to you that will inspire you to explore further
                  and deeper than you thought possible.
                </p>
                <br></br>
                <p style={{ fontSize: "20px" }}>
                  ◎ Conducted in complete safety - you will be taught the basics
                  from learning to ground and protect yourself, to making your
                  first links and delivering your first <i>Spirit</i> reading.
                </p>
              </div>
            </div>
            <img src={doors} alt="doors" />
          </div> */}
        
          {/* <hr className="divider" /> */}

          {/* <div className="info-container">
              <img src={tree} alt="tree" />
            <div className="info-box-wednesday">
              <br></br>
              <br></br>
              <div className="development-text">
              <p className="development-subtitle">Wednesday Circle</p>
                Our weekly occurring class is our most popular and the easiest way to taking your first steps on your journey with us.
                This is open to non-members at a cost of £6 per session and held
                every week from 8pm to 10pm (please arrive at least 15 minutes
                earlier).
              </div>
            </div>
          </div> */}

          {/* <hr className="divider" /> */}

          <div className="board">
            <div className="square" data-aos="fade-right">
              <div className="development-text">
                <br></br>
                <br></br>

                <p>Our Classes Ensure That:</p>
                <br></br>
                <p style={{ fontSize: "20px" }}>
                  ◎ They are <i>Spirit</i> led - your teaching, demos and
                  guidance is channelled as opposed to only learning that which
                  your teacher has learned.
                </p>
                <br></br>
                <p style={{ fontSize: "20px" }}>
                  ◎ Developing and improving your link with <i>Spirit</i> will
                  open a world to you that will inspire you to explore further
                  and deeper than you thought possible.
                </p>
                <br></br>
                <p style={{ fontSize: "20px" }}>
                  ◎ Conducted in complete safety - you will be taught the basics
                  from learning to ground and protect yourself, to making your
                  first links and delivering your first <i>Spirit</i> reading.
                </p>
              </div>
            </div>
            <div className="square" data-aos="fade-left">
              <img src={door} alt="door" />
            </div>
            <div className="square" data-aos="fade-right">
              <img src={trees} alt="tree" />
            </div>
            <div className="square" data-aos="fade-left">
              <div className="development-text">
                <p className="development-subtitle">Wednesday Circle</p>
                Our weekly occurring class is our most popular and the easiest
                way to taking your first steps on your journey with us. This is
                open to non-members at a cost of £6 per session and held every
                week from 8pm to 10pm (please arrive at least 15 minutes
                earlier).
              </div>
            </div>
          </div>

          <hr className="divider" />
          <p className="no-limit-slogan">
            The only limitations to working with Spirit are those you place upon
            yourself.
          </p>
          <hr className="divider" />





          <span className="development-subtitle">
            Deep Core Meditation Workshop
          </span>
          <div className="development-text">
            This is open only to members at a cost of £10 per session and held
            every other week 7.30pm to 9.30pm.
          </div>
          <span className="development-subtitle">
            Angel and Fairy Cards Sessions
          </span>
          <div className="development-text">
            Using the ancient art of Tarot Cards and updating this to the
            beautiful colourful detail shown on Angel and Fairy Cards. We use
            the cards in our guided layouts to interpret and evoke intuition and
            psychic abilities. You will be surprised at how quickly you adapt to
            this art and how accurate these type of readings become. In a
            friendly and relaxed atmosphere, explore your potential by reading
            when you are ready for our interested sitters.
            <br></br>
            <br></br>
            This will take place the 1st Saturday of every month from 14:00 to
            15:30 and open to non-members at a cost of £5 per session.
            <br></br>
            <br></br>
            Please let us know in advance, to make sure you can secure your
            space.
          </div>
          <span className="development-subtitle">Becoming a Healer</span>
          <div className="development-text">
            This takes place every two months and it is open to any previous
            students and future qualifying students.
          </div>
          <span className="development-subtitle">Advanced Healing</span>
          <div className="development-text">
            The Lileth offers all its members the opportunity to become fully
            qualified healers with a recognised organisation.
            <br></br>
            <br></br>
            Please note you can only train as a healer if you are a member.
            Annual membership at the Lileth is £50 per annum which also covers
            you for insurance and if only training as a healer, £10 per session
            held once a month on a Wednesday evening. You will also be required
            to assist as often as possible at the Saturday Healing under the
            guidance of a fully qualified healer.
            <br></br>
            <br></br>
            Other costs included for trainee healing are yearly membership of
            £16 with the Essex Healers Association (EHA) which is affiliated to
            The Healer Practitioner Association International (HPAI) and a one
            off £10 fee for the training manual and personal profile record.
            <br></br>
            <br></br>
            You will find we provide a very balanced programme to qualify as a
            healer at a very reasonable cost!
          </div>
          <span className="development-subtitle">Meditation Course</span>
          <div className="development-text">
            What is Meditation?
            <br></br>
            <br></br>
            "Meditation is considered to be a prolonged state of concentration"
            <br></br>
            <br></br>
            There is a misconception that we must clear our mind and not think
            of anything, the brain is mainly a busy thinking organ and therefore
            can never really be empty. This is the reason why so many give up
            meditating, as they try to empty the mind, fail and then label
            meditation to be too hard. Remember you are a living person who
            processes thought every second of your day ,so each of you will fine
            your own pathway to the meditation that suits you.
            <br></br>
            <br></br>
            You will be taught the following:
            <br></br>
            <br></br>
            1. Awareness <br></br>
            2. Concentration <br></br>
            3. Willpower
            <br></br>
            <br></br>
            This is a focus that your brain will find the easiest to absorb and
            therefore meditation will follow in a progressive manner.
            <br></br>
            <br></br>
            The course is designed for people who wish to look inward allowing
            themselves to make changes in their lives that suit them. Through
            this process you'll learn about controlling your awareness, which in
            turn will allow you to direct energy towards manifesting what you
            need in your life.
            <br></br>
            <br></br>
            The duration of the course is for 2 hours a week for 12 weeks If
            you're interested in this course, please contact us via Email.
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Development);
