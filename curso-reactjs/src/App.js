import './style.css'

import React, { Component } from 'react';

import Header from './components/Header';
import Main from './pages/main';
import Routes from './routers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
