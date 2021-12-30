import React from "react";
import { withRouter } from "react-router";
import phone from "../styles/assets/phone-call-white.png";
import { TextField } from "@material-ui/core";
import { toast } from 'bulma-toast'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      name: "",
      senderEmail: "",
      number: "",
      email: "tamdee13@gmail.com", // send to lileth email
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleToast = message => toast({
    message: message,
    position: 'bottom-center',
    type: 'is-success is-light',
    duration: '3000',
    animate: { in: 'fadeIn', out: 'fadeOut' },
  });

  resetForm = () => this.setState({ feedback: "", name: "", senderEmail: "", number: "", isLoading: false });

  onResponse = res => {
    console.log("Email successfully sent!");
    this.handleToast('Message Sent Successfully!')
    this.resetForm();
  }

  onError = (err) => {
    console.error(
      "Oh well, you failed. Here some thoughts on the error that occured:",
      err
    );
    this.handleToast('Something went wrong, please contact us directly');
    this.resetForm();
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("service_76f082x", templateId, variables)
      .then((res) => this.onResponse())
      .catch((err) => this.onError(err));
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

    this.setState({ isLoading: true });
  }

  handleChange(event, fieldName) {
    this.setState({ [fieldName]: event.target.value });
  }

  render() {
    const { name, senderEmail, number, feedback, isLoading } = this.state;
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
          <button
            className={`button is-primary ${isLoading && "is-loading"}`}
            onClick={this.handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Contact);
