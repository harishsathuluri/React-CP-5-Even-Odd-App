// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}
  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Count <span className="count-value"> {count} </span>
          </h1>
          <p className="description"> Count is {displayText} </p>
          <button onClick={this.onIncrement} className="button1">
            Increment
          </button>
          <p className="para1"> *Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
