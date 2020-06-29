import React from "react";
import Header from "../../Components/Header_Footer/Header/Header";
import Footer from "../../Components/Header_Footer/Footer/Footer";

import "./Layout.scss";
import { useState } from "react";

const Layout = (props) => {
  //myFunction();
  const [scroll, setScroll] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  window.onscroll = function () {
    setScroll(window.scrollY);
  };

  return (
    <div className="layout_container">
      <Header scroll={scroll} isDarkMode={darkMode} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
