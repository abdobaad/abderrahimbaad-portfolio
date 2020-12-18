import React,{useContext,useState} from "react";
import Header from "../../Components/Header_Footer/Header/Header";
import Footer from "../../Components/Header_Footer/Footer/Footer";
import {AppContext} from "../../ContextApi/Reducer";

import "./Layout.scss";

const Layout = (props) => {
  
  const {contact} = useContext(AppContext);
  const [showContact,setShowContact] = contact;
  const [scroll, setScroll] = useState(0);
  

  window.onscroll = function () {
    setScroll(window.scrollY);
  };

  return (
    <div  style={showContact? {position:"fixed"}:{}}  className="layout_container">
      <Header scroll={scroll} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
