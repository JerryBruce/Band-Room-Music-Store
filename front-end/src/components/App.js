import React, { Component } from 'react';

import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';

import 'normalize.css';
import '../smaccs/main.scss';

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
