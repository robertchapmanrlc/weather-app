import { useEffect, useState } from "react";
import Weather from "./Weather";
import { Stack } from "@mui/material";
import { HourglassBottom } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import axios from "axios";

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
  weather: [{ description: "", main: "" }],
  wind: {
    speed: 0,
  },
  rain: {},
  snow: {},
};

function WeatherApp() {
  const [data, setData] = useState(weatherDataObj);
  const getLocationWeather = async (location: string) => {
    axios
      .get(`http://localhost:8000/weather/location?city=${location}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        axios
          .get(
            `http://localhost:8000/weather?latitude=${latitude}&longitude=${longitude}`
          )
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
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
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SearchBar getWeatherData={getLocationWeather} />
      <Stack spacing={2} alignItems="center" mt={5}>
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
