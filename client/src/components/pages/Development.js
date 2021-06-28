import React from "react";
import { withRouter } from "react-router";
import healingHands from "../styles/assets/hands-logo-white.png";
import angel from "../styles/assets/angel-white.png";
import leader from "../styles/assets/leader-white.png";
import tarot from "../styles/assets/tarot-white.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class Development extends React.Component {
  render() {
    return (
      <div className="development-page">
        <article class="message is-link notice">
          <div class="message-header">
            <p>Notice</p>
          </div>
          <div class="message-body">
            Due to COVID-19 this is currently unavailable. However we are
            running circle on line every week, if you wish to join please let us
            know by email Email for more information. These are run every
            Wednesday from 19:30 to 21:30 every week - we look forward to seeing
            you there!
          </div>
        </article>
        <span className="development-title">Development & Training</span>
        <div className="development-subtext">
          <h2>
            The Lileth is proud of its Spiritual Development training and has
            given countless members a firm foundation over many years in which
            to develop their spiritual gifts from mediumship, clairvoyance to
            aura energy, psychometry and platform work.
          </h2>
        </div>
        <div className="development-section">
          <span className="development-subtitle">Is This For Me?</span>
          <div className="development-text">
            Everyone has the potential to develop their psychic abilities and
            intuition. Our Wednesday Circle allows you to work at your own pace
            and unique style.
            <br></br>
            <b></b>
            We provide a wide ranging field of development and believe that
            Spirits teaching is limitless as is your potential to work with
            Spirit in whichever way you choose.
            <br></br>
            <br></br>
            All classes are Spirit led, that is to say, your teaching,
            demonstrations and guidance is channelled from Spirit as opposed to
            only learning that which your teacher has learned in the past. As
            you develop and improve your links and connections with Spirit, you
            will find a world opens up to you that will inspire you to explore
            further and more deeply than you ever thought possible.
            <br></br>
            <br></br>
            All work is done in complete safety. You will be taught the basics
            from learning to ground and protect yourself to making your first
            links and delivering your first Spirit Communication. The only
            limitations to working with Spirit are those you place upon
            yourself.
          </div>
        </div>
        <span className="development-subtitle">Wednesday Circle</span>
        <div className="development-text">
          This is open to non-members at a cost of £6 per session and held every
          week from 8pm to 10pm (please arrive at least 15 minutes earlier).
        </div>
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
          beautiful colourful detail shown on Angel and Fairy Cards. We use the
          cards in our guided layouts to interpret and evoke intuition and
          psychic abilities. You will be surprised at how quickly you adapt to
          this art and how accurate these type of readings become. In a friendly
          and relaxed atmosphere, explore your potential by reading when you are
          ready for our interested sitters.
          <br></br>
          <br></br>
          This will take place the 1st Saturday of every month from 14:00 to
          15:30 and open to non-members at a cost of £5 per session.
          <br></br>
          <br></br>
          Please let us know in advance, to make sure you can secure your space.
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
          Please note you can only train as a healer if you are a member. Annual
          membership at the Lileth is £50 per annum which also covers you for
          insurance and if only training as a healer, £10 per session held once
          a month on a Wednesday evening. You will also be required to assist as
          often as possible at the Saturday Healing under the guidance of a
          fully qualified healer.
          <br></br>
          <br></br>
          Other costs included for trainee healing are yearly membership of £16
          with the Essex Healers Association (EHA) which is affiliated to The
          Healer Practitioner Association International (HPAI) and a one off £10
          fee for the training manual and personal profile record.
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
          There is a misconception that we must clear our mind and not think of
          anything, the brain is mainly a busy thinking organ and therefore can
          never really be empty. This is the reason why so many give up
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
          themselves to make changes in their lives that suit them. Through this
          process you'll learn about controlling your awareness, which in turn
          will allow you to direct energy towards manifesting what you need in
          your life.
          <br></br>
          <br></br>
          The duration of the course is for 2 hours a week for 12 weeks If
          you're interested in this course, please contact us via Email.
        </div>
      </div>
    );
  }
}

export default withRouter(Development);
