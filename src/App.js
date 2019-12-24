import React, { Component } from 'react';
import './App.css';
import './assets/bootstrap-grid.min.css';
import Header from './components/Header';
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'all',
      materials: [],
      dataRoute: process.env.REACT_APP_WORDPRESS_DATA_ROUTE //defined on .env file
    };
  }

  componentDidMount(){
    fetch(this.state.dataRoute)
        .then(res  =>  res.json())
        .then(materials  =>  this.setState((prevState, props) => {
            return { materials:  materials.map(this.mapMaterials)};
        }));
  }

  mapMaterials(material){
      return {
          title:  material.title.rendered,
          description:  material.acf.description,
          image: material.acf.image.url,
          link: material.acf.link,
          category: material.acf.category
      }
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

        {this.state.materials.map((value, index) => {
          return <Card activeCategory={this.state.activeCategory} key={index} data={value}></Card>
        })}
      </div>);
  }
}
export default App;