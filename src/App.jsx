import { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Product from './components/Product';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const TRACKING_ID = 'G-5K2KXYQ1GE'; 
ReactGA.initialize(TRACKING_ID);

function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

function App() {
  usePageViews();

  useEffect(() => {
   
    const email = email;
    ReactGA.set({ email });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Carousel />
        <Product />
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
