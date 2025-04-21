import useFlights from '../../hooks/useFlights';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Flight from '../Flight/Flight';
import { Spin } from 'antd';
import style from './FlightsList.module.scss';

export default function FlightsList() {
  const [visible, setVisible] = useState(5);
  useFlights();

  const tickets = useSelector((state) => state.tickets.tickets);
  const loading = useSelector((state) => state.tickets.loading);
  const error = useSelector((state) => state.tickets.error);
  const filter = useSelector((state) => state.tickets.filters);
  const sorting = useSelector((state) => state.tickets.sorting);

  const filteredTickets = tickets
    .filter((ticket) => ticket.segments.some((t) => filter.includes(t.stops.length)))
    .sort((a, b) => {
      if (sorting === 'cheapest') {
        return a.price - b.price;
      } else if (sorting === 'fastest') {
        const getDuration = (ticket) => ticket.segments.reduce((acc, seg) => acc + seg.duration, 0);
        return getDuration(a) - getDuration(b);
      } else if (sorting === 'optimal') {
        const getDuration = (ticket) => ticket.segments.reduce((acc, seg) => acc + seg.duration, 0);
        const priceScore = 0.5;
        const durationScore = 0.5;
        const aRatio = a.price * priceScore + getDuration(a) * durationScore;
        const bRatio = b.price * priceScore + getDuration(b) * durationScore;
        return aRatio - bRatio;
      }
    });

  if (error) return <p>Ошибка</p>;

  return (
    <div className={style.flights}>
      {filteredTickets.length === 0 && !loading ? (
        <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
      ) : (
        <ul className={style.flightsList}>
          {loading && (
            <>
              <Spin>Билеты загружаются...</Spin>
            </>
          )}
          {filteredTickets.slice(0, visible).map((ticket) => (
            <li className={style.flightsItem} key={ticket.id}>
              <Flight price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />
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
