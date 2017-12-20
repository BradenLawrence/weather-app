import React, { Component }             from 'react'
import { connect }                      from 'react-redux'
import { Sparklines, SparklinesLine }   from 'react-sparklines'

class CityList extends Component {
    renderWeather(cityData) {
        // Create arrays of our data
        let temperatureList = cityData.list.map(listItem => listItem.main.temp)
        let pressureList    = cityData.list.map(listItem => listItem.main.pressure)
        let humidityList    = cityData.list.map(listItem => listItem.main.humidity)
        return (
            <tr key={ cityData.city.id }>
                <td>{ cityData.city.name }</td>
                <td>
                    <Sparklines height={93} width={180} data={ temperatureList }>
                        <SparklinesLine color="red"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={ pressureList }>
                        <SparklinesLine color="green"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={ humidityList }>
                        <SparklinesLine color="blue"/>
                    </Sparklines>
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