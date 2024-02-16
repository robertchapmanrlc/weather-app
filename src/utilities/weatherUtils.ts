import { ExtractedWeatherInfo, WeatherAPIResponse } from "../types/weatherTypes";
import { calculateTimeOfDay } from "./timeUtils";

export function extractWeatherInfo(apiResponse: WeatherAPIResponse, time: number) {
  const { current, forecast } = apiResponse;

  const precipitation =
    (forecast.forecastday[0].hour[time].will_it_rain &&
      forecast.forecastday[0].hour[time].chance_of_rain) ||
    (forecast.forecastday[0].hour[time].will_it_snow &&
      forecast.forecastday[0].hour[time].chance_of_snow);

  const icon = getWeatherIcons(current.condition.text);

  const extractedInfo: ExtractedWeatherInfo = {
    temperatureF: Math.round(current.temp_f),
    temperatureC: Math.round(current.temp_c),
    weatherDescription: current.condition.text,
    humidity: current.humidity,
    windSpeedMph: current.wind_mph,
    windSpeedKmh: current.wind_kph,
    precipitation: precipitation,
    icon: icon,
  };

  return extractedInfo;
}

function getWeatherIcons(description: string): string {
  const period = calculateTimeOfDay();
  if (description.includes("thunderstorm")) {
    return "Thunderstorm";
  }

  if (description.includes("rain")) {
    return "Rain";
  }

  if (description == "clear sky") {
    if (period == "night" || period == "evening") {
      return "Moon";
    } else {
      return "Sun";
    }
  }

  if (description.includes("clouds")) {
    if (period == "night" || period == "evening") {
      return "Cloudy Night";
    } else {
      return "Cloudy Day";
    }
  }

  if (description.includes("snow") || description.includes("sleet")) {
    if (period == "night" || period == "evening") {
      return "Snow Night";
    } else {
      return "Snow Day";
    }
  }

  return "Mist";
}
