import React, { Component }     from 'react'

class SearchBar extends Component {
    render() {
        return (
            <form className="input-group">
                <input/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </span>
            </form>

        )
    }
}

export { SearchBar }