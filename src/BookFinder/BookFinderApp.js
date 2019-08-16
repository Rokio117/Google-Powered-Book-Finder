import React, { Component } from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import SearchTab from './SearchTab/SearchTab';
import FullHeader from './FullHeader/FullHeader';
import Book from '../BookList/Book';
import BookList from '../BookList/BookList';
import { tsConstructorType } from '@babel/types';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBooks: false,
      type: 'all',
      text: '',
      option: 'all',

      bookInfo: {
        title: 'Holes',
        author: 'Louis Sachar',
        cost: '$9.00',
        description: 'I like digging holes',
        picture:
          'https://www.scholastic.com/content5/media/products/03/9780440414803_mres.jpg'
      }
    };
  }

  handleTextChange = text => {
    this.setState({
      text
    });
    //console.log(text, this.state);
  };

  handleOptionChange = option => {
    //console.log('handleOptionChange ran');
    this.setState({
      option
    });
  };

  handleBookTypeChange = type => {
    this.setState({
      type
    });
  };

  handleSubmit = () => {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    const api = '&key=';
    const key = 'AIzaSyBbKDt56DR4W6p-ncwiMa5IRobUqK-czBE';
    const type =
      this.state.type !== 'all' ? '&printType=' + this.state.type : '';
    const text = this.state.text;
    const formattedText = text.split(' ').join('');
    const searchOptions =
      this.state.option !== 'all' ? '&filter=' + this.state.option : '';
    const maxResults = '&maxResults=5';
    const options = {
      method: 'GET',
      headers: {}
    };
    const url =
      baseUrl + formattedText + maxResults + searchOptions + type + api + key;
    console.log('searchOptions=', searchOptions, 'type=', type, 'text=', text);
    console.log(url);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return response.json();
      })
      .then(response => {
        console.log(response);
        //console.log(response.items[0].saleInfo.retailPrice.amount);
        const newData = response.items.map((item, i) => {
          const newObject = {
            bookNumber: i,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors
              ? item.volumeInfo.authors[0]
              : 'sorry, we could not find an author for that',
            price: item.saleInfo.retailPrice
              ? item.saleInfo.retailPrice.amount
              : 'sorry, we could not find a price for that.',
            description: item.searchInfo
              ? item.searchInfo.textSnippet
              : 'sorry, we could not find a description for that'
          };
          return newObject;
        });
        console.log('new data=', newData);
        this.setState({ newData });
      });
  };

  render() {
    // console.log(this.handleSubmit, 'handle submit on APP');
    console.log(this.state);
    return (
      <main className="App">
        <FullHeader
          handleSubmit={this.handleSubmit}
          handleTextChange={this.handleTextChange}
          handleBookTypeChange={this.handleBookTypeChange}
          handleOptionChange={this.handleOptionChange}
        />
        <BookList
          bookInfo={this.state.bookInfo}
          newData={this.state.newData ? this.state.newData : null}
        />
      </main>
    );
  }
}

// searchParams: {
//         text: '',
//         printType: 'all',
//         bookType: 'all'
//       },
