import React, { Component } from 'react';

class GoogleMap extends Component {
  //this will run once the components gets loaded
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom:12;
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render(){
    //this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
