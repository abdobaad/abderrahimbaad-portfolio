import React from "react";
import "./Main.scss";
import Fade, { Slide } from "react-reveal";
const Main = () => {
  return (
    <div id="main" className="main-home">
      <div className="main-home_content">
        {/*  <Fade bottom delay={400}> */}
        <div className="hi">Hi, My name is</div>
        {/*  </Fade> */}

        <h1 className="devname">Abderrahim Baad.</h1>

        <div className="nfo">I build things for the web.</div>

        <p className="more-nfo">
          I'm a FullStack web developer based in marrakech "Morocco",
          spicializing more in frontEnd with ReactJs exceptional Hight-quality
          websites and applications.
        </p>
      </div>
      <Fade bottom>
        <div className="home_btn">Get in touch</div>
      </Fade>
    </div>
  );
};

export default Main;
