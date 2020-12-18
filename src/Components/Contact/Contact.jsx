import React,{useContext} from "react";
import {AppContext} from "../../ContextApi/Reducer"
import "./Contact.scss";
import { Zoom } from "react-reveal";

const Contact = () => {
  const {contact} = useContext(AppContext);
  const [showContact,setShowContact] = contact;

 const ContactMe = () => {
   setShowContact(true)
 }
  return (
    <div id="contact" className="contact_container">
      <Zoom bottom delay={100}>
        <div className="contact-me">Like what you see?</div>
        <h1 className="contact_title">Hire me!</h1>
        <div className="about_me-now">
          I'm currently doing freelancing,so feel free to contact me,I will
          respond as soon as possible
        </div>

        <div onClick={()=>ContactMe()} className="say_hello">Say Hello!</div>
      </Zoom>
    </div>
  );
};

export default Contact;
