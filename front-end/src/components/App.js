import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Store from './Store/Store';
import Gallery from './Gallery';
import Login from './Login';
import Dash from './Dash';

import 'normalize.css';
import '../smaccs/main.scss';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/store' component={Store} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/cato' component={Login} />
            <Route path='/dash' component={Dash} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
