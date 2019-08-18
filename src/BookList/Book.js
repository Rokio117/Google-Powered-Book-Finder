import React, { Component } from 'react';
import './book.css';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  handleExpand = () => {
    return this.setState({ checked: false });
  };
  handleContract = () => {
    return this.setState({ checked: true });
  };

  render() {
    const extraData = this.state.checked ? (
      <button onClick={this.handleExpand}>&#9660;</button>
    ) : (
      <>
        <div className="price">Price:$ {this.props.book.price}</div>
        <p className="description">
          Description: {this.props.book.description}
        </p>
        <img className="bookImage" src={''} alt="" />
        <button className="contractButton" onClick={this.handleContract}>
          &#9650;
        </button>
      </>
    );

    return (
      <div className="book" key={this.props.book.bookNumber}>
        <h2 className="title">Title: {this.props.book.title}</h2>
        <p className="author">Author: {this.props.book.author}</p>
        {extraData}
      </div>
    );
  }
}

// <div className="price">Price:</div>
// <p className="description">description:</p>
// <img className="bookImage" src="https://www.scholastic.com/content5/media/products/03/9780440414803_mres.jpg" alt=""></img>

//onClick={this.handleExpand(this.state)}
