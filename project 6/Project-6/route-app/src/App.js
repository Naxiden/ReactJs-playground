import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <h2>Welcome to react Routing Class</h2>

    <ul>
      <li><Link to="/One">One</Link></li>
      <li><Link to="/Two">Two</Link></li>
      <li><Link to="/Third">Three</Link></li>
      <li><Link to="/Fourth">Fourth</Link></li>
    </ul>
      </div>
    );
  }
}

export default App;
