import Flight from '../Flight/Flight';
import style from './FlightsList.module.scss';
import useFlights from '../../hooks/useFlights';

export default function FlightsList() {
  const { tickets, loading, error } = useFlights();

  if (loading) return <p>Поиск билетов...</p>;
  if (error) return <p>Ошибка</p>;

  return (
    <div className={style.flights}>
      <ul className={style.flightsList}>
        {tickets.slice(0, 5).map((ticket, index) => (
          <li className={style.flightsItem} key={index}>
            <Flight
              price={ticket.price}
              carrier={ticket.carrier}
              segments={ticket.segments}
              stops={ticket.segments.stops}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
