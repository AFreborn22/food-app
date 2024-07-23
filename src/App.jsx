import React from 'react';
import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Product from './components/Product';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const TRACKING_ID = "G-5K2KXYQ1GE";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Product />
      <About />
      <Footer />
    </div>
  );
}

export default App;