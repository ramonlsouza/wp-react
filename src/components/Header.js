import React, { Component } from 'react';
import  './Header.css';

class Header extends Component {
  render() {
      return(
        <div className="header">
          <div className="container">
            <button onClick={() => this.props.handleFilter('all')} className={"category " + (this.props.activeCategory === 'all' ? 'active' : '')}><img src="/icons/stack.svg" alt="stack icon" /> Todos</button> 
            <button onClick={() => this.props.handleFilter('ebook')} className={"category " + (this.props.activeCategory === 'ebook' ? 'active' : '')}><img src="/icons/book.svg" alt="book icon" /> E-books</button> 
            <button onClick={() => this.props.handleFilter('infograficos')} className={"category " + (this.props.activeCategory === 'infograficos' ? 'active' : '')}><img src="/icons/chart.svg" alt="chart icon" /> Infográficos</button> 
            <button onClick={() => this.props.handleFilter('webinar')} className={"category " + (this.props.activeCategory === 'webinar' ? 'active' : '')}><img src="/icons/play.svg" alt="play icon" /> Webinar</button> 
            <button onClick={() => this.props.handleFilter('ferramentas')} className={"category " + (this.props.activeCategory === 'ferramentas' ? 'active' : '')}><img src="/icons/gear.svg" alt="gear icon" /> Ferramentas</button> 

            <span className="header-title">Materiais gratuitos <span role="img" aria-label="smiley face emoji">😀</span></span>
          </div>
        </div>
      )
  }
}
export default Header;