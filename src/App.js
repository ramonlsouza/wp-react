import React, { Component } from 'react';
import './App.css';
import './assets/bootstrap-grid.min.css';
import Header from './components/Header';
import Cards from './components/Cards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {activeCategory: 'all'};
  }

  filter(category) {
    this.setState({
      activeCategory: category
    });
  }

  render() {
    return (
      <div className="App">
        <Header activeCategory={this.state.activeCategory} handleFilter={this.filter.bind(this)}></Header>
        <Cards activeCategory={this.state.activeCategory}></Cards>
      </div>);
  }
}
export default App;