import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
