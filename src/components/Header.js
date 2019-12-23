import React, { Component } from 'react';
import  './Header.css';

class Header extends Component {
  render() {
      return(
        <div className="header">
          <div className="container">
            <span className="category active"><img src="/icons/stack.svg" alt="stack icon" /> Todos</span> 
            <span className="category"><img src="/icons/book.svg" alt="book icon" /> E-books</span> 
            <span className="category"><img src="/icons/chart.svg" alt="chart icon" /> Infográficos</span> 
            <span className="category"><img src="/icons/play.svg" alt="play icon" /> Webinar</span> 
            <span className="category"><img src="/icons/gear.svg" alt="gear icon" /> Ferramentas</span> 
            <span className="header-title">Materiais gratuitos <span role="img" aria-label="smiley face emoji">😀</span></span>
          </div>
        </div>
      )
  }
}
export default Header;