import React from "react";
import Layout from "../../HighOrderComponent/Layout/Layout";
import Main from "../Main/Main";

import FacebookIcon from "../../Resources/icons/facebook.svg";
import InstagramIcon from "../../Resources/icons/instagram.svg";
import TwitterkIcon from "../../Resources/icons/twitter.svg";
import GitHubIcon from "../../Resources/icons/github.svg";
import LinkedinIcon from "../../Resources/icons/linkedin.svg";
import {Link} from "react-router-dom"
import "./Home.scss";
import Technologies from "../Technologies/Technologies";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";
import About from "../About/About";
import LetsTalk from "../LetsTalk/LetsTalk";
import { useContext } from "react";
import { AppContext } from "../../ContextApi/Reducer";
import { Fade } from "react-reveal";

const Home = (props) => {
  
  return (
   <>
      <LetsTalk  />
      <Layout> 

          <div  className="home-container">
        
            <Main />
            <About id="about" />
            <Technologies id="technologies" />
            <Works id="work" />
            <Contact id="Contact" />
          </div>
          <div className="sides social_media">
            <div className="images-container">
              <a href="https://github.com/abdobaad" target="_blanc">
                <img src={GitHubIcon} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/abderrahim-baad-358b71182/"
                target="_blanc"
              >
                <img src={LinkedinIcon} alt="linkedin" />
              </a>
              <a href="https://www.instagram.com/abderrahimbaad/" target="_blanc">
                <img src={InstagramIcon} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/abdarrahim.baad/" target="_blanc">
                <img src={FacebookIcon} alt="facebook" />
              </a>
              <a href="https://twitter.com/AbderrahmBaad" target="_blanc">
                <img src={TwitterkIcon} alt="twitter" />
              </a>
            </div>
          </div>

          <div className="sides email">
            <div className="email-container">abdobaad9991@gmail.com</div>
          </div>
        </Layout>
   </>
  );
};

export default Home;
