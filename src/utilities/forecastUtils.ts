import {
  ExtractedDailyForecastInfo,
  ExtractedHourlyForecastInfo,
  Forecast,
} from "../types/weatherTypes";
import { convertToAmPm, determineTimeOfDay } from "./timeUtils";

export function extractHourlyForecastInfo(forecast: Forecast, hour: number) {
  const data: ExtractedHourlyForecastInfo[] = [];

  if (hour < 15) {
    for (let index = 0; index < 5; index++) {
      data.push({
        temp: Math.round(forecast.forecastday[0].hour[hour + index * 2].temp_f),
        time: convertToAmPm(
          forecast.forecastday[0].hour[hour + index * 2].time
        ),
        icon: getHourlyForecastIcons(
          forecast.forecastday[0].hour[hour + index * 2].condition.text,
          hour + index * 2
        ),
      });
    }
  } else {
    for (let index = 0; index < 5; index++) {
      if (hour + index * 2 < 23) {
        data.push({
          temp: Math.round(
            forecast.forecastday[0].hour[hour + index * 2].temp_f
          ),
          time: convertToAmPm(
            forecast.forecastday[0].hour[hour + index * 2].time
          ),
          icon: getHourlyForecastIcons(
            forecast.forecastday[0].hour[hour + index * 2].condition.text,
            hour + index * 2
          ),
        });
      } else {
        data.push({
          temp: Math.round(
            forecast.forecastday[1].hour[hour + index * 2].temp_f
          ),
          time: convertToAmPm(
            forecast.forecastday[1].hour[hour + index * 2].time
          ),
          icon: getHourlyForecastIcons(
            forecast.forecastday[1].hour[hour + index * 2].condition.text,
            hour + index * 2
          ),
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
      date: new Date(
        forecast.forecastday[index].date.toString() + "T00:00:00"
      ).toLocaleDateString(undefined, { weekday: "long" }),
      max_temp: Math.round(forecast.forecastday[index].day.maxtemp_f),
      min_temp: Math.round(forecast.forecastday[index].day.mintemp_f),
      icon: getDailyForecastIcons(forecast.forecastday[index].day.condition.text),
    });
  }

  return info;
}

function getHourlyForecastIcons(condition: string, hour: number): string {
  const period = determineTimeOfDay(hour);

  if (condition.trim().toLowerCase() == "sunny") {
    return "Sun";
  }

  if (condition.trim().toLowerCase() == "clear") {
    if (period == "night" || period == "evening") {
      return "Moon";
    } else {
      return "Sun";
    }
  }

  if (condition.trim().toLowerCase() == "partly cloudy") {
    if (period == "night" || period == "evening") {
      return "Cloudy Night";
    } else {
      return "Cloudy Day";
    }
  }

  if (
    condition.trim().toLowerCase() == "overcast" ||
    condition.trim().toLowerCase() == "cloudy"
  ) {
    return "Cloudy";
  }

  if (
    condition.includes("snow") ||
    condition.includes("sleet") ||
    condition.toLowerCase().includes("ice") ||
    condition.trim().toLowerCase() == "blizzard"
  ) {
    if (period == "night" || period == "evening") {
      return "Snow Night";
    } else {
      return "Snow Day";
    }
  }

  if (condition.toLowerCase().includes("thunder")) {
    return "Thunderstorm";
  }

  if (condition.includes("rain") || condition.includes("drizzle")) {
    return "Rain";
  }

  return "Mist";
}

function getDailyForecastIcons(condition: string): string {
  console.log(condition);

  if (
    condition.trim().toLowerCase() == "sunny" ||
    condition.trim().toLowerCase() == "clear"
  ) {
    return "Sun";
  }

  if (condition.trim().toLowerCase() == "partly cloudy") {
    return "Cloudy Day";
  }

  if (
    condition.trim().toLowerCase() == "overcast" ||
    condition.trim().toLowerCase() == "cloudy"
  ) {
    return "Cloudy";
  }

  if (
    condition.includes("snow") ||
    condition.includes("sleet") ||
    condition.toLowerCase().includes("ice") ||
    condition.trim().toLowerCase() == "blizzard"
  ) {
    return "Snow Day";
  }

  if (condition.toLowerCase().includes("thunder")) {
    return "Thunderstorm";
  }

  if (condition.includes("rain") || condition.includes("drizzle")) {
    return "Rain";
  }

  return "Mist";
}
