import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './Shortener.scss';

const Shortener = (props) => {
  const [error, setError] = useState(false);
  const [urls, setUrls] = useState([]);
  const linkInputRef = useRef();

  const shortenLinkHandler = async () => {
    if (linkInputRef.current.value.length === 0) {
      setError(true);
    } else {
      setError(false);
      await axios
        .get(
          `https://api.shrtco.de/v2/shorten?url=${linkInputRef.current.value}`
        )
        .then(async (res) => {
          const { full_short_link: shortUrl, original_link: url } =
            res.data.result;

          const newShortUrl = {
            shortUrl,
            url,
          };

          let urlsArray = urls;
          urlsArray.push(newShortUrl);
          await localStorage.setItem('urls', JSON.stringify(urls));
          setUrls([...urlsArray]);
          console.log(urls);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    console.log('refresh');
    let data = JSON.parse(localStorage.getItem('urls') || '[]');
    setUrls(data);
  }, []);

  return (
    <>
      <div className="shortener__card">
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
          {error && (
            <h3 className="shortener__error-text">Please add a link</h3>
          )}
          <button onClick={shortenLinkHandler} className="shortener__btn">
            <h2>Shorten it!</h2>
          </button>
        </div>
      </div>
      <div className="cards">
        {urls.map((url, index) => {
          return <Card key={index} url={url} />;
        })}
      </div>
    </>
  );
};

export default Shortener;
