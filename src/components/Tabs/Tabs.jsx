import style from './Tabs.module.scss';

function Tabs() {
  return (
    <div className={style.tabs}>
      <ul className={style.tabsList}>
        <li className={style.tabsItem}>Самый дешевый</li>
        <li className={style.tabsItem}>Самый быстрый</li>
        <li className={style.tabsItem}>Оптимальный</li>
      </ul>
    </div>
  );
}

export default Tabs;
