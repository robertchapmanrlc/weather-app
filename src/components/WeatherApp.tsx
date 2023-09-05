import { useEffect, useState } from "react";
import Weather from "./Weather";
import { Button, Stack } from "@mui/material";
import { HourglassBottom } from "@mui/icons-material";

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

  const refresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(latitude, longitude);

        try {
          const response = await fetch(
            `${api.base}/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${api.key}`
          );
          if (!response.ok) throw new Error("fetch response not ok");
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.log(error);
        }
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <Stack spacing={2}>
        <Button variant="contained" onClick={refresh}>
          Refresh
        </Button>
        {data.name != "Globe" && data.name != weatherDataObj.name ? (
          <>
            <Weather weatherData={data} />
          </>
        ) : (
          <>
            <HourglassBottom></HourglassBottom>
          </>
        )}
      </Stack>
    </>
  );
}

export default WeatherApp;
