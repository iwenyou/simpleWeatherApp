import React, { Component } from 'react';
import { connect } from 'react-redux'

class WeatherList extends Component {
  renderWeather(cityData){
    const name= cityData.city.name;

    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td>
          {cityData.list[0].main.temp}
        </td>
        <td>
          {cityData.list[0].main.pressure}
        </td>
        <td>
          {cityData.list[0].main.humidity}
        </td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>temperature</th>
            <th>pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapDispatchToProps({ weather }){
  return { weather }; // === {weather: weather} ES6
}

export default connect(mapDispatchToProps)(WeatherList);
