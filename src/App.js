import { useState } from 'react';

import Nav from './components/nav/Nav';
import Landing from './components/landing/Landing';
import Shortener from './components/shortener/Shortener';
import Details from './components/details/Details';
import Boost from './components/boost/Boost';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import './App.scss';

const App = () => {
  const [showMenu, setShowMenu] = useState(true);

  const menuHandler = () => {
    console.log('MENU!!!!');
    setShowMenu(!showMenu);
  };

  return (
    <div className="app">
      <div className="landing-container">
        <div className="header">
          <Nav showMenu={menuHandler} />
          {showMenu && <Menu />}
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
