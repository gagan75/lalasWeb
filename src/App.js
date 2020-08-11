import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Home from './components/pages/home'
import Collection from './components/pages/collection'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Kashmir from './components/pages/kashmir'
import Category from './components/pages/categories'
import Header from './components/includes/header'
import Footer from './components/includes/footer'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/collection" component={Collection} />
      <Route  path="/about" component={About} />
      <Route  path="/contact" component={Contact} />      
      </Switch>
       <Footer />
    </div>
    </Router>
  );
}

export default App;
