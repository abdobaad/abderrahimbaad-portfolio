import React from "react";
//import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Header.scss";

import { Fade } from "react-reveal";

const navList = ["About", "Work", "Contact"];

const Header = ({ scroll }) => {
  return (
    <div
      style={scroll !== 0 ? { boxShadow: "1px 0px 3px #000" } : null}
      className="header_container"
      onScrollCapture={() => console.log("scrool")}
    >
      <header>
        <a href="/">
          <div className="logo">
            <span>B</span>aad
          </div>
        </a>
        <nav className="navigation">
          {navList.map((item, i) => (
            <Fade key={i} top delay={400 * i}>
              <Link
                smooth
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
                to={item.toLowerCase()}
              >
                {item}
              </Link>
            </Fade>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Header;
