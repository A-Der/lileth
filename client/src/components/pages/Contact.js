import React from "react";
import { withRouter } from "react-router";
import phone from "../styles/assets/phone-call-white.png";
import { Button, TextField } from "@material-ui/core";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      name: "",
      senderEmail: "",
      number: "",
      email: "tamdee13@gmail.com", // send to lileth email
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  sendFeedback(templateId, variables) {
    console.log(variables);
    window.emailjs
      .send("service_76f082x", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  handleSubmit(event) {
    const templateId = "template_y0lkzau";
    const { feedback, name, senderEmail, number, email } = this.state;
    const fromName = `${name} - ${senderEmail}, ${number}`;

    this.sendFeedback(templateId, {
      message: feedback,
      from_name: fromName,
      reply_to: email,
    });
  }

  handleChange(event, fieldName) {
    this.setState({ [fieldName]: event.target.value });
  }

  render() {
    // console.log(Formm)
    const { name, senderEmail, number, feedback } = this.state;
    return (
      <div className="contact-page">
        <div className="contact-title">
          Contact
          <p className="contact-subtitle">
            <img className="phone-icon" src={phone} alt="phone-icon" /> 0189 546
            5676
          </p>
        </div>
        <div name="contact-form" className="contact-form">
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            type="text"
            value={name}
            required
            onChange={(e) => this.handleChange(e, "name")}
          />
          <br></br>
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            type="text"
            value={senderEmail}
            required
            onChange={(e) => this.handleChange(e, "senderEmail")}
          />
          <br></br>
          <TextField
            id="filled-basic"
            label="Number"
            variant="filled"
            type="text"
            value={number}
            onChange={(e) => this.handleChange(e, "number")}
          />
          <br></br>
          <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="filled"
            onChange={(e) => this.handleChange(e, "feedback")}
            required
            value={feedback}
          />
          <br></br>
          <Button
            // variant="contained"
            value="Submit"
            color="success"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Contact);
