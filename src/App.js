import React, { Component } from 'react';
import './App.css';

import CreateCard from './project/createcard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='center-app'>
          <CreateCard />
        </div>
      </div>
    );
  }
}

export default App;
