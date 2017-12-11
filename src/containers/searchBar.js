import React, { Component }     from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    render() {
        return (
            <form className="input-group">
                <input 
                    className = "form-control" 
                    placeholder = "Search for weather reports by city..."
                    value = { this.state.term }
                    onChange = { this.onInputChange }
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </span>
            </form>

        )
    }
}

export { SearchBar }