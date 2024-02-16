interface WeatherAPIResponse {
  location: Location;
  current: Current;
  forecast: Forecast;
}

interface Location {
  name: string;
}

interface Forecast {
  forecastday: Forecastday[];
}

interface Current {
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  humidity: number;
}

interface Forecastday {
  date: Date;
  day: Day;
  hour: Hour[];
}

interface Hour {
  condition: Condition;
  time: string;
  temp_c: number;
  temp_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
}

interface Day {
  condition: Condition;
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
}

interface Condition {
  text: string;
}

interface ExtractedWeatherInfo {
  name: string;
  temperatureF: number;
  temperatureC: number;
  humidity: number;
  windSpeedMph: number;
  windSpeedKmh: number;
  precipitation: number;
  weatherDescription: string;
  icon: string;
}

interface ExtractedHourlyForecastInfo {
  time: string;
  temp: number;
  icon: string;
}

interface ExtractedDailyForecastInfo {
  date: string;
  max_temp: number;
  min_temp: number;
  icon: string;
}

export type {
  ExtractedWeatherInfo,
  WeatherAPIResponse,
  ExtractedHourlyForecastInfo,
  ExtractedDailyForecastInfo,
};
