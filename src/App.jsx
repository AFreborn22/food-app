import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Product from './components/Product';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const TRACKING_ID = "G-5K2KXYQ1GE";
ReactGA.initialize(TRACKING_ID);

function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

function App() {
  usePageViews();

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