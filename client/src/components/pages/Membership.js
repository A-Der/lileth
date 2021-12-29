import React from "react";
import { withRouter } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import ice from "../styles/assets/ice.jpg";
import waterfall from "../styles/assets/waterfall-yellow.jpg";
AOS.init();

class Membership extends React.Component {
  render() {
    return (
      <div className="membership-page">
        <div className="membership-title">
          Membership for 2022
          <p className="membership-subtitle">
            Annual membership is £50 per annum or two payments of £25.
          </p>
        </div>

        <div className="membership-info">
          <div className="membership-info-title">
            Becoming a member provides many benefits:
          </div>
          <div className="membership-info-text">
            <p>• Healing Sessions reduced to £10</p>
            <p>• Access to Wednesday Circles for £20 per month</p>
            <p>• Free attendance to Rescue Circles</p>

            <p>• Admission to Saturday Fundraisers reduced to £10</p>
            <p>• Ability to train as a healer</p>
            <p>• Once fully qualified as a healer you can join the Advance Healing course</p>
          </div>
        </div>
        <p>Get in touch with us if you wish to become a member</p>

        contact details
      </div>
    );
  }
}

export default withRouter(Membership);
