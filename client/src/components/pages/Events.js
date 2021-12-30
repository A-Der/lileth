import React from "react";
import { withRouter } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import event1 from "../styles/assets/event1.png";
AOS.init();

class Events extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="events-page">
        <div
          className="events-hero"
          data-aos="fade-in"
          data-aos-duration={2000}
        >
          <div className="events-hero-info">
            <span className="events-title"> Events</span>
            <span className="events-subtitle">
              All our events will be posted here
            </span>
          </div>
        </div>
        <hr className="divider" />
        <div className="events-body">
          <div class="columns is-centered">
            <div class="column is-half">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by6">
                    <img src={event1} alt="Placeholder" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left"></div>
                    <div class="media-content">
                      <p class="title is-4">Title</p>
                      <p class="subtitle is-6">Date</p>
                    </div>
                  </div>

                  <div class="content">description</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default withRouter(Events);
