import React, { Component } from 'react';
import './App.css';
import './bootstrap-grid.min.css';
import Header from './components/Header';
import Cards from './components/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Cards></Cards>
      </div>);
  }
}
export default App;