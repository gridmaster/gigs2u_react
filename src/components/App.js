import React from "react";
import HeaderCard from "./HeaderCard";
import SearchBar from "./SearchBar";
import BandList from "./BandList";
import GigList from "./GigList";
import "../style/gigstyle.css";
import "../style/gigList.css";
import "../style/searchstyle.css";

class App extends React.Component {

  render() {
    const bandList = [
      // { key: 1, link: "../images/benefit.jpg", event: "Big whopper dopper!", date: "2/22/2021" },
      { key: 2, link: "../images/fire.jpg", event: "Amazing music!", date: "2/11/2021" },
      { key: 3, link: "../images/sticky.jpg", event: "Woo-Hoo!!!", date: "2/18/2021" },
      { key: 4, link: "../images/blindfaith.jpg", event: "Can't find my way!", date: "2/26/2021" },
      { key: 5, link: "../images/Wheelsofilre.jpg", event: "I'm down at the Crossroads!", date: "3/5/2021" },
      { key: 6, link: "../images/electriclady.jpg", event: "Voodoo Chile'", date: "3/10/2021" }
    ];
    
    const gigList = [
      { key: 1, link: "../images/gig1.jpg", event: "A really big show!", date: "2/22/2021" },
      { key: 2, link: "../images/gig2.jpg", event: "Amazing live music!", date: "2/11/2021" },
      { key: 3, link: "../images/gig3.jpg", event: "All the best music!", date: "2/18/2021" },
      { key: 4, link: "../images/gig4.jpg", event: "Get your tickets now!!", date: "2/26/2021" },
      { key: 5, link: "../images/gig5.jpg", event: "Come down to the Crossroads!", date: "3/5/2021" },
      { key: 6, link: "../images/gig6.jpg", event: "Live music all night long!", date: "3/10/2021" }
    ];

    console.log(process.env.PUBLIC_URL);

    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <HeaderCard />
        <SearchBar />
        <h1 style={{color : 'white', fontSize:33}}>Bands playing</h1>
        <BandList events={bandList} />
        <h1 style={{color : 'white', fontSize:33}}>Upcoming gigs</h1>
        <GigList events={gigList} />
      </div>
    );
  }
}

export default App;
