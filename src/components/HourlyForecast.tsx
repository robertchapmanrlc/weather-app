"use client";

import Image from "next/image";

import { useWeatherContext } from "../context/weather-context";
import { ExtractedHourlyForecastInfo } from "../types/weatherTypes";

export default async function HourlyForecast() {
  const { location } = useWeatherContext();
  const date = new Date();
  const dateString = date.toString().substring(4, 7) + ", " + date.getDate();
  const time = date.getHours();

  const res = await fetch(
    `http://localhost:3000/api/forecast/hourly?lat=${location.latitude}&lon=${location.longitude}&time=${time}`,
    { cache: "no-store" }
  );

  const data: ExtractedHourlyForecastInfo[] = await res.json();

  return (
    <div className="w-full md:max-w-[325px] h-52 md:h-[400px] px-4 md:px-7 py-5 flex flex-col justify-between gap-y-5 bg-black/25 rounded-xl drop-shadow-[0_30px_10px_rgba(0,0,0,0.1)]">
      <div className="w-full flex justify-between">
        <h2 className="text-white text-2xl font-bold">Today</h2>
        <h2 className="text-white text-2xl">{dateString}</h2>
      </div>
      <div className="w-full h-[85%] flex flex-row md:flex-col justify-between">
        {data.map((forecast, i) => (
          <div
            key={i}
            className={`min-w-14 md:w-full ${
              i > 0 && "border-transparent"
            } border-2 px-2 py-2 md:h-10 flex flex-col md:flex-row items-center justify-between rounded-md`}
          >
            <h5 className="text-white text-lg text-center md:text-left w-full sm:w-14">
              {forecast.temp} °F
            </h5>
            <Image
              width={35}
              height={35}
              src={`/${forecast.icon}.png`}
              alt={`${forecast.icon} Icon`}
            />
            <h5 className="text-white/60 text-sm md:text-lg text-center md:text-right w-20">
              {forecast.time}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
