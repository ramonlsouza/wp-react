import React, { Component } from 'react';
import  './Cards.css';
import './../assets/animate.min.css';

class Cards extends Component {
  render() {
      return(
        <div className="cards">
          <div className="container">
              {(this.props.activeCategory === 'ebook' || this.props.activeCategory === 'all') ? 
                <div className="card animated bounceInUp" data-category="ebook">
                    <div className="item-image">
                        <img alt="item" src="/sample.png"/>
                    </div>
                    <div className="item-content">
                        <h2>Como um software jurídico eleva o atendimento ao cliente</h2>

                        <p className="item-excerpt">
                            Um atendimento de excelência pode ser o grande diferencial competitivo do 
                            seu escritório. E um bom software jurídico é a ferramenta ideal para facilitar 
                            isso! Preparamos um guia completo para você a conhecer (e reconhecer) os 
                            benefícios dessa sofisticada ferramenta para evoluir o atendimento e facilitar 
                            o crescimento do seu escritório.
                        </p>

                        <a href="javascript:void(0);" className="item-link">
                            <img alt="item" src="/icons/plus.svg"/> Saiba mais sobre o ebook
                        </a>
                    </div>
                </div>
              : null
              }
          </div>
        </div>
      )
  }
}
export default Cards;