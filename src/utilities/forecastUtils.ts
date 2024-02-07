import { ExtractedHourlyForecastInfo, Forecast } from "../types/weatherTypes";

export function extractHourlyForecastInfo(forecast: Forecast, hour: number) {
  const data: ExtractedHourlyForecastInfo[] = [];

  if (hour < 15) {
    for (let index = 0; index < 5; index++) {
      data.push({
        temp: forecast.forecastday[0].hour[hour + index * 2].temp_f,
        time: forecast.forecastday[0].hour[hour + index * 2].time,
      });
    }
  } else {
    for (let index = 0; index < 5; index++) {
      if (hour + index * 2 < 23) {
        data.push({
          temp: forecast.forecastday[0].hour[(hour + index * 2) % 23].temp_f,
          time: forecast.forecastday[0].hour[(hour + index * 2) % 23].time,
        });
      } else {
        data.push({
          temp: forecast.forecastday[1].hour[(hour + index * 2) % 23].temp_f,
          time: forecast.forecastday[1].hour[(hour + index * 2) % 23].time,
        });
      }
    }
  }

  return data;
}
