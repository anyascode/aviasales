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
  const filter = useSelector((state) => state.tickets.filters);

  const filteredTickets = tickets.filter((ticket) => ticket.segments.some((t) => filter.includes(t.stops.length)));

  if (loading) return <p>Поиск билетов...</p>;
  if (error) return <p>Ошибка</p>;

  return (
    <div className={style.flights}>
      {filteredTickets.length === 0 ? (
        <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
      ) : (
        <ul className={style.flightsList}>
          {filteredTickets.slice(0, visible).map((ticket, index) => (
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
      )}
    </div>
  );
}
