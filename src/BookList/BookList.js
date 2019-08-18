import React, { Component } from 'react';
import Book from './Book';

export default class BookList extends Component {
  render() {
    console.log(this.props.newData, 'newData in BookList');
    console.log(this.props.newData.map(data => data.bookNumber));
    return (
      <>
        {this.props.newData.map(book => {
          return <Book book={book} />;
        })}
      </>
    );
  }
}
