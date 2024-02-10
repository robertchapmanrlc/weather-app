"use client";

import Image from "next/image";

import { useWeatherContext } from "../context/weather-context";

export default async function MainWeather() {

  const { location } = useWeatherContext();

  const res = await fetch(
    `http://localhost:3000/api/weather?lat=${location.latitude}&lon=${location.longitude}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <div className="w-full md:max-w-[450px] h-[400px] md:pt-5 bg-transparent md:bg-black/25 flex flex-col gap-y-6 items-center md:justify-start justify-center rounded-xl drop-shadow-[0_30px_10px_rgba(0,0,0,0.1)]">
      <h2 className="hidden md:block text-3xl text-white">Chicago, IL</h2>
      <Image
        width={120}
        height={120}
        src={`/${data.icon}.png`}
        alt={`${data.icon} Icon`}
      />
      <h1 className="font-bold text-5xl text-white">{data.temperature} °F</h1>
      <h4 className="md:hidden text-2xl text-white opacity-70">
        {data.weatherDescription}
      </h4>
      <div className="w-full px-7 py-2 md:py-0 flex flex-row justify-between items-start bg-black/25 rounded-lg md:bg-transparent">
        {data.precipitation && (
          <div className="flex flex-row gap-x-3">
            <Image
              width={20}
              height={20}
              src="/Precipitation.png"
              alt="Precipitation Icon"
            />
            <h5 className="font-light text-white">{data.precipitation}%</h5>
          </div>
        )}
        <div className="flex flex-row items-center gap-x-3">
          <Image
            width={20}
            height={20}
            src="/Humidity.png"
            alt="Humidity Icon"
          />
          <h5 className="font-light text-white">{data.humidity}%</h5>
        </div>
        <div className="flex items-center flex-row gap-x-3">
          <Image
            width={20}
            height={20}
            src="/Wind Speed.png"
            alt="Wind Speed Icon"
          />
          <h5 className="font-light text-white">{data.windSpeed}mph</h5>
        </div>
      </div>
      <h4 className="hidden md:block text-2xl text-white opacity-70">
        {data.weatherDescription}
      </h4>
    </div>
  );
}
