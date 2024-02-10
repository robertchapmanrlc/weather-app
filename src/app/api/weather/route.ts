import { NextRequest, NextResponse } from "next/server";
import { extractWeatherInfo } from "../../../utilities/weatherUtils";

export async function GET(request: NextRequest) {
  const location = request.nextUrl.searchParams;

  const lat = location.get("lat");
  const lon = location.get("lon");

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`
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
  
  return NextResponse.json(weatherInfo);
}
