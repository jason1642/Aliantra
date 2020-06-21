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
    // 'stock/profile2'
    // '/quote'




    const TIINGO_API_KEY = '458b98b2a987d2fba65f5be43ca8f1090488992b'
    const TIINGO_DOMAIN = 'https://api.tiingo.com/tiingo/daily/aapl?token='
    let marketArr = []
    const marketSymbols = ['SPY', 'QQQ', 'IWM', 'DIA']
    // marketSymbols.forEach(async function (e) {
    //   const marketResponse = await axios(`${TIINGO_DOMAIN}${e}?token=${TIINGO_API_KEY}`)
    //   marketArr.push(marketResponse.data)
    // })
    // const marketResponse = await axios(`${TIINGO_DOMAIN}${TIINGO_API_KEY}`)
    // console.log(marketResponse)







    // const DOMAIN = 'https://finnhub.io/api/v1/stock/profile2?isin=';
    // const NAME = 'US78462F1030'
    // const API_KEY = 'brlva87rh5re8ma1oe5g'

    // const response = await axios(`${DOMAIN}${NAME}&token=${API_KEY}`)
    // this.setState({
    //   stockAPI: response.data
    // })
    // console.log(response.data)
  }
  render() {
    return (<>
      <Route render={() => <HomePage stockAPI={this.state.stockAPI} />} />
    </>
    );
  }
}

export default Container;