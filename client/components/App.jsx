import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Nav />
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
