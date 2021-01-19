import React from "react";


import Fade, { Slide } from "react-reveal";

//Images
import HtmlIcon from "../../Resources/icons/html5.svg";
import CssIcon from "../../Resources/icons/css.svg";
import JavascriptIcon from "../../Resources/icons/javascript.svg";
import ReactjsIcon from "../../Resources/icons/react.svg";
import NodejsIcon from "../../Resources/icons/node-js.svg";
import Mongodb from "../../Resources/icons/mongodb.svg";
import SassIcon from "../../Resources/icons/sass.svg";
import ReduxIcon from "../../Resources/icons/redux.svg";
import TypescriptIcon from "../../Resources/icons/typescript.svg"

//styles
import "./Technologies.scss";

type Props = {id:string};

const Technologies:React.FC<Props>= ({id}) => {
  return (
    <div id={id} className="technologies">
      <Fade left>
        <div className="title-container">
          <h1>Technologies</h1>
          <div className="line" />
        </div>
      </Fade>

      <div className="tech_icons-container">
        <Slide bottom delay={0} duration={400}>
          <img src={`${HtmlIcon}`} alt="html" />
        </Slide>
        <Slide bottom delay={20} duration={400}>
          <img src={`${CssIcon}`} alt="css3"  />
        </Slide>
        <Slide bottom delay={40} duration={400}>
          <img src={`${SassIcon}`} alt="sass" />
        </Slide>
        <Slide bottom delay={60} duration={400}>
          <img src={`${JavascriptIcon}`} alt="js" />
        </Slide>
        <Slide bottom delay={80} duration={400}>
          <img src={`${TypescriptIcon}`} alt="typescript"/>
        </Slide>
        <Slide bottom delay={95} duration={400}>
          <img src={`${ReactjsIcon}`} alt="react" />
        </Slide>
        <Slide bottom delay={110} duration={400}>
          <img src={"https://www.gatsbyjs.com/Gatsby-Monogram.svg"} style={{height:"4rem"}} alt="gatsby" />
        </Slide>
        <Slide bottom delay={140} duration={400}>
          <img src={`${ReduxIcon}`} alt="redux" />
        </Slide>
       <div className="backend">
       <Slide bottom delay={160} duration={400}>
          <img src={`${NodejsIcon}`} alt="node" />
        </Slide>
        <Slide bottom delay={180} duration={400}>
          <img src={`${Mongodb}`} alt="mongodb" />
        </Slide>
       </div>
       
      </div>
    </div>
  );
};

export default Technologies;
