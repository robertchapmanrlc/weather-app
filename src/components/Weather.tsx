import { Stack } from "@mui/material";
import moment from "moment";
import MainWeather from "./MainWeather";
import Humidity from "./Humidity";
import WindSpeed from "./WindSpeed";
import SunRiseSunSet from "./SunRiseSunSet";

interface Props {
  weatherData: {
    name: string;
    sys: {
      sunrise: number;
      sunset: number;
    };
    main: {
      temp: number;
      humidity: number;
      temp_max: number;
      temp_min: number;
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number;
    };
    rain: { [key: string]: number };
    snow: { [key: string]: number };
  };
}

function Weather({ weatherData }: Props) {
  return (
    <>
      <Stack direction="column" display='flex' justifyContent='center' alignItems='center' spacing={4}>
        <MainWeather
          date={moment().format("dddd") + " " + moment().format("LL")}
          location={weatherData.name}
          temp={Math.round(weatherData.main.temp)}
          max_temp={Math.round(weatherData.main.temp_max)}
          min_temp={Math.round(weatherData.main.temp_min)}
          description={weatherData.weather[0].description}
        />
        <Stack direction="row" spacing={5} sx={{ display: 'flex', alignItems: 'center'}}>
          <Humidity humidity={weatherData.main.humidity} />
          <WindSpeed wind_speed={Math.round(weatherData.wind.speed)} />
          <SunRiseSunSet
            sunrise={new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-US",
              {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }
            )}
            sunset={new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-US",
              {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }
            )}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default Weather;
