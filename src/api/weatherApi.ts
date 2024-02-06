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

export async function getLocationWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );

  if (!res.ok) {
    const errorMessage = `Failed to fetch data. Status: ${res.status}, ${res.statusText}`;
    throw new Error(errorMessage);
  }

  const data = await res.json();

  if (data.cod !== 200) {
    throw new Error(
      `Failed to fetch data. Cod: ${data.cod}, Message: ${data.message}`
    );
  }

  const weatherInfo = extractWeatherInfo(data);

  return weatherInfo;
}

function extractWeatherInfo(apiResponse: WeatherApiResponse) {
  if (!apiResponse || apiResponse.cod !== 200) {
    throw new Error("Invalid API Response");
  }

  const {
    main: { temp, humidity },
    wind: { speed },
    weather,
    rain
  } = apiResponse;

  const mainWeather = weather && weather.length > 0 ? weather[0] : null;
  const weatherDescription = mainWeather ? mainWeather.description : null;
  const precipitation = rain ? rain["1h"] : null;

  const extractedInfo: ExtractedWeatherInfo = {
    temperature: temp,
    humidity,
    windSpeed: speed,
    precipitation,
    weatherDescription
  };

  return extractedInfo;
}
