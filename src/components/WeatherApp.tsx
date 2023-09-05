import { useEffect, useState } from "react";
import Weather from "./Weather";

const api = {
  key: "",
  base: "",
};

const weatherDataObj = {
  name: "",
  sys: { sunrise: 0, sunset: 0 },
  main: { temp: 0, humidity: 0 },
  weather: [{ description: "" }],
};

function WeatherApp() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState(weatherDataObj);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      console.log(lat, long);

      await fetch(
        `${api.base}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          console.log(typeof result.sys);
          setData(result);
        })
        .catch((err) => console.log(err.message));
    };
    fetchData();
  }, [lat, long]);

  return (
    <>{typeof data != "undefined" ? <Weather weatherData={data} /> : <></>}</>
  );
}

export default WeatherApp;
