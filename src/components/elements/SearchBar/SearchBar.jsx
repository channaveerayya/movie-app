import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "./Search.scss";

class SearchBar extends Component {
  state = {
    value: ""
  };
  timeout = null;
  doSearch = event => {
    this.setState({ value: event.target.value });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  };
  render() {
    return (
      <div id="search" className="searchBar">
        <div className="searchBar-content">
          <FontAwesome
            className="searchBar-fa-search"
            name="search"
            size="2x"
          />
          <input
            type="text"
            name="text"
            className="searchBar-input"
            placeholder="Search Movie"
            onChange={this.doSearch}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
