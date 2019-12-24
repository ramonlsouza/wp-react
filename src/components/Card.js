import React, { Component } from 'react';
import './Card.css';
import './../assets/animate.min.css';

class Card extends Component {
  render() {
      return(
        <div className="cards">
          <div className="container">
              {(this.props.activeCategory === this.props.data.category || this.props.activeCategory === 'all') ?
                <div className="card animated bounceInUp" data-category={this.props.data.category}>
                    <div className="item-image">
                        <img alt="item" src={this.props.data.image}/>
                    </div>
                    <div className="item-content">
                        <h2>{this.props.data.title}</h2>

                        <span className="item-excerpt" dangerouslySetInnerHTML={{__html: this.props.data.description}}>
                        </span>

                        <a target="_blank" rel="noopener noreferrer" href={this.props.data.link} className="item-link">
                            <img alt="item" src="/icons/plus.svg"/> Saiba mais sobre {this.props.data.category.replace('_',' ')}
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
export default Card;