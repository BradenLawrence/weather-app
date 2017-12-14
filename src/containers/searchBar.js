import React, { Component }     from 'react'
import { bindActionCreators }   from 'redux'
import { connect }              from 'react-redux'
import { getWeather }           from '../actions/index'   

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onFormSubmit(event) {
        event.preventDefault()
        this.props.getWeather(this.state.term)
        this.setState({ term: '' })
    }

    onInputChange(event) {
        this.setState({ term: event.target.value })
    }

    render() {
        return (
            <form onSubmit={ event => this.onFormSubmit(event) } className="input-group">
                <input 
                    className = "form-control" 
                    placeholder = "Search for weather reports by city..."
                    value = { this.state.term }
                    onChange = { event => this.onInputChange(event) }
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </span>
            </form>

        )
    }
}

// Causes the action creator, whenever it gets called and creates an action,
// bindActionCreators, along with dispatch will make sure it flows into
// all of the middleware and reducers. Makes getWeather available in 'this.props'
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getWeather}, dispatch)
}

// First argument deals with state. We don't really care about state in this container, 
// so we leave it null. That way we can still pass a 2nd argument, our action.
const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar)

export { SearchBarContainer }