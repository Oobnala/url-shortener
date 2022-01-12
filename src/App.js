import { useState } from 'react';
import Nav from './components/nav/Nav';
import Landing from './components/landing/Landing';
import Shortener from './components/shortener/Shortener';
import Details from './components/details/Details';
import Boost from './components/boost/Boost';
import Footer from './components/footer/Footer';
import './App.scss';

const App = () => {
  const [error, setError] = useState(false);

  const shortenHandler = (link) => {
    console.log(link);
    if (link.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="app">
      <div className="landing-container">
        <div className="header">
          <Nav />
          <Landing />
        </div>
      </div>
      <div className="shortener-container">
        <div>
          <Shortener error={error} shorten={shortenHandler} />
        </div>
      </div>
      <div className="details-container">
        <Details />
      </div>
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
