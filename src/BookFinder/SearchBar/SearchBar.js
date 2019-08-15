import React, { Component } from 'react';
import './SearchBar.css';
import FilterBar from './FilterBar';

export default class SearchBar extends Component {
  render() {
    //console.log(this.props.handleSubmit, 'handleSubmit in SearchBar');
    return (
      <div>
        <fieldset className="searchBarField">
          <form
            className="searchBarForm"
            onSubmit={e => {
              e.preventDefault();
              this.props.handleSubmit();
              //this.props.handleSubmit();
            }}
          >
            <label htmlFor="searhBarInput">Search</label>
            <input
              type="text"
              placeholder="holes"
              //value=""
              onChange={e => {
                //console.log(e.target.value);
                this.props.handleTextChange(e.target.value);
              }}
            />
            <button type="submit" value="test value">
              submit
            </button>

            <label htmlFor="printType">Print Type</label>
            <select
              id="printType"
              onChange={e => {
                this.props.handleOptionChange(e.target.value);
              }}
            >
              <option>All</option>
              <option>free-ebooks</option>
              <option>paid-ebooks</option>
            </select>
            <label htmlFor="bookType">Book Type:</label>
            <select
              id="bookType"
              onChange={e => {
                this.props.handleBookTypeChange(e.target.value);
              }}
            >
              <option>all</option>
              <option>books</option>
              <option>magazines</option>
            </select>
          </form>
        </fieldset>
      </div>
    );
  }
}
