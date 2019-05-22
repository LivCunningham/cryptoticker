import React, { Component } from 'react'
import DollaBills from './DollaBills'

class Ticker extends Component {
  state = {
    currency: []
  }

  componentDidMount() {
    console.log('component mounted')
    this.getCoinsFromApi()
    setInterval(() => this.getCoinsFromApi(), 10000)
  }

  getCoinsFromApi = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        console.log(json)
        this.setState({
          currency: Object.values(json.data)
        })
      })
  }

  render() {
    return (
      <>
        {this.state.currency.map(coin => {
          return (
            <>
              <div className="card">
                <DollaBills
                  name={coin.name}
                  price={coin.quotes.USD.price}
                  symbol={coin.symbol}
                  id={coin.id}
                />
              </div>
            </>
          )
        })}
      </>
    )
  }
}

export default Ticker
