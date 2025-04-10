import style from './Checkbox.module.scss';

function Checkbox() {
  return (
    <div className={style.checkbox}>
      <h2 className={style.checkboxTitle}>Количество пересадок</h2>

      <label className={style.checkboxItem}>
        <span className={style.checkboxLabel}>Все</span>
        <input type="checkbox" />
        <span className={style.checkmark}></span>
      </label>

      <label className={style.checkboxItem}>
        <span className={style.checkboxLabel}>Без пересадок</span>
        <input type="checkbox" />
        <span className={style.checkmark}></span>
      </label>

      <label className={style.checkboxItem}>
        <span className={style.checkboxLabel}>1 пересадка</span>
        <input type="checkbox" />
        <span className={style.checkmark}></span>
      </label>

      <label className={style.checkboxItem}>
        <span className={style.checkboxLabel}>2 пересадки</span>
        <input type="checkbox" />
        <span className={style.checkmark}></span>
      </label>

      <label className={style.checkboxItem}>
        <span className={style.checkboxLabel}>3 пересадки</span>
        <input type="checkbox" />
        <span className={style.checkmark}></span>
      </label>
    </div>
  );
}

export default Checkbox;
