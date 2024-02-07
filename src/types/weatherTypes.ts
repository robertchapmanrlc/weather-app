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

interface ExtractedWeatherInfo {
  temperature: number;
  humidity: number;
  windSpeed: number;
  precipitation: number | null;
  weatherDescription: string | null;
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
  time: string;
  temp_c: number;
  temp_f: number;
}

interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
}

export type { OpenWeatherApiResponse, ExtractedWeatherInfo, Forecast };
