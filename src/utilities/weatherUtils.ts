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
  switch (description) {
    case "clear sky":
      if (
        calculateTimeOfDay() == "night" ||
        calculateTimeOfDay() == "evening"
      ) {
        return "Moon";
      }
      return "Sun";
    case "few clouds":
      if (
        calculateTimeOfDay() == "night" ||
        calculateTimeOfDay() == "evening"
      ) {
        return "Cloudy Night";
      }
      return "Cloudy Day";
    case "snow":
      if (
        calculateTimeOfDay() == "night" ||
        calculateTimeOfDay() == "evening"
      ) {
        return "Snow Night";
      }
      return "Snow Day";
    case "scattered clouds":
      return "Cloudy";
    case "broken clouds":
      return "Cloudy";
    case "shower rain":
      return "Rain";
    case "rain":
      return "Rain";
    case "thunderstorm":
      return "Thunderstorm";
    case "overcast clouds":
      return "Cloudy";
    default:
      return "Mist";
  }
}
