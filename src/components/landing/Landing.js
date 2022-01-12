import { ReactComponent as Working } from '../../assets/images/illustration-working.svg';

import './Landing.scss';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__info">
        <h1 className="landing__title">More than just shorter links</h1>
        <h3 className="landing__caption">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </h3>
        <button className="landing__btn">
          <h2>Get Started</h2>
        </button>
      </div>
      <Working className="landing__img" />
    </div>
  );
};

export default Landing;
