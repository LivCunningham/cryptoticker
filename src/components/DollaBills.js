import React, { Component } from 'react'
import CoinImage from './CoinImage'

class DollaBills extends Component {
  render() {
    return (
      <>
        <section className="coins">
          <CoinImage id={this.props.id} />
          <h3 id="title">{this.props.name} </h3>
          <p id="symbol">{this.props.symbol} </p>
          <p id="price">${this.props.price} </p>
        </section>
      </>
    )
  }
}

export default DollaBills
