import React, {Component} from 'react'
import SearchBar from './SearchBar/SearchBar'
import FilterBar from './FilterBar/FilterBar'

export default class SearchTab extends Component {
  render() {
    return(
      <>
        <FilterBar />
        <SearchBar />
      </>
    )
  }
}