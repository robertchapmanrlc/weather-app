import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import moment from "moment";

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
      <Card>
        <CardContent>
          <CardHeader className="header" title={weatherData.name} />
          <Typography variant="body1">
            Temperature: {weatherData.main.temp} &deg;F
          </Typography>
          <Typography variant="body1">
            Max Temp: {weatherData.main.temp_max} &deg;F
          </Typography>
          <Typography variant="body1">
            Min Temp: {weatherData.main.temp_min} &deg;F
          </Typography>
          <Typography variant="body1">
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </Typography>
          <Typography variant="body1">
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </Typography>
          <Typography variant="body1">
            Description: {weatherData.weather[0].description}
          </Typography>
          <Typography variant="body1">
            Humidity: {weatherData.main.humidity}%
          </Typography>
          <Typography variant="body1">
            Wind: {weatherData.wind.speed}
          </Typography>
          {weatherData.rain && (
            <Typography variant="body1">
              Precipitation: {weatherData.rain["h1"]}
            </Typography>
          )}
          {weatherData.snow && (
            <Typography variant="body1">
              Snow: {weatherData.snow["h1"]}
            </Typography>
          )}
          <Typography variant="body1">
            Day: {moment().format("dddd")}
          </Typography>
          <Typography variant="body1">Date: {moment().format("LL")}</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Weather;
