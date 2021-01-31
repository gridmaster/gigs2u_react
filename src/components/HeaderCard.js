import React from "react";
import logo from "../images/logobest.jpg";

const HeaderCard = props => {
  return (
    <div>
      <img src={logo} alt="header icon" style={{ width: "200px", height: "200px" }} />
    </div>
  );
};

export default HeaderCard;
