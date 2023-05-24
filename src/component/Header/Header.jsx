import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Me from "../../assets/f1.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Aji Mauludin</h1>
        <h5 className="text-light">Web Developer | IT </h5>

        <CTA />
        <HeaderSocial />

        <div className="Me">
          <img src={Me} alt="me" />
        </div>

        <a href="#Contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
