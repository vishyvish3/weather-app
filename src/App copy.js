
import './App.css';
import MainInfo from './components/main-info/main-info.component';
import Title from './components/title/title.component';
import DailyForecast from './components/daily-forecast/daily-forecast.component'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const onRefresh = () => {
    setRefresh(!refresh);
    alert("Refreshed !!");
  }

  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=13.0827&lon=80.2707&units=metric&appid=64e805b88a42b518017315d84d17d855")
      .then(res => {
        console.log(res.data)
        setData(res.data);
      });
  }, [refresh]);

  return (
    <>
      {data && (<div className="App container">
       <Title onRefresh={onRefresh} timezone={data.timezone} />
        <MainInfo currentInfo={data.current} />
        <DailyForecast dailyInfo={data.daily} />
      </div>)
      }
    </>
  )
}

export default App;
