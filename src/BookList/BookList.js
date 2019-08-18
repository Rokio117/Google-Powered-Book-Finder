import React, { Component } from 'react';
import Book from './Book';

export default class BookList extends Component {
  render() {
    console.log(this.props.NewData, 'newData in BookList');
    // return <>{this.props.newData.map(book => {
    //   return <Book book={book} />
    // })}</>;
    //}
    return <div>Hi</div>;
  }
}
