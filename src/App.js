import React, { Component } from 'react';
import loadRoutes from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        { loadRoutes() }
      </div>
    );
  }
}

export default App;
