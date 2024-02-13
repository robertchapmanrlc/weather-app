import { NextRequest, NextResponse } from "next/server";
import { OpenWeatherGeolocationAPIResponse } from "../../../types/weatherTypes";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${body.location}&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );

  if (!res.ok) {
    const errorMessage = `Failed to fetch data. Status: ${res.status}, ${res.statusText}`;
    throw new Error(errorMessage);
  }

  const data: OpenWeatherGeolocationAPIResponse[] = await res.json();

  const coordinates = {
    lat: data[0].lat,
    lon: data[0].lon
  }

  return NextResponse.json(coordinates);
}
