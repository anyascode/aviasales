import './Checkbox.scss';

function Checkbox() {
  return (
    <div className="checkbox">
      <h2 className="checkbox__title">Количество пересадок</h2>

      <label className="checkbox__item">
        <span className="checkbox__label">Все</span>
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>

      <label className="checkbox__item">
        <span className="checkbox__label">Без пересадок</span>
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>

      <label className="checkbox__item">
        <span className="checkbox__label">1 пересадка</span>
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>

      <label className="checkbox__item">
        <span className="checkbox__label"> 2 пересадки</span>
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>

      <label className="checkbox__item">
        <span className="checkbox__label">3 пересадки</span>
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default Checkbox;
