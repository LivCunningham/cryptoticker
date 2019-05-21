import React, { Component } from 'react'

class CoinImage extends Component {
  render() {
    return (
      <>
        <img
          className="image-coins"
          src={
            'https://s2.coinmarketcap.com/static/img/coins/16x16/' +
            this.props.id +
            '.png'
          }
        />
      </>
    )
  }
}

export default CoinImage
