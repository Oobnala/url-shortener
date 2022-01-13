import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__links">
        <Logo className="nav__logo" />
        <ul className="nav__list">
          <li>
            <h2>Features</h2>
          </li>
          <li>
            <h2>Pricing</h2>
          </li>
          <li>
            <h2>Resources</h2>
          </li>
        </ul>
      </div>
      <div className="nav__menu-button">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav__btns">
        <button className="nav__btn--login">
          <h2>Login</h2>
        </button>
        <button className="nav__btn--signup">
          <h2>Sign Up</h2>
        </button>
      </div>
    </nav>
  );
};
export default Nav;
