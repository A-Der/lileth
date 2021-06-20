import React from "react";
import { withRouter } from "react-router";
// import waterfallPic from "../styles/assets/waterfall2.jpeg";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="hero" >
          {/* <div className="hero-text">
            The Lileth Healing Sanctuary
          </div> */}
        </div>
        {/* <div> */}
          <div className="home-title">
            The Lileth Healing Sanctuary
            <div className="home-subtitle">A Place For All</div>
          </div>
          <div className="home-text">
          A very warm welcome to the Lileth Website. We are a registered charity
          established for over 50 years based in Uxbridge, West London.<br></br> 
          Our aim is to help those wishing to train further in mediumship, psychic
          abilities, healing and meditation via a Development Circle. <br></br>
          People from all different faiths and abilities are welcome. Whether you are a beginner curious to explore your intuitive side or looking to advance your skills, we hope the Lileth has something to offer you.
          </div>
        {/* </div> */}
      </>
    );
  }
}

export default withRouter(Home);
