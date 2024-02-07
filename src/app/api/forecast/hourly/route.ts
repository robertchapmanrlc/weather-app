import { NextRequest, NextResponse } from "next/server";
import { extractHourlyForecastInfo } from "../../../../utilities/forecastUtils";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;

  const lat = query.get("lat");
  const lon = query.get("lon");
  const time = Number(query.get("time"));
  let days = 1;
  if (time >= 15) {
    days = 2
  }

  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${lat},${lon}&days=${days}&aqi=no&alerts=no`
  );

  if (!res.ok) {
    const errorMessage = `Failed to fetch data. Status: ${res.status}, ${res.statusText}`;
    throw new Error(errorMessage);
  }

  const data = await res.json();

  const forecastInfo = extractHourlyForecastInfo(data.forecast, time);

  return NextResponse.json(forecastInfo);
}
