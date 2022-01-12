import { useRef } from 'react';
import './Shortener.scss';

const Shortener = (props) => {
  const { error, shorten } = props;

  const linkInputRef = useRef();

  const linkInputHandler = () => {
    shorten(linkInputRef.current.value);
  };

  return (
    <div className="shortener">
      <input
        ref={linkInputRef}
        className={
          !error
            ? 'shortener__input'
            : 'shortener__input shortener__input--error'
        }
        placeholder="Shorten a link here..."
      />
      <button onClick={linkInputHandler} className="shortener__btn">
        <h2>Shorten it!</h2>
      </button>
      {error && <h3 className="shortener__error-text">Please add a link</h3>}
    </div>
  );
};

export default Shortener;
