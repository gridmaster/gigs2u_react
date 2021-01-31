import React from "react";
import GigDetail from "./GigDetail";
import GigCard from "./GigCard";
import HeaderCard from "./HeaderCard";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Event from "./EventImage";
import "../style/gigstyle.css";
import "../style/gigList.css";

class App extends React.Component {

  render() {
    const imageList = [
      { id: 1, link: "../images/benefit.jpg" },
      { id: 2, link: "../images/fire.jpg" },
      { id: 3, link: "./sticky.jpg" }
    ];
    
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar />
        <ImageList images={imageList} />
      </div>
    );
  }
}

export default App;
