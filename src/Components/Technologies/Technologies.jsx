import React from "react";
import Fade, { Slide } from "react-reveal";
import HtmlIcon from "../../Resources/icons/html-5.svg";
import CssIcon from "../../Resources/icons/css3.svg";
import JavascriptIcon from "../../Resources/icons/javascript.svg";
import ReactjsIcon from "../../Resources/icons/react.svg";
import NodejsIcon from "../../Resources/icons/nodejs.svg";
import Mongodb from "../../Resources/icons/mongodb.svg";
import SassIcon from "../../Resources/icons/sass.svg";
import ReduxIcon from "../../Resources/icons/redux.svg";

import "./Technologies.scss";

const Technologies = () => {
  return (
    <div id="tech" className="technologies">
      <Fade left>
        <div className="title-container">
          <h1>Technologies</h1>
          <div className="line" />
        </div>
      </Fade>

      <div className="tech_icons-container">
        <Slide bottom delay={0} duration={400}>
          <img src={HtmlIcon} alt="html" />
        </Slide>
        <Slide bottom delay={20} duration={400}>
          <img src={CssIcon} alt="css3" />
        </Slide>
        <Slide bottom delay={40} duration={400}>
          <img src={SassIcon} alt="sass" />
        </Slide>
        <Slide bottom delay={60} duration={400}>
          <img src={JavascriptIcon} alt="js" />
        </Slide>
        <Slide bottom delay={80} duration={400}>
          <img src={ReactjsIcon} alt="react" />
        </Slide>
        <Slide bottom delay={120} duration={400}>
          <img src={ReduxIcon} alt="redux" />
        </Slide>
        <Slide bottom delay={160} duration={400}>
          <img src={NodejsIcon} alt="node" />
        </Slide>
        <Slide bottom delay={180} duration={400}>
          <img src={Mongodb} alt="mongodb" />
        </Slide>
      </div>
    </div>
  );
};

export default Technologies;
