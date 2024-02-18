import { NextRequest, NextResponse } from "next/server";
import { extractWeatherInfo } from "../../../utilities/weatherUtils";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;

  const location = query.get("location");
  const time = Number(query.get("time"));

  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=5&aqi=no&alerts=no`
  );

  if (!res.ok) {
    const errorMessage = `Failed to fetch data. Status: ${res.status}, ${res.statusText}`;
    throw new Error(errorMessage);
  }

  const data = await res.json();

  const weatherInfo = extractWeatherInfo(data, time);
  
  return NextResponse.json(weatherInfo);
}
