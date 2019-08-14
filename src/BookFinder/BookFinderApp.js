import React, { Component } from 'react';
import Header from './Header/Header'
import SearchBar from './SearchBar/SearchBar'
import SearchTab from './SearchTab/SearchTab'
import FullHeader from './FullHeader/FullHeader'
import Book from '../BookList/Book'
import BookList from '../BookList/BookList'
import { tsConstructorType } from '@babel/types';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchParams: {
        text: '',
        printType: '',
        bookType: ''
      },
      bookInfo: {
        title: 'Holes',
        author: 'Louis Sachar',
        cost: '$9.00',
        description: 'I like digging holes',
        picture: 'https://www.scholastic.com/content5/media/products/03/9780440414803_mres.jpg',
      }
    }
  }
  render() {
    return (
      <main className='App'>
        <FullHeader />
        <BookList 
          bookInfo = {this.state.bookInfo}
        
        />
      </main>
    );
  }
}
  
