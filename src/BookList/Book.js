import React, {Component} from 'react'
import './book.css'

export default class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: true
    }
  }

  handleExpand = () => {return this.setState({checked: false})
  }
  handleContract = () => {return this.setState({checked: true})}

  
  
  render() {

    const extraData =  this.state.checked ? <button onClick={this.handleExpand}>&#9660;</button> : 
    
    <>
    <div className="price">Price: {this.props.bookInfo.cost}</div>
    <p className="description">description: {this.props.bookInfo.description}</p>
    <img className="bookImage" src={this.props.bookInfo.picture} alt=""></img>
    <button className="contractButton" onClick={this.handleContract}>&#9650;</button>

    </>


    return(
      <div className="book">
        <h2 className="title">Title:</h2>
        <p className="author">Author:</p>
        {extraData}
      </div>
     
    )
  }
}

        // <div className="price">Price:</div>
        // <p className="description">description:</p>
        // <img className="bookImage" src="https://www.scholastic.com/content5/media/products/03/9780440414803_mres.jpg" alt=""></img>



        //onClick={this.handleExpand(this.state)}