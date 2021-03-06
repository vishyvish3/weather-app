
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
    // alert("Refreshed !!");
  }

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [placeName, setPlaceName] = useState(null)


  

  const getGeo = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        }
      );
      
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getGeo();
  }, []);

  useEffect(()=>{
    async function fetchData(){
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=64e805b88a42b518017315d84d17d855`
      );
      setData(res.data);
      console.log(res.data);
      const res1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=64e805b88a42b518017315d84d17d855`
      );
      
      console.log(res1.data.name);
      setPlaceName(res1.data.name);
    }
    fetchData();
  }, [longitude, refresh]);

  return (
    <>
      {(data && placeName) && (<div className="App container">
        <Title onRefresh={onRefresh} placeName={placeName} />
        <MainInfo currentInfo={data.current} />
        <DailyForecast dailyInfo={data.daily} />
      </div>)
      }
    </>
  )
}

export default App;
