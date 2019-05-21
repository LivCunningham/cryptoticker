import React, { Component } from 'react'
import Ticker from './components/Ticker'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Ticker />
        </main>
      </>
    )
  }
}

export default App
