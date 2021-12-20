import React from 'react';
import { withRouter } from 'react-router-dom';

class HealingClinics extends React.Component{
  render() {
    return(
      <div className="hc-page">
        <div className="hc-hero" data-aos="fade-in" data-aos-duration={2000}>
          <div className="hc-hero-info">
            <span className="hc-title"> Healing Clinics</span>
            {/* <span className="hc-subtitle">
            Spiritual healing can provide a peaceful uplifting experience of rebalancing and attuning the mind, body and spirit
            </span> */}
          </div>
        </div>
        </div>

    )
  }
}

export default withRouter(HealingClinics)