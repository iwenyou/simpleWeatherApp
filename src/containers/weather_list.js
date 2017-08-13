import React, { Component } from 'react';
import { connect } from 'react-redux'

class WeatherList extends Component {
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

        </tbody>
      </table>
    );
  }
}

function mapDispatchToProps({ weather }){
  return { weather }; // === {weather: weather} ES6
}

export default connect(mapDispatchToProps)(WeatherList);
