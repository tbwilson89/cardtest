import React, { Component } from 'react';

import Card from './card.js'

class CreateCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputCastingCost: '',
      inputCardName: '',
      inputDevotionReq: '',
      inputElementType: '',
      inputCardType: '',
      inputClass: '',
      inputTypeClass: '',
      inputImage: '',
      inputEffects: '',
      inputStats: '',
      changeElement: ''
    }
    this.updateInputValue = this.updateInputValue.bind(this)
    this.dropdownChangeElement = this.dropdownChangeElement.bind(this)
  }
  updateInputValue(event){
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  dropdownChangeElement(event){
    this.setState({
      [event.target.id]: event.target.value
    })
    switch(event.target.value){
      case 'fire':
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, #c71e0c, #751207, #c71e0c)'
        break;
      case 'ice':
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, #04f2ea, #05d1ca, #04f2ea)'
        break;
      case 'water':
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, #37cdff, #2da2c9, #37cdff)'
        break;
      case 'earth':
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, #d9721d, #964d12, #d9721d)'
        break;
      case 'wind':
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, #a4e616, #82b310, #a4e616)'
        break;
      case 'electric':
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, #ffda1f, #e3c21e, #ffda1f)'
        break;
      case 'light':
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, #faf0cd, #d6d0b4, #faf0cd)'
        break;
      case 'dark':
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, #4a4845, #2e2d2c, #4a4845)'
        break;
      case 'arcane':
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, #801596, #5d0f69, #801596)'
        break;
      case 'void':
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, #5d0f69, #801596, #5d0f69)'
        break;
      case 'aether':
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, #14f09c, #0eb578, #14f09c)'
        break;
      default:
        document.getElementById('card-wrapper').style.background = 'linear-gradient(to bottom right, white, #ddd, white)'
        break;
    }
  }

  render(){
    return (
      <div className='form-wrapper'>
        <section className='creation-form'>
          <h3>Input Card Information Below:</h3>
          <input id='inputCastingCost' onChange={this.updateInputValue} placeholder='Casting Cost' maxLength='2'></input><br/>
          <input id='inputCardName' onChange={this.updateInputValue} placeholder='Card Name'></input><br/>
          <input id='inputDevotionReq' onChange={this.updateInputValue} placeholder='Devotion Requirement'></input><br/>
          <select id='inputElementType' name='element' onChange={this.dropdownChangeElement}>
            <option value=''>Elemental Type 1</option>
            <option value=''>None</option>
            <option value='fire'>Fire</option>
            <option value='ice'>Ice</option>
            <option value='water'>Water</option>
            <option value='earth'>Earth</option>
            <option value='wind'>Wind</option>
            <option value='electric'>Electric</option>
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
            <option value='arcane'>Arcane</option>
            <option value='void'>Void</option>
            <option value='aether'>AEther</option>
          </select>
          <select name='type' id='inputCardType' onChange={this.updateInputValue}>
            <option value=''>Card Type</option>
            <option value='Unit'>Unit</option>
            <option value='Spell'>Spell</option>
            <option value='Location'>Location</option>
            <option value='Paragon'>Paragon</option>
          </select>
          <input id='inputClass' onChange={this.updateInputValue} placeholder='Race / Class'></input><br/>
          <input id='inputImage' onChange={this.updateInputValue} placeholder='Image URL'></input><br/>
          <textarea id='inputEffects' onChange={this.updateInputValue} placeholder='Card Effects' ></textarea><br/>
          <input id='inputStats' onChange={this.updateInputValue} placeholder='Power/Defense'></input><br/>
          <p>Test Image URL: http://www.shunvmall.com/data/out/253/47488317-warrior-images.png</p>
        </section>
        <section className='display-card'>
          <Card castingCost={this.state.inputCastingCost}
            cardName={this.state.inputCardName}
            devotionReq={this.state.inputDevotionReq}
            elementType={this.state.inputElementType}
            cardType={this.state.inputCardType}
            classRace={this.state.inputClass}
            imageLoc={this.state.inputImage}
            cardEffects={this.state.inputEffects}
            cardStats={this.state.inputStats}
          />
        </section>
      </div>
    )
  }


}

export default CreateCard
