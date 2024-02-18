import { ExtractedDailyForecastInfo, ExtractedHourlyForecastInfo, ExtractedWeatherInfo, WeatherAPIResponse } from "../types/weatherTypes";
import { extractDailyForecastInfo, extractHourlyForecastInfo } from "./forecastUtils";

export function extractWeatherInfo(apiResponse: WeatherAPIResponse, time: number) {
  const { location, current, forecast } = apiResponse;

  const precipitation =
    (forecast.forecastday[0].hour[time].will_it_rain &&
      forecast.forecastday[0].hour[time].chance_of_rain) ||
    (forecast.forecastday[0].hour[time].will_it_snow &&
      forecast.forecastday[0].hour[time].chance_of_snow);

  const icon = getWeatherIcons(current.condition.text, current.is_day);

  const hourlyForecasts: ExtractedHourlyForecastInfo[] = extractHourlyForecastInfo(apiResponse.forecast, time);

  const dailyForecasts: ExtractedDailyForecastInfo[] = extractDailyForecastInfo(apiResponse.forecast);

  const extractedInfo: ExtractedWeatherInfo = {
    name: location.name,
    temperatureF: Math.round(current.temp_f),
    temperatureC: Math.round(current.temp_c),
    weatherDescription: current.condition.text,
    humidity: current.humidity,
    windSpeedMph: current.wind_mph,
    windSpeedKmh: current.wind_kph,
    precipitation: precipitation,
    icon: icon,
    hourlyForecast: hourlyForecasts,
    dailyForecast: dailyForecasts
  };

  return extractedInfo;
}

function getWeatherIcons(condition: string, isDay: number): string {
  if (condition.trim().toLowerCase() == "sunny") {
    return "Sun";
  }

  if (condition.trim().toLowerCase() == "clear") {
    if (isDay == 0) {
      return "Moon";
    } else {
      return "Sun";
    }
  }

  if (condition.trim().toLowerCase() == "partly cloudy") {
    if (isDay == 0) {
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
    if (isDay == 0) {
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
