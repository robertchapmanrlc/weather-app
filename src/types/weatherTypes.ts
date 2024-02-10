interface OpenWeatherApiResponse {
  cod: number;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  rain: { [key: string]: number };
  weather: {
    description: string;
  }[];
}

interface Condition {
  text: string;
}

interface ExtractedWeatherInfo {
  temperature: number;
  humidity: number;
  windSpeed: number;
  precipitation: number | null;
  weatherDescription: string | null;
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

interface Forecast {
  forecastday: Forecastday[];
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
}

interface Day {
  condition: Condition;
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
}

export type { OpenWeatherApiResponse, ExtractedWeatherInfo, Forecast, ExtractedHourlyForecastInfo, ExtractedDailyForecastInfo };
