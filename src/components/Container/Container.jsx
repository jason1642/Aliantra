import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage.jsx'
import axios from 'axios'





class Container extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  async componentDidMount() {
    const DOMAIN = 'https://finnhub.io/api/v1/quote?symbol=';
    const NAME = 'AAPL'
    const API_KEY = 'brlva87rh5re8ma1oe5g'
    const response = await axios(`${DOMAIN}${NAME}&token=${API_KEY}`)
    this.setState({
      stockAPI: response.data
    })
    console.log(response.data)
  }
  render() {
    return (<>
      <Route render={() => <HomePage stockAPI={this.state.stockAPI} />} />
    </>
    );
  }
}

export default Container;