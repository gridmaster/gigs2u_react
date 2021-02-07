import React from "react";
import "../style/gigstyle.css";

const GigCard = props => {
  return (
    <div className="ui card">
      <div className="content gigcard" style={{background: "black"}}>{props.children}</div>
      <div className="extra content" style={{background: "black"}}></div>
    </div>
  );
};

export default GigCard;
