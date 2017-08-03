import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: '' }
  }
  render(){
    return (
      <form className="input-group">
        <input
          placeholder="Get a five day forecast in your favrite cities"
          className="form-control"
          value={}
          />
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">submit</button>
        </span>
      </form>
    )
  }
}
