import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage.jsx'
import axios from 'axios'
import MarketsBox from '../MarketsBox/MarketsBox.jsx';





class Container extends Component {
  constructor() {
    super()
    this.state = {
      etfFour: []
    }
  }
  async componentDidMount() {
    // 'stock/profile2'
    // '/quote'




    const IEX_API_KEY = 'pk_3256652724eb490abdfd234401050f50'
    const IEX_DOMAIN = 'https://cloud.iexapis.com/v1/stock/'
    const marketSymbols = ['SPY', 'QQQ', 'IWM', 'DIA']
    // marketSymbols.forEach(async (e) => {
    //   await axios(`${IEX_DOMAIN}${e}/company?token=${IEX_API_KEY}`).then(response => {
    //     // handle success
    //     this.state.etfFour.push(response.data)
    //     console.log(response);
    //   })


    marketSymbols.forEach(async (e) => {
      let resp = await axios(`${IEX_DOMAIN}${e}/company?token=${IEX_API_KEY}`)
      // handle success
      this.state.etfFour.push(resp.data)
      console.log(resp);






      //   .then(
      // this.state.etfFour.push(marketResponse.data))
    })
    // console.log(this.state.etfFour)




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
      {/* <Route render={() => <HomePage stockAPI={this.state.stockAPI} />} /> */}
      {
        this.state.etfFour !== [] ?
          < Route render={routerProps => <MarketsBox etfArray={this.state.etfFour} {...routerProps} />} />
          : <></>
      }
    </>
    );
  }
}

export default Container;