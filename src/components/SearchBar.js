import React from "react";
import "../style/searchstyle.css"

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {term: "Type a gig or location", option: "Gig"};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
         this.setState({ option: e.target.value });
      }

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
        const options = [{ label: 'Band', value: "band" }, { label: 'Gig', value: "gig" }, { label: 'Venue', value: "venue" }, { label: 'Vendor', value: "vendor" }];
        
        return (
            <div className="ui segemnt">
                <form onSubmit={this.onFormSubmit} onClick={this.onMouseClick} className="ui form">
                    <div className="field searchAllign" style={{width: "700px", height: "20px important!"}}>

                        <select value={this.state.option} onChange={this.handleChange} style={{width: "100px"}}>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>

                        <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})}
                                style={{background: "#08243c", color: "white", width: "600"}}/>
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;