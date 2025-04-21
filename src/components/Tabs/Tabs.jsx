import style from './Tabs.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSorting } from '../../app/features/tickets/ticketSlice';

function Tabs() {
  const dispatch = useDispatch();
  const sorting = useSelector((state) => state.tickets.sorting);
  return (
    <div className={style.tabs}>
      <ul className={style.tabsList}>
        <li className={style.tabsItem}>
          <button
            className={`${style.button} ${sorting === 'cheapest' ? style.buttonActive : ''}`}
            onClick={() => dispatch(setSorting('cheapest'))}
          >
            Самый дешевый
          </button>
        </li>
        <li className={style.tabsItem}>
          <button
            className={`${style.button} ${sorting === 'fastest' ? style.buttonActive : ''}`}
            onClick={() => dispatch(setSorting('fastest'))}
          >
            Самый быстрый
          </button>
        </li>
        <li className={style.tabsItem}>
          <button
            className={`${style.button} ${sorting === 'optimal' ? style.buttonActive : ''}`}
            onClick={() => dispatch(setSorting('optimal'))}
          >
            Оптимальный
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
