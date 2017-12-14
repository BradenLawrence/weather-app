import React, { Component }     from 'react'
import { connect }              from 'react-redux'

class CityList extends Component {
    renderWeather(cityData) {
        return (
            <tr>
                <td>{ cityData.name }</td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => { return { weather: state.weather } }
const CityListContainer = connect(mapStateToProps)(CityList)
export { CityListContainer }