import './Details.scss';
import { ReactComponent as Recognition } from '../../assets/images/icon-brand-recognition.svg';
import { ReactComponent as Records } from '../../assets/images/icon-detailed-records.svg';
import { ReactComponent as Customizable } from '../../assets/images/icon-fully-customizable.svg';

const Details = () => {
  return (
    <div className="details">
      <div className="details__heading">
        <h1 className="details__title">Advanced Statistics</h1>
        <h4 className="details__caption">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </h4>
      </div>
      <div className="details__cards">
        <div className="details__divider"></div>
        <div className="details__card details__card--1">
          <div className="details__icon-container">
            <Recognition />
          </div>
          <h2 className="details__card-title">Brand Recognition</h2>
          <h4 className="details__card-caption">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </h4>
        </div>
        <div className="details__card details__card--2">
          <div className="details__icon-container">
            <Records />
          </div>
          <h2 className="details__card-title">Detailed Records</h2>
          <h4 className="details__card-caption">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </h4>
        </div>
        <div className="details__card details__card--3">
          <div className="details__icon-container">
            <Customizable />
          </div>
          <h2 className="details__card-title">Fully Customizable</h2>
          <h4 className="details__card-caption">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Details;
