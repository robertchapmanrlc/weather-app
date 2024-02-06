
interface WeatherApiResponse {
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

export type { WeatherApiResponse, ExtractedWeatherInfo };