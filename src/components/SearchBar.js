import React from "react";
import "../style/searchstyle.css"

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {term: "", option: "Gig"};

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
        
        if(this.state.term === "") {
            this.setState({term: ""});
        }
    }

    render() {
        const options = [{ label: 'Band', value: "band" }, { label: 'Gig', value: "gig" }, { label: 'Venue', value: "venue" }, { label: 'Vendor', value: "vendor" }];
        
        return (
            <div className="ui segemnt" style={{width: "100%", textAlign: "center" }}>

                <form onSubmit={this.onFormSubmit} onClick={this.onMouseClick}>
                    <div style={{width: "100%", textAlign: "center", height: "30px important!"}}>

                        <select value={this.state.option} onChange={this.handleChange} style={{width: "100px", height: "30px", textAlign: "center", background: "#08243c", color: "white"}}>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>

                        <input type="text" placeholder="Type a gig or location" value={this.state.term} onChange={e => this.setState({term: e.target.value})}
                                style={{background: "#08243c", color: "white", width: "400px", height: "33px", borderWidth: "1px", borderColor: "#08243c"}}/>

                        <button style={{height: "30px", borderWidth: 1, borderColor: '#2dd073', background: "#08243c", color: "#2dd073",}}
                        onPress={this._handlePress}>
                        REFINE</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;