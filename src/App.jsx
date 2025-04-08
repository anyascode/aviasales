import './App.scss';
import Checkbox from './components/Checkbox/Checkbox';
import FlightsList from './components/FlightsList/FlightsList';
import Tabs from './components/Tabs/Tabs';

function App() {
  return (
    <>
      <div className="image-wrapper">
        <img src="images/Logo.svg" alt="" className="logo" />
      </div>
      <div className="main">
        <Checkbox />
        <div className="main__list">
          <Tabs />
          <FlightsList />
        </div>
      </div>
    </>
  );
}

export default App;
