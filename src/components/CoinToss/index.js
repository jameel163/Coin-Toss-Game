import {Component} from 'react'
import './index.css'

const details = [
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    altText: 'heads',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    altText: 'tails',
  },
]

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, activeId: details[0].id}

  filtering = () => {
    const {activeId} = this.state
    const newFilter = details.find(each => each.id === activeId)
    return newFilter
  }

  getRandom = () => {
    const generateRandomNumber = Math.ceil(Math.random() * details.length)
    this.setState({activeId: generateRandomNumber})

    this.setState(prev => ({
      total: prev.total + 1,
    }))
    if (generateRandomNumber === 1) {
      this.setState(prev => ({heads: prev.heads + 1}))
    } else {
      this.setState(prev => ({tails: prev.tails + 1}))
    }
  }

  render() {
    const {total, heads, tails} = this.state
    const newFilter = this.filtering()
    return (
      <div className="total-bg">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={newFilter.imageUrl} className="image" alt="toss result" />
          <button className="butt" onClick={this.getRandom}>
            Toss Coin
          </button>
          <div className="unOrder">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
