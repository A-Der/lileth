import React from "react";
import { withRouter } from "react-router";
import AOS from "aos";
// import Formm from '../../Formm.js';
import emailjs from "emailjs";
import "aos/dist/aos.css";
import ice from "../styles/assets/ice.jpg";
import waterfall from "../styles/assets/waterfall-yellow.jpg";
import phone from "../styles/assets/phone-call-white.png";
AOS.init();

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: '', name: 'tamdee13@gmail.com', email: 'tamdee13@gmail.com' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  // state = {
  //   feedback: "Done",
  //   name: "Assia",
  //   email: "tamdee13@gmail.com",
  // };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("service_76f082x", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  handleSubmit(event) {
    const templateId = "template_y0lkzau";

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
  }

  handleChange(event) {
    this.setState({ feedback: event.target.value });
  }

  render() {
    // console.log(Formm)
    return (
      <div className="contact-page">
        <div className="contact-title">
          Contact
          <p className="contact-subtitle">
            <img className="phone-icon" src={phone} alt="phone-icon" /> 0189 546
            5676
          </p>
        </div>
        <form className="test-mailing">
          <h1>Let's see if it works</h1>
          <div>
            <textarea
              id="test-mailing"
              name="test-mailing"
              onChange={this.handleChange}
              placeholder="Post some lorem ipsum here"
              required
              value={this.state.feedback}
              style={{ width: "100%", height: "150px" }}
            />
          </div>
          <input
            type="button"
            value="Submit"
            className="btn btn--submit"
            onClick={this.handleSubmit}
          />
        </form>
        {/* <form className="contact-form" onSubmit={this.sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="html_message" />
      <input type="submit" value="Send" />
    </form> */}
      </div>
    );
  }
}

export default withRouter(Contact);
