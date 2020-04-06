import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav/Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Store from './Store/Store';
import Gallery from './Gallery/Gallery';
import Login from './Admin/Login';
import Footer from './Footer/Footer';
import Cart from './Store/Cart';
import Checkout from './Store/Checkout';

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
            <Route path='/cart' component={Cart} />
            <Route path='/checkout' component={Checkout} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
