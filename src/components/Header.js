import React, { Component } from 'react';
import Twemoji from 'react-twemoji';
import  './Header.css';

class Header extends Component {
  render() {
      return(
        <div className="header">
          <div className="container">
            <span className="header-title">Materiais gratuitos 
              <Twemoji options={{ className: 'twemoji' }}>
                <span aria-label="smiley face emoji" role="img">😀</span>
              </Twemoji>
            </span>

            <button onClick={() => this.props.handleFilter('all')} className={"category " + (this.props.activeCategory === 'all' ? 'active' : '')}><img src="/icons/stack.svg" alt="stack icon" /> Todos</button> 
            <button onClick={() => this.props.handleFilter('o_e-book')} className={"category " + (this.props.activeCategory === 'o_e-book' ? 'active' : '')}><img src="/icons/book.svg" alt="book icon" /> E-books</button> 
            <button onClick={() => this.props.handleFilter('o_infográfico')} className={"category " + (this.props.activeCategory === 'o_infográfico' ? 'active' : '')}><img src="/icons/chart.svg" alt="chart icon" /> Infográficos</button> 
            <button onClick={() => this.props.handleFilter('o_webinar')} className={"category " + (this.props.activeCategory === 'o_webinar' ? 'active' : '')}><img src="/icons/play.svg" alt="play icon" /> Webinar</button> 
            <button onClick={() => this.props.handleFilter('a_ferramenta')} className={"category " + (this.props.activeCategory === 'a_ferramenta' ? 'active' : '')}><img src="/icons/gear.svg" alt="gear icon" /> Ferramentas</button> 

          </div>
        </div>
      )
  }
}
export default Header;