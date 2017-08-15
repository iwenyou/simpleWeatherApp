import React, {Component} from 'react';
import {connect} from 'react-redux'
import Chart from '../components/chart';
import _ from 'lodash';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" units="C"/></td>
        <td><Chart data={pressures} color="green" units="HPA"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>temperature (K)</th>
            <th>pressure (HPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapDispatchToProps({weather}) {
  return {weather}; // === {weather: weather} ES6
}

export default connect(mapDispatchToProps)(WeatherList);
