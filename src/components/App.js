import React from "react";
import GigDetail from "./GigDetail";
import GigCard from "./GigCard";
import HeaderCard from "./HeaderCard";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Event from "./EventImage";
import EventCard from "./EventCard";
import "../style/gigstyle.css";
import "../style/gigList.css";

class App extends React.Component {

  render() {
    const eventList = [
      { key: 1, link: "../images/benefit.jpg", event: "Big whopper dopper!", date: "2/22/2021" },
      { key: 2, link: "../images/fire.jpg", event: "Amazing music!", date: "2/11/2021" },
      { key: 3, link: "../images/sticky.jpg", event: "Woo-Hoo!!!", date: "2/18/2021" }
    ];
    
    console.log(process.env.PUBLIC_URL);

    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <HeaderCard />
        <SearchBar />
        <ImageList events={eventList} />
      </div>
    );
  }
}

export default App;
