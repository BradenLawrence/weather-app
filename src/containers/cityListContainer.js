import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { Map }                  from '../components/map';
import { Chart }                from '../components/chart';

class CityList extends Component {
    renderWeather(cityData) {
        // Create arrays of our data
        let temperatureList = cityData.list.map(listItem => listItem.main.temp * 9/5 - 459.67) // Conversion from kelvin to fahrenheit
        let pressureList    = cityData.list.map(listItem => listItem.main.pressure)
        let humidityList    = cityData.list.map(listItem => listItem.main.humidity)
        let { lat, lon }    = cityData.city.coord
        return (
            <tr key={ cityData.city.id }>
                <td>
                    <Map lon={ lon } lat={ lat }/>
                    { cityData.city.name }
                </td>
                <td>
                    <Chart  
                        height  = {120} 
                        width   = {180} 
                        color   = 'red' 
                        data    = { temperatureList } 
                        unit    = 'F'
                    />
                </td>
                <td>
                    <Chart 
                        height  = {120} 
                        width   = {180} 
                        color   = 'green' 
                        data    = { pressureList }
                        unit    = 'hPa'
                    />
                </td>
                <td>
                    <Chart 
                        height  = {120} 
                        width   = {180} 
                        color   = 'blue' 
                        data    = { humidityList }
                        unit    = '%'    
                    /> 
                </td>
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