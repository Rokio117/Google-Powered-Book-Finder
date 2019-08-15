import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../SearchBar/FilterBar';

export default class SearchTab extends Component {
  render() {
    return (
      <>
        <SearchBar
          handleSubmit={this.props.handleSubmit}
          handleTextChange={this.props.handleTextChange}
          handleBookTypeChange={this.props.handleBookTypeChange}
          handleOptionChange={this.props.handleOptionChange}
        />
      </>
    );
  }
}
