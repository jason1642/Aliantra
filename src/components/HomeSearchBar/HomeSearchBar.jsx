import React, { Component } from 'react';
import './HomeSearchBar.css'


class HomeSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
    console.log(this.state.userInput)
  }
  handleSubmit = (e) => {
    //use api to get stock or news data

    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input onChange={this.handleChange} placeholder='Enter name' type='text' value={this.state.userInput} className='home-search-bar' />
      </form>
    );
  }
}

export default HomeSearchBar;