import React,{useContext,useState} from "react";
import Header from "../../Components/Header_Footer/Header/Header";
import Footer from "../../Components/Header_Footer/Footer/Footer";
import {AppContext} from "../../ContextApi/Reducer";

import "./Layout.scss";

interface ILayout {
  children:React.ReactNode
}

const Layout:React.FC<ILayout> = ({children}):JSX.Element => {
  
  const {contact} = useContext(AppContext);
  const [showContact,setShowContact] = contact;

  const [scroll, setScroll] = useState<number>(0);
  

  window.onscroll = function () {
    setScroll(window.scrollY);
  };

  return (
    <div  style={showContact? {position:"fixed"}:{}}  className="layout_container">
      <Header scroll={scroll} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
