import Flight from '../Flight/Flight';
import style from './FlightsList.module.scss';
import useFlights from '../../hooks/useFlights';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function FlightsList() {
  const [visible, setVisible] = useState(5);
  useFlights();

  const tickets = useSelector((state) => state.tickets.tickets);
  const loading = useSelector((state) => state.tickets.loading);
  const error = useSelector((state) => state.tickets.error);

  console.log(tickets.filter((ticket) => ticket.segments.some((t) => t.stops.length === 0)));

  if (loading) return <p>Поиск билетов...</p>;
  if (error) return <p>Ошибка</p>;

  return (
    <div className={style.flights}>
      <ul className={style.flightsList}>
        {tickets.slice(0, visible).map((ticket, index) => (
          <li className={style.flightsItem} key={index}>
            <Flight
              price={ticket.price}
              carrier={ticket.carrier}
              segments={ticket.segments}
              stops={ticket.segments.stops}
            />
          </li>
        ))}
        <button className={style['expand-button']} onClick={() => setVisible((prev) => prev + 5)}>
          Показать ещё 5 билетов!
        </button>
      </ul>
    </div>
  );
}
