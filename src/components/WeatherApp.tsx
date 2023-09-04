import { useEffect, useState } from "react";

const api = {
  key: "",
  base: "",
};

function WeatherApp() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState([]);

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
          setData(result);
        })
        .catch((err) => console.log(err.message));
    };
    fetchData();
  }, [lat, long]);

  return <></>;
}

export default WeatherApp;
