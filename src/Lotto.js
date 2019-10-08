import React, {Component} from 'react';
import Ball from './Ball';
import "./Lotto.css"

class Lotto extends Component {
  static defaultProps = {
    title:"Lotto",
    maxBall: 6,
    maxNum: 40
  }

  state = {
    nums: Array.from({length: this.props.maxBall})
  };

  generate = () => {
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }))


  }


  handleClick = () => {
    this.generate();
  }
  render() {
    return (
      // const  {task, done, id} = this.props
      <section className="Lottery">
      <h1>{this.props.title}</h1>
      <div>
        {this.state.nums.map( n => <Ball num={n} />)}
      </div>

      <button onClick={this.handleClick}>Generate</button>



      </section>
    )
  }
}

export default Lotto;
