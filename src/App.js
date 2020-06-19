import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container.jsx'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }






  render() {
    return (
      <div className="App">
        <Header />
        <Container />
      </div>
    )
  }
}

export default App;
