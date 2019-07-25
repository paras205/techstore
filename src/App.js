import React, { Component } from 'react';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Product from './pages/ProductPage';
import Contact from './pages/ContactPage';
import SingleProduct from './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Default from './pages/Default';

import { Route, Switch } from 'react-router-dom';

import Nabar from './components/Navbar';
import Sidebar from './components/SideBar';
import Sidecart from './components/SideCart';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nabar />
        <Sidebar />
        <Sidecart />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch >
        <Footer />
      </React.Fragment>
    );
  }

}

export default App;
