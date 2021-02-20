import React from "react";
import "../style/header.css";
import logo from "../images/logobest.jpg";

const HeaderCard = props => {
  return (
    <div className="header">
      <img src={logo} alt="header icon" />
    </div>
  );
};

export default HeaderCard;
