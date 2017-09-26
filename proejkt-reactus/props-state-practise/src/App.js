import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Parent />
      </div>
    );
  }
}

class Parent extends Component {
  render(){
    return(
      <div>
        <h2>Just some info</h2>
        <Cars msg="cars are coolish" model="2400" coolcars={this.props.cars}/>
      </div>
    );
  }
}


Parent.defaultProps = {
  cars: ['BMW', 'Audi', 'Skoda']
}


class Cars extends Component {
  render(){
    return(
      <div>
        <h3>am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
          <p>{this.props.coolcars.map((item,i) =>
              {
                return " "+item;

              })}</p>

      </div>
    );
  }
}

export default App;
