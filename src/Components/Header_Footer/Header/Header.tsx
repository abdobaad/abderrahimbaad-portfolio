import React,{ useState,useContext }  from "react";

import { Link } from "react-scroll";
import Logo from "../../../Resources/icons/logo.svg"
import {AppContext} from "../../../ContextApi/Reducer";
import { Fade } from "react-reveal";
import data from "../../../Utils/HeaderLink/data.json";
import HeaderLink from "../../../Utils/HeaderLink/HeaderLink"
//styles
import "./Header.scss";



interface IHeader {
  scroll:number
}


const Header:React.FC<IHeader>= ({ scroll }):JSX.Element => {
  const {MobileNavigation} = useContext(AppContext);
  const [show,setShow] = useState(false);
  const [showNav,setShowNav] = MobileNavigation;
  const AnimateAndShow = () => {
     setShow(!show);
     setShowNav(!showNav);   
  }
  return (
    <div
      style={scroll !== 0 ? { boxShadow: "1px 0px 3px #a7b1d054" } : {}}
      className="header_container"
    >
      <header>
        <a href="/">
          <div className="logo">
           <img src={`${Logo}`} alt="logo"/>
          </div>
        </a>
        <HeaderLink />
        <div onClick={()=>AnimateAndShow()} id={showNav ? 'clicked_nav':''} className="header_burger-menu" >
        
                 <div className="nav_container" id={showNav ? 'show-nav_container':""} />
                  {showNav &&  <div  className="mob-navigation_container">{ data.header_data.map((item, i) => (
                      <Fade key={i} top delay={100 * i}>
                      <div onClick={()=> setShowNav(false)} className="link_container">
                      <Link
                          onClick={()=>setShowNav(false)}
                          smooth
                          style={{
                            animationDelay: `${i * 0.01}s`,
                          }}
                          className={i === 0 ? `left_corner` : i === data.header_data.length - 1 ? 'right_corner' : 'from_top'}
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
