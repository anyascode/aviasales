import style from './Checkbox.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, toggleFilter } from '../../app/features/tickets/ticketSlice';

function Checkbox() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.tickets.filters);
  const allFilters = [0, 1, 2, 3];
  const allSelected = allFilters.every((f) => filters.includes(f));
  return (
    <div className={style.checkbox}>
      <h2 className={style.checkboxTitle}>Количество пересадок</h2>

      <label className={style.checkboxItem}>
        <span className={style.checkboxLabel}>Все</span>
        <input
          type="checkbox"
          checked={allSelected}
          onChange={() => {
            if (allSelected) {
              dispatch(setFilters([]));
            } else {
              dispatch(setFilters(allFilters));
            }
          }}
        />
        <span className={style.checkmark}></span>
      </label>

      <label className={style.checkboxItem}>
        <span className={style.checkboxLabel}>Без пересадок</span>
        <input type="checkbox" checked={filters.includes(0)} onChange={() => dispatch(toggleFilter(0))} />
        <span className={style.checkmark}></span>
      </label>

      <label className={style.checkboxItem}>
        <span className={style.checkboxLabel}>1 пересадка</span>
        <input type="checkbox" checked={filters.includes(1)} onChange={() => dispatch(toggleFilter(1))} />
        <span className={style.checkmark}></span>
      </label>

      <label className={style.checkboxItem}>
        <span className={style.checkboxLabel}>2 пересадки</span>
        <input type="checkbox" checked={filters.includes(2)} onChange={() => dispatch(toggleFilter(2))} />
        <span className={style.checkmark}></span>
      </label>

      <label className={style.checkboxItem}>
        <span className={style.checkboxLabel}>3 пересадки</span>
        <input type="checkbox" checked={filters.includes(3)} onChange={() => dispatch(toggleFilter(3))} />
        <span className={style.checkmark}></span>
      </label>
    </div>
  );
}

export default Checkbox;
