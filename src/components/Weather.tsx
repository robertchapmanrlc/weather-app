import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import moment from "moment";

interface Props {
  weatherData: {
    name: string,
    sys: {
      sunrise: number,
      sunset: number
    },
    main: {
      temp: number,
      humidity: number
    },
    weather: {
      description: string
    }[],
  };
}

function Weather({ weatherData }: Props) {
  return (
    <>
      <Card>
        <CardContent>
          <CardHeader className="header" title={weatherData.name} />
          <Typography variant="body1">
            Temperature: {weatherData.main.temp} &deg;C
          </Typography>
          <Typography variant="body1">
            Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </Typography>
          <Typography variant="body1">
            Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
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
            Day: {moment().format("dddd")}
          </Typography>
          <Typography variant="body1">
            Date: {moment().format("LL")}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Weather;
