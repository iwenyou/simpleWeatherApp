import React, { Component } from 'react';
import { connect } from 'react-redux'

class WeatherList extends Component {
  renderWeather(cityData){
    return (
      <tr>
        <td>
          {cityData.city.name}
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
