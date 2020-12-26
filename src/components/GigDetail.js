import React from "react";
import "../style/gigstyle.css";

const GigDetail = props => {
  return (
    <div className="comment gig-time-place">
      <a href="/">
        <img className="gig-image" alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Featuring: {props.bandName}
        </a>
        <div className="metadata">
          <span className="date cardtext">Date: {props.gigDate}</span>
        </div>
        <div className="text cardtext">{props.text}</div>
        <div className="price cardtext">Tickets: {props.ticketPrice}</div>
      </div>
    </div>
  );
};

export default GigDetail;
