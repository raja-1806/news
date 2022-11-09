
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  nam = "Raja"
  render() {
    
    return (
      <div>
      <h1>Hello {this.nam}</h1>
      </div>
    )
  }
}


export default App;
