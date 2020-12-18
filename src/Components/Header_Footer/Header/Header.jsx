import React,{ useState,useContext }  from "react";

import { Link } from "react-scroll";
import {AppContext} from "../../../ContextApi/Reducer";
import { Fade } from "react-reveal";
import "./Header.scss";




const navList = ["About","Technologies", "Work", "Contact"];
const Header = ({ scroll }) => {
  const {MobileNavigation} = useContext(AppContext);
  const [show,setShow] = useState(false);
  const [showNav,setShowNav] = MobileNavigation;
  const AnimateAndShow = () => {
     setShow(!show);
     setShowNav(!showNav);
  }
  return (
    <div
      style={scroll !== 0 ? { boxShadow: "1px 0px 3px #a7b1d054" } : null}
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
        <div onClick={()=>AnimateAndShow()} id={showNav ? 'clicked_nav':''} className="header_burger-menu" >
        
                 <div className="nav_container" id={showNav ? 'show-nav_container':""} />
                  {showNav &&  <div  className="mob-navigation_container">{ navList.map((item, i) => (
                      <Fade key={i} top delay={100 * i}>
                      <div onClick={()=> setShowNav(false)} className="link_container">
                      <Link
                          onClick={()=>setShowNav(false)}
                          smooth
                          style={{
                            animationDelay: `${i * 0.01}s`,
                          }}
                          className={i == 0 ? `left_corner` : i === navList.length - 1 ? 'right_corner' : 'from_top'}
                          to={item.toLowerCase()}    
                        >
                          {item}
                        </Link>
                      </div>
                      </Fade>)
                )} </div>} 
                
          <div className="line"  />
        </div>
      </header>
    </div>
  );
};

export default Header;
