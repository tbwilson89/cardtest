import React, { Component } from 'react';
import './App.css';

import Card from './project/card.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='center-app'>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
