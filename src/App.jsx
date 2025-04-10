import Checkbox from './components/Checkbox/Checkbox';
import FlightsList from './components/FlightsList/FlightsList';
import Tabs from './components/Tabs/Tabs';
import style from './App.module.scss';

function App() {
  return (
    <>
      <div className={style['image-wrapper']}>
        <img src="images/Logo.svg" alt="" className={style.logo} />
      </div>
      <div className={style.main}>
        <Checkbox />
        <div className={style.mainList}>
          <Tabs />
          <FlightsList />
        </div>
      </div>
    </>
  );
}

export default App;
