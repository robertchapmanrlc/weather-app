import { useEffect, useState } from "react";
import Weather from "./Weather";
import { Button, Stack, TextField } from "@mui/material";
import { HourglassBottom } from "@mui/icons-material";

const api = {
  key: "",
  base: "",
};

const weatherDataObj = {
  name: "",
  sys: { sunrise: 0, sunset: 0 },
  main: { temp: 0, humidity: 0, temp_max: 0, temp_min: 0 },
  weather: [{ description: "" }],
  wind: {
    speed: 0
  },
  rain: {},
  snow: {}
};

function WeatherApp() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState(weatherDataObj);

  const refresh = () => {
    window.location.reload();
  };

  const getLocationWeather = async () => {
    try {
      const response = await fetch(`${api.base}/weather?q=${location}&units=imperial&APPID=${api.key}`);
      if (!response.ok) throw new Error('fetch response not ok');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const response = await fetch(
            `${api.base}/weather?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${api.key}`
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
        <TextField
          label="Enter City"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              getLocationWeather();
            }
          }}
        />
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
