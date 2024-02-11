import {
  OpenWeatherApiResponse,
  ExtractedWeatherInfo,
} from "../types/weatherTypes";
import { calculateTimeOfDay } from "./timeUtils";

export function extractWeatherInfo(apiResponse: OpenWeatherApiResponse) {
  if (!apiResponse || apiResponse.cod !== 200) {
    throw new Error("Invalid API Response");
  }

  const {
    main: { temp, humidity },
    wind: { speed },
    weather,
    rain,
  } = apiResponse;

  const mainWeather = weather && weather.length > 0 ? weather[0] : null;
  const weatherDescription = mainWeather ? mainWeather.description : null;
  const precipitation = rain ? rain["1h"] : null;
  const icon = getWeatherIcons(weatherDescription!);

  const extractedInfo: ExtractedWeatherInfo = {
    temperature: Math.round(temp),
    humidity,
    windSpeed: Math.round(speed),
    precipitation,
    weatherDescription,
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
