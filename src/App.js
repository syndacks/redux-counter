import React, { Component, Fragment } from 'react';

import CountHeader from './components/CounterHeader/CounterHeader';
import CountButton from './components/CountButton/CountButton';

import classes from './App.css'

class App extends Component {
  state = {
    counter: 0
  }

  addOneHandler = () => {
    const prevState = this.state.counter;
    let newState = prevState + 1;
    this.setState({counter: newState})
  }

  subtractOneHandler = () => {
    const prevState = this.state.counter;
    let newState = prevState - 1;
    this.setState({counter: newState})
  }

  addFiveHandler = () => {
    const prevState = this.state.counter;
    let newState = prevState + 5;
    this.setState({counter: newState})
  }

  subtractFiveHandler = () => {
    const prevState = this.state.counter;
    let newState = prevState - 5;
    this.setState({counter: newState})
  }

  render() {
    const sumTypes = [
      {name: "Add One", ammountHandler: this.addOneHandler},
      {name: "Subtract One", ammountHandler: this.subtractOneHandler},
      {name: "Add Five", ammountHandler: this.addFiveHandler},
      {name: "Subtract Five", ammountHandler: this.subtractFiveHandler},
    ];

    let myButtons = sumTypes.map((i) => {
      return (
        <CountButton
          sumType={i.name}
          clicked={i.ammountHandler}
          key={i.name}
          className={classes.button}
          />
      )
    });

    return (
      <Fragment>
        <CountHeader count={this.state.counter}/>
        <div className={classes.ButtonGrid}>
          {myButtons}
        </div>
      </Fragment>
    );
  }

}

export default App;
