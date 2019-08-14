import React, {Component} from 'react'
import './SearchBar.css'
import FilterBar from './FilterBar'

export default class SearchBar extends Component {
  render() {
    return(
      <div>
        <fieldset className="searchBarField">
          <form className="searchBarForm">
            <label for="searhBarInput">Search</label>
            <input 
              type="text"
              placeholder="holes" />
            <button type="submit">submit</button>
          </form>
        </fieldset>
        <FilterBar />
      </div>
    )
  }
}