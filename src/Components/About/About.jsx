import React from "react";
import Fade from "react-reveal";
import Me from "../../Resources/images/me.jpg";

import "./About.scss";

const About = () => {
  return (
    <div id="about" className="about_container">
      <Fade left>
        <div className="title-container">
          <h1>About Me</h1>
          <div className="line" />
        </div>
      </Fade>
      <Fade duration={500} bottom>
        <div className="about-content">
          <div className="text">
            <div className="f1 section">
              Hello! I'm Abderrahim Baad, a FullStack Javascript Developer based
              in Marrakech, Morocco.
            </div>
            <div className="f2 section">
I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build new things that can help people with their business and bring value to them, I always love learning something new, when I'm not coding I like playing football, swimming, or helping my dad at his store
            </div>
          </div>
          <div className="image">
            <a target="_blanc" href="https://github.com/abdobaad">
              <div className="img-container">
                <div className="sec-cont">{/*  <img src={Me} /> */}</div>
              </div>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
