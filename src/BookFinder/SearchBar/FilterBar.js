import React, { Component } from 'react';
import './FilterBar.css';
export default class FilterBar extends Component {
  render() {
    return (
      <>
        <label for="printType">Print Type</label>
        <select id="printType">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
        <label for="bookType">Book Type:</label>
        <select id="bookType">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
      </>
    );
  }
}
