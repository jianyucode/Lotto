import React, {Component} from 'react';
import logo from './logo.svg';
import Lotto from './Lotto'
import Ball from './Ball';
import "./App.css";

class App extends Component {







  render() {
      return (
        <div>

            <Lotto />

            <Lotto title="Mini Lotto"  maxNum={10} maxBall={4}/>
            <Lotto title="Big Lotto"  maxNum={60} maxBall={7}/>

        </div>
      )
    }
  }
export default App;
