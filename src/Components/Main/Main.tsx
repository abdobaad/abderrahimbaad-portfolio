import React,{useState,useContext} from "react";
import "./Main.scss";
import Fade from "react-reveal";
import {AppContext} from "../../ContextApi/Reducer";

import msgIcon from "../../Resources/icons/conversation.svg";



const Main:React.FC = ():JSX.Element => {

 const [msgBtn,setMsgBtn] = useState<boolean>(true);
 const {contact} = useContext(AppContext);
 const [showContact,setShowContact] = contact;

 const ContactMe = () => {
   setShowContact(true)
 }

  window.addEventListener('scroll',() => {
     window.scrollY >= 420  && window.scrollY <=2575 ? setMsgBtn(true):setMsgBtn(false)
});
  return (
    <div id="main" className="main-home">
      <div className="main-home_content">  
        
        <div className="baad">
        <Fade bottom cascade delay={300}>
          <span className="top">BA</span>
          </Fade>
          <Fade bottom cascade delay={600}>
          <span className="bottom">AD</span>
          </Fade>
        </div>
      
        <div className="hi">Hi, My name is</div>
        
        <h1 className="devname">Abderrahim Baad.</h1>

        <div className="nfo">I build things for the web.</div>

        <p className="more-nfo">
        Web developer based in Morocco and loves Reactjs.
        </p>
      </div>
      {msgBtn?
      <div onClick={()=> ContactMe()} id={`fixed-home_btn`} > <img src={`${msgIcon}`} alt="msg" /> </div>  
      :
      <div onClick={()=> ContactMe()} className={`home_btn`}><span>Get in touch</span></div>  
      }
    </div>
  );
};

export default Main;
