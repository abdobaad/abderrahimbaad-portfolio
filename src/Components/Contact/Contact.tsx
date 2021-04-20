import React,{useContext} from "react";
import {AppContext} from "../../ContextApi/Reducer"
import "./Contact.scss";
import { Zoom } from "react-reveal";

type Props = {id:string};


const Contact:React.FC<Props> = ({id}):JSX.Element => {
  const {contact} = useContext(AppContext);
  const [,setShowContact] = contact;


  return (
    <div id={id} className="contact_container">
      <Zoom bottom delay={100}>
        <div className="contact-me">Like what you see?</div>
        <h1 className="contact_title">Hire me!</h1>
        <div className="about_me-now">
        I'm currently doing freelancing, so feel free to contact me, I'll respond as soon as possible
        </div>

        <div onClick={()=> setShowContact(true)} className="say_hello">Say Hello!</div>
      </Zoom>
    </div>
  );
};

export default Contact;
