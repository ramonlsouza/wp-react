import React, { Component } from 'react';
import  './Header.css';

class Header extends Component {
  render() {
      return(
        <div className="header">
          <div className="container">
            <span onClick={(e) => this.props.handleFilter('all', e)} className={"category " + (this.props.activeCategory === 'all' ? 'active' : '')}><img src="/icons/stack.svg" alt="stack icon" /> Todos</span> 
            <span onClick={(e) => this.props.handleFilter('ebook', e)} className={"category " + (this.props.activeCategory === 'ebook' ? 'active' : '')}><img src="/icons/book.svg" alt="book icon" /> E-books</span> 
            <span onClick={(e) => this.props.handleFilter('infograficos', e)} className={"category " + (this.props.activeCategory === 'infograficos' ? 'active' : '')}><img src="/icons/chart.svg" alt="chart icon" /> Infográficos</span> 
            <span onClick={(e) => this.props.handleFilter('webinar', e)} className={"category " + (this.props.activeCategory === 'webinar' ? 'active' : '')}><img src="/icons/play.svg" alt="play icon" /> Webinar</span> 
            <span onClick={(e) => this.props.handleFilter('ferramentas', e)} className={"category " + (this.props.activeCategory === 'ferramentas' ? 'active' : '')}><img src="/icons/gear.svg" alt="gear icon" /> Ferramentas</span> 
            <span className="header-title">Materiais gratuitos <span role="img" aria-label="smiley face emoji">😀</span></span>
          </div>
        </div>
      )
  }
}
export default Header;