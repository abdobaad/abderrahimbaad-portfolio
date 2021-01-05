import React from "react";

import "./Footer.scss";

const Footer:React.FC = ():JSX.Element => {
  return (
    <div className="footer_container">
      <footer className="footer">
      <span className="littlebox-before" />
        <div className="dev">built by Abderrahim Baad</div>
        <div className="copy_right">&#169; CopyRight 2020</div>
        <span className="littlebox-after" />
      </footer>
    </div>
  );
};

export default Footer;
