import React, {Component} from 'react'
import Book from './Book'

export default class BookList extends Component {
  render() {
    return(
      <>
        <Book 
        bookInfo={this.props.bookInfo}
        />
      </>
    )
  }
}