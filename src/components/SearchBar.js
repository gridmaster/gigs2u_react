import React from "react";
import "../style/searchstyle.css"

class SearchBar extends React.Component {
    state = {term: "Type a gig or location"};

    onFormSubmit = event => {
        event.preventDefault();
 
        console.log(this.state.term);
    };

    onMouseClick = event => {
        event.preventDefault();
        
        if(this.state.term === "Type a gig or location") {
            this.setState({term: ""});
        }
    }

    render() {
        return (
            <div className="ui segemnt">
                <form onSubmit={this.onFormSubmit} onClick={this.onMouseClick} className="ui form">
                    <div className="field">
                        <select value="Band" style={{width: "120px"}}>
                            <option value="Band">Band</option>
                            <option value="Gig">Gig</option>
                            <option value="Venue">Venue</option>
                            <option value="Vendor">Vendor</option>
                        </select>
                        <input type="text" className="search" value={this.state.term} onChange={e => this.setState({term: e.target.value})}
                            style={{background: "#77868F", color: "lightblue"}}/>
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;