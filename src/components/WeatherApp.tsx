import { useEffect, useState } from "react";
import Weather from "./Weather";
import { Button, Stack, TextField} from "@mui/material";
import { HourglassBottom } from "@mui/icons-material";

const api = {
  key: "",
  base: "",
};

const backgrounds = {
  sunrise:
    "background-image: linear-gradient(145deg, rgb(84, 90, 158), #FF5800); height: 100vh; width: 100vw;",
  morning:
    "background-image: linear-gradient(145deg, #FF5800, #ffae42, rgb(240, 240, 0)); height: 100vh; width: 100vw;",
  daytime:
    "background-image: linear-gradient(145deg, rgb(238, 238, 0), skyblue); height: 100vh; width: 100vw;",
  sunset:
    "background-image: linear-gradient(145deg, skyblue, #FF5800); height: 100vh; width: 100vw;",
  evening:
    "background-image: linear-gradient(145deg, #FF5800, #A020F0); height: 100vh; width: 100vw;",
  night:
    "background-image: linear-gradient(145deg, #A020F0, blue, #1520A6); height: 100vh; width: 100vw;",
};

const weatherDataObj = {
  name: "",
  sys: { sunrise: 0, sunset: 0 },
  main: { temp: 0, humidity: 0, temp_max: 0, temp_min: 0 },
  weather: [{ description: "" }],
  wind: {
    speed: 0,
  },
  rain: {},
  snow: {},
};

function WeatherApp() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState(weatherDataObj);

  const refresh = () => {
    window.location.reload();
  };

  const getLocationWeather = async () => {
    try {
      const response = await fetch(
        `${api.base}/weather?q=${location}&units=imperial&APPID=${api.key}`
      );
      if (!response.ok) throw new Error("fetch response not ok");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      let time = new Date().getHours();
      let background = "";

      if ((time >= 0 && time <= 6) || time > 22) {
        background = backgrounds.night;
      } else if (time > 6 && time <= 9) {
        background = backgrounds.sunrise;
      } else if (time > 9 && time <= 11) {
        background = backgrounds.morning;
      } else if (time > 11 && time <= 17) {
        background = backgrounds.daytime;
      } else if (time > 17 && time <= 19) {
        background = backgrounds.sunset;
      } else if (time > 19 && time <= 22) {
        background = backgrounds.evening;
      }

      document.body.setAttribute("style", background);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: Event) => {
    e.preventDefault();


  }

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
