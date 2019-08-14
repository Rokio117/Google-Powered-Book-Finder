import React, {Component} from 'react' 
import Header from '../Header/Header'
import SearchTab from '../SearchTab/SearchTab'

export default class FullHeader extends Component {
  render() {
    return(
      <>
        <Header />
        <SearchTab />
      </>
    )
  }
}