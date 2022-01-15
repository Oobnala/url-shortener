import { useState } from 'react';
import './Card.scss';

const Card = (props) => {
  const { url } = props;

  const [isCopied, setIsCopied] = useState(false);

  const copyUrlHandler = async () => {
    await navigator.clipboard.writeText(url.shortUrl);
    await navigator.clipboard.readText().then(() => {
      setIsCopied(true);
    });
  };

  return (
    <div className="card">
      <h3 className="card__url">{url.url}</h3>
      <div className="card__divider"></div>
      <div className="card__action">
        <h3 className="card__shorturl">{url.shortUrl}</h3>
        {isCopied ? (
          <button className="card__btn--copied" onClick={copyUrlHandler}>
            <h2>Copied!</h2>
          </button>
        ) : (
          <button className="card__btn" onClick={copyUrlHandler}>
            <h2>Copy</h2>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
