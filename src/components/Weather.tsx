import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import moment from "moment";
import MainWeather from "./MainWeather";
import Humidity from "./Humidity";
import WindSpeed from "./WindSpeed";

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
      <MainWeather
        date={moment().format("dddd") + " " + moment().format("LL")}
        location={weatherData.name}
        temp={Math.round(weatherData.main.temp)}
        max_temp={Math.round(weatherData.main.temp_max)}
        min_temp={Math.round(weatherData.main.temp_min)}
        description={weatherData.weather[0].description}
      />
      <Humidity humidity={weatherData.main.humidity} />
      <WindSpeed wind_speed={Math.round(weatherData.wind.speed)} />
      <Typography variant="h4" sx={{ color: "white" }}>
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </Typography>
      <Typography variant="h4" sx={{ color: "white" }}>
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </Typography>
      {/* <Card sx={{minWidth: 500, minHeight: 500}}>
        <CardContent>
          <CardHeader
            className="header"
            title={weatherData.name}
          />
          <Typography variant="body1">
            Temperature: {weatherData.main.temp} &deg;F
          </Typography>
          <Typography variant="body1" >
            Max Temp: {weatherData.main.temp_max} &deg;F
          </Typography>
          <Typography variant="body1" >
            Min Temp: {weatherData.main.temp_min} &deg;F
          </Typography>
          <Typography variant="body1" >
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </Typography>
          <Typography variant="body1" >
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </Typography>
          <Typography variant="body1" >
            Description: {weatherData.weather[0].description}
          </Typography>
          <Typography variant="body1" >
            Humidity: {weatherData.main.humidity}%
          </Typography>
          <Typography variant="body1" >
            Wind: {weatherData.wind.speed}
          </Typography>
          {weatherData.rain && (
            <Typography variant="body1" >
              Precipitation: {weatherData.rain["h1"]}
            </Typography>
          )}
          {weatherData.snow && (
            <Typography variant="body1" >
              Snow: {weatherData.snow["h1"]}
            </Typography>
          )}
          <Typography variant="body1" >
            Day: {moment().format("dddd")}
          </Typography>
          <Typography variant="body1" >
            Date: {moment().format("LL")}
          </Typography>
        </CardContent>
      </Card> */}
    </>
  );
}

export default Weather;
