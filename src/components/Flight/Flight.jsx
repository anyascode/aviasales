import style from '../FlightsList/FlightsList.module.scss';

function Flight({ price, carrier, segments }) {
  const oneWay = segments[0];
  const wayBack = segments[1];

  function formatTime(mins) {
    const hrs = Math.floor(mins / 60);
    const mns = mins % 60;
    return `${hrs}ч ${mns}м`;
  }

  function getDepartureTime(date) {
    return new Date(date).toLocaleTimeString().split(':').slice(0, 2).join(':');
  }

  function getArrivalTime(departure, duration) {
    let [hours, minutes] = getDepartureTime(departure).split(':');
    let totalMinutes = Math.abs(duration - (hours * 60 + Number(minutes)));
    const hrs = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
    const mns = String(Math.floor(totalMinutes % 60)).padStart(2, '0');
    return `${hrs}:${mns}`;
  }

  console.log(wayBack);
  return (
    <>
      <div className={style.flightsTitle}>
        <h2 className={style.price}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Р</h2>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} className="flight__logo" />
      </div>
      <div className={style.flightsInfo}>
        <div className={style.flightsInfoRoute}>
          <p className={style.cities}>
            {oneWay.origin} – {oneWay.destination}
          </p>
          <p className={style.time}>
            {getDepartureTime(oneWay.date)} – {getArrivalTime(oneWay.date, oneWay.duration)}
          </p>
        </div>
        <div className={style.flightsInfoDuration}>
          <p className={style['on-route']}>В пути</p>
          <p className="time">{formatTime(oneWay.duration)}</p>
        </div>
        <div className={style.flightsInfoLayovers}>
          <p className={style.layover}>
            {oneWay.stops.length >= 2
              ? `${oneWay.stops.length} пересадки`
              : oneWay.stops.length === 1
                ? `1 пересадка`
                : `Без пересадок`}
          </p>
          <p className={style.location}>
            {oneWay.stops.length > 1 ? oneWay.stops.join(', ') : oneWay.stops.length === 1 ? oneWay.stops : `—`}
          </p>
        </div>
      </div>
      <div className={style.flightsInfo}>
        <div className={style.flightsInfoRoute}>
          <p className={style.cities}>
            {wayBack.origin} – {wayBack.destination}
          </p>
          <p className={style.time}>
            {' '}
            {getDepartureTime(wayBack.date)} – {getArrivalTime(wayBack.date, wayBack.duration)}
          </p>
        </div>
        <div className={style.flightsInfoDuration}>
          <p className={style['on-route']}>В пути</p>
          <p className="time">{formatTime(wayBack.duration)}</p>
        </div>
        <div className={style.flightsInfoLayovers}>
          <p className={style.layover}>
            {wayBack.stops.length >= 2
              ? `${wayBack.stops.length} пересадки`
              : wayBack.stops.length === 1
                ? `1 пересадка`
                : `Без пересадок`}
          </p>
          <p className={style.location}>
            {wayBack.stops.length > 1 ? wayBack.stops.join(', ') : wayBack.stops.length === 1 ? wayBack.stops : `—`}
          </p>
        </div>
      </div>
    </>
  );
}

export default Flight;
