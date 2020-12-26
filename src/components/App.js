import React from "react";
//import ReactDOM from "react-dom";
import GigDetail from "./GigDetail";
import GigCard from "./GigCard";
import HeaderCard from "./HeaderCard";
import SearchBar from "./SearchBar";
import "../style/gigstyle.css";
import "../style/gigList.css";
//import benefit from "../images/benefit.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="ui container comment gig-list">
        <HeaderCard></HeaderCard>
        <SearchBar></SearchBar>
        <GigCard className="gig">
          <GigDetail
            bandName="Baby Buntings!"
            gigDate="11/12/20"
            text="What up!"
            avatar="../images/benefit.jpg"
            ticketPrice="$20.00"
          />
        </GigCard>
        <GigCard>
          <GigDetail
            bandName="Bigus Dickus!"
            gigDate="11/01/20"
            text="Nice tats!"
            avatar="../images/benefit.jpg"
            ticketPrice="$15.00"
          />
        </GigCard>
        <GigCard>
          <GigDetail
            bandName="Longfellow!"
            gigDate="11/24/20"
            text="Boofoo! Boofoo!"
            avatar="../images/benefit.jpg"
            ticketPrice="$12.00"
          />
        </GigCard>
      </div>
    );
  }
}

export default App;
