import React, { Component } from 'react';

class Card extends Component {

  constructor(props){
    super(props)
    this.state = {
      cardType: ''
    }
  }

  render(){
    return(
      <div id='card-wrapper' className='wrapper'>
        <div className='row first'>
          <div className='casting-cost'>{this.props.castingCost}</div>
          <div className='card-name'>{this.props.cardName}</div>
        </div>
        <div className='row second'>
          <div className='devotion-cost'>{this.props.devotionReq}</div>
          <div className='element'>{this.props.elementType}</div>
          <div className='card-section'>
            <span>{this.props.classRace !== '' ? this.props.cardType + ' - ' + this.props.classRace : this.props.cardType}</span>
          </div>
        </div>
        <div className='row third'>
          <div className='image'>
            <img src={this.props.imageLoc} alt='placeholder'></img>
          </div>
        </div>
        <div className='row fourth'>
          <div className='textbox'>{this.props.cardEffects}</div>
        </div>
        <div className='row fifth'>
          <div className='stats'>{this.props.cardPower}</div>
          <div className='health'>{this.props.cardHealth}</div>
        </div>
      </div>
    )
  }
}

export default Card
