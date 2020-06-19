import React, { Component } from 'react';
import './HomePage.css'
import HomeSearchBar from '../HomeSearchBar/HomeSearchBar.jsx'
import MarketsBox from '../MarketsBox/MarketsBox';






class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <main>
        <HomeSearchBar />
        <MarketsBox stockAPI={this.props.stockAPI} />
      </main>
    );
  }
}

export default HomePage;