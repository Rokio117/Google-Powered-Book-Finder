import React, { Component } from 'react';
import Header from '../Header/Header';
import SearchTab from '../SearchTab/SearchTab';

export default class FullHeader extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchTab
          handleSubmit={this.props.handleSubmit}
          handleTextChange={this.props.handleTextChange}
          handleBookTypeChange={this.props.handleBookTypeChange}
          handleOptionChange={this.props.handleOptionChange}
        />
      </>
    );
  }
}
