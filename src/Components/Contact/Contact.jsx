import React from "react";

import "./Contact.scss";
import { Zoom } from "react-reveal";

const Contact = () => {
  return (
    <div id="contact" className="contact_container">
      <Zoom bottom delay={100}>
        <div className="contact-me">Contact me!</div>
        <h1 className="contact_title">Get in touch</h1>
        <div className="about_me-now">
          I Am currently doing freelancing, so feel free to contact me, I will
          respond as soon as possible
        </div>

        <div className="say_hello">Say Hello!</div>
      </Zoom>
    </div>
  );
};

export default Contact;
