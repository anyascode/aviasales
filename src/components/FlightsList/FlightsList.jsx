import style from './FlightsList.module.scss';

export default function FlightsList() {
  return (
    <div className={style.flights}>
      <ul className={style.flightsList}>
        <li className={style.flightsItem}>
          <div className={style.flightsTitle}>
            <h2 className={style.price}>13 400 P</h2>
            <img src="#" alt="Logo" className="flight__logo" />
          </div>
          <div className={style.flightsInfo}>
            <div className={style.flightsInfoRoute}>
              <p className={style.cities}>MOW – HKT</p>
              <p className={style.time}>10:45 – 08:00</p>
            </div>
            <div className={style.flightsInfoDuration}>
              <p className={style['on-route']}>В пути</p>
              <p className="time">21ч 15м</p>
            </div>
            <div className={style.flightsInfoLayovers}>
              <p className={style.layover}>2 пересадки</p>
              <p className={style.location}>HKG, JNB</p>
            </div>
          </div>
          <div className={style.flightsInfo}>
            <div className={style.flightsInfoRoute}>
              <p className={style.cities}>MOW – HKT</p>
              <p className={style.time}>10:45 – 08:00</p>
            </div>
            <div className={style.flightsInfoDuration}>
              <p className={style['on-route']}>В пути</p>
              <p className="time">21ч 15м</p>
            </div>
            <div className={style.flightsInfoLayovers}>
              <p className={style.layover}>2 пересадки</p>
              <p className={style.location}>HKG, JNB</p>
            </div>
          </div>
        </li>
        <li className={style.flightsItem}>
          <div className={style.flightsTitle}>
            <h2 className={style.price}>13 400 P</h2>
            <img src="#" alt="Logo" className="flight__logo" />
          </div>
          <div className={style.flightsInfo}>
            <div className={style.flightsInfoRoute}>
              <p className={style.cities}>MOW – HKT</p>
              <p className={style.time}>10:45 – 08:00</p>
            </div>
            <div className={style.flightsInfoDuration}>
              <p className={style['on-route']}>В пути</p>
              <p className="time">21ч 15м</p>
            </div>
            <div className={style.flightsInfoLayovers}>
              <p className={style.layover}>2 пересадки</p>
              <p className={style.location}>HKG, JNB</p>
            </div>
          </div>
          <div className={style.flightsInfo}>
            <div className={style.flightsInfoRoute}>
              <p className={style.cities}>MOW – HKT</p>
              <p className={style.time}>10:45 – 08:00</p>
            </div>
            <div className={style.flightsInfoDuration}>
              <p className={style['on-route']}>В пути</p>
              <p className="time">21ч 15м</p>
            </div>
            <div className={style.flightsInfoLayovers}>
              <p className={style.layover}>2 пересадки</p>
              <p className={style.location}>HKG, JNB</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
