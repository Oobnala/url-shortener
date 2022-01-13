import Nav from './components/nav/Nav';
import Landing from './components/landing/Landing';
import Shortener from './components/shortener/Shortener';
import Details from './components/details/Details';
import Boost from './components/boost/Boost';
import Footer from './components/footer/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <div className="landing-container">
        <div className="header">
          <Nav />
          <Landing />
        </div>
      </div>
      <Shortener />
      <div className="details-container">
        <Details />
      </div>
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
