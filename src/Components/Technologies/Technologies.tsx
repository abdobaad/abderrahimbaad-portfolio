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
import MySql from "../../Resources/icons/mysql.svg"
import Nextjs from "../../Resources/icons/nextjs-3.svg"

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

     <Slide bottom>
     <div className="tech_icons-container">
        <Slide bottom delay={100} duration={600}>
          <img src={`${HtmlIcon}`} alt="html" />
        </Slide>
        <Slide bottom delay={120} duration={600}>
          <img src={`${CssIcon}`} alt="css3"  />
        </Slide>
        <Slide bottom delay={140} duration={600}>
          <img src={`${SassIcon}`} alt="sass" />
        </Slide>
        <Slide bottom delay={160} duration={600}>
          <img src={`${JavascriptIcon}`} alt="js" />
        </Slide>
        <Slide bottom delay={180} duration={600}>
          <img src={`${TypescriptIcon}`} alt="typescript"/>
        </Slide>
        <Slide bottom delay={200} duration={600}>
          <img src={`${ReactjsIcon}`} alt="react" />
        </Slide>
        <Slide bottom delay={210} duration={600}>
          <img src={`${Nextjs}`} alt="mongodb" />
        </Slide>
        <Slide bottom delay={220} duration={600}>
          <img src={"https://www.gatsbyjs.com/Gatsby-Monogram.svg"} style={{height:"4rem"}} alt="gatsby" />
        </Slide>
        <Slide bottom delay={240} duration={600}>
          <img src={`${ReduxIcon}`} alt="redux" />
        </Slide>
       <div className="backend">
       <Slide bottom delay={260} duration={600}>
          <img src={`${NodejsIcon}`} alt="node" />
        </Slide>
        <Slide bottom delay={280} duration={600}>
          <img src={`${Mongodb}`} alt="mongodb" />
        </Slide>
        <Slide bottom delay={300} duration={600}>
          <img src={`${MySql}`} alt="mongodb" />
        </Slide>
       </div>
       
      </div>
     </Slide>
    </div>
  );
};

export default Technologies;
