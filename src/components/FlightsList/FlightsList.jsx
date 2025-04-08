import './FlightsList.scss';

export default function FlightsList() {
  return (
    <div className="flights">
      <ul className="flights__list">
        <li className="flights__item">
          <div className="flights__title">
            <h2 className="price">13 400 P</h2>
            <img src="#" alt="Logo" className="flight__logo" />
          </div>
          <div className="flights__info">
            <div className="flights__info__route">
              <p className="cities">MOW – HKT</p>
              <p className="time">10:45 – 08:00</p>
            </div>
            <div className="flights__info__duration">
              <p className="on-route">В пути</p>
              <p className="time">21ч 15м</p>
            </div>
            <div className="flights__info__layovers">
              <p className="layover">2 пересадки</p>
              <p className="location">HKG, JNB</p>
            </div>
          </div>
          <div className="flights__info">
            <div className="flights__info__route">
              <p className="cities">MOW – HKT</p>
              <p className="time">10:45 – 08:00</p>
            </div>
            <div className="flights__info__duration">
              <p className="on-route">В пути</p>
              <p className="time">21ч 15м</p>
            </div>
            <div className="flights__info__layovers">
              <p className="layover">2 пересадки</p>
              <p className="location">HKG, JNB</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
