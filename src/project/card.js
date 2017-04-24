import React, { Component } from 'react';

class Card extends Component {

  constructor(props){
    super(props)
    this.state = {
      primaryBg: 'grey',
      secondaryBg: '#222'
    }
    this.switchDesign = this.switchDesign.bind(this)
  }
  switchDesign(el){
    switch(el) {
      case 'Fire':
        this.setState ({
          primaryBg: '#c71e0c',
          secondaryBg: '#751207'
        })
        break;
      default:
        this.setState ({
          primaryBg: 'grey',
          secondaryBg: '#222'
        })
        break;
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
            <div className='row'>
              <div className='type'>{this.props.cardType}</div>
              <div className='class'>{this.props.classRace}</div>
            </div>
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
          <div className='stats'>{this.props.cardStats}</div>
        </div>
      </div>
    )
  }
}

export default Card
