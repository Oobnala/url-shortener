import './Menu.scss';

const Menu = () => {
  return (
    <div className="menu">
      <button className="menu__btn menu__btn--link">
        <h2>Features</h2>
      </button>
      <button className="menu__btn menu__btn--link">
        <h2>Pricing</h2>
      </button>
      <button className="menu__btn menu__btn--link">
        <h2>Resources</h2>
      </button>

      <div className="menu__divider"></div>
      <div className="menu__action ">
        <button className="menu__btn menu__btn--link">
          <h2>Login</h2>
        </button>
        <button className="menu__btn menu__btn--signup">
          <h2>Sign Up</h2>
        </button>
      </div>
    </div>
  );
};

export default Menu;
