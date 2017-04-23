import React, { Component } from 'react';

class Card extends Component {
  render(){
    return(
      <div className='wrapper'>
        <div className='row'>
          <div className='casting-cost'>5</div>
          <div className='card-name'>Fire Warrior</div>
        </div>
        <div className='row'>
          <div className='devotion-cost'>2f</div>
          <div className='element'>Fire</div>
          <div className='type'>Unit</div>
          <div className='class'>Human Warrior</div>
        </div>
        <div className='image'>This is where the image will be!</div>
        <div className='textbox'>This is where information about what the card does will go</div>
        <div className='stats'>4/5</div>
      </div>
    )
  }
}

export default Card
