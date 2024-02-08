import { ExtractedDailyForecastInfo, ExtractedHourlyForecastInfo, Forecast } from "../types/weatherTypes";
import { convertToAmPm } from "./timeUtils";

export function extractHourlyForecastInfo(forecast: Forecast, hour: number) {
  const data: ExtractedHourlyForecastInfo[] = [];

  if (hour < 15) {
    for (let index = 0; index < 5; index++) {
      data.push({
        temp: Math.round(forecast.forecastday[0].hour[hour + index * 2].temp_f),
        time: convertToAmPm(forecast.forecastday[0].hour[hour + index * 2].time),
      });
    }
  } else {
    for (let index = 0; index < 5; index++) {
      if (hour + index * 2 < 23) {
        data.push({
          temp: Math.round(forecast.forecastday[0].hour[hour + index * 2].temp_f),
          time: convertToAmPm(forecast.forecastday[0].hour[hour + index * 2].time),
        });
      } else {
        data.push({
          temp: Math.round(forecast.forecastday[1].hour[hour + index * 2].temp_f),
          time: convertToAmPm(forecast.forecastday[1].hour[hour + index * 2].time),
        });
      }
    }
  }

  return data;
}

export function extractDailyForecastInfo(forecast: Forecast) {
  const info: ExtractedDailyForecastInfo[] = [];

  for (let index = 0; index < 5; index++) {
    info.push({
      date: new Date(forecast.forecastday[index].date.toString()).toLocaleDateString(undefined, {weekday: 'long'}),
      max_temp: Math.round(forecast.forecastday[index].day.maxtemp_f),
      min_temp: Math.round(forecast.forecastday[index].day.mintemp_f),
    });
  }

  return info;
}