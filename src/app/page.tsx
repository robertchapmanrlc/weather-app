"use client";

import { useEffect, useState } from "react";
import DailyForecast from "../components/DailyForecast";
import HourlyForecast from "../components/HourlyForecast";
import MainWeather from "../components/MainWeather";
import MobileSearchBar from "../components/MobileSearchBar";
import SearchBar from "../components/SearchBar";
import { ExtractedWeatherInfo } from "../types/weatherTypes";

export default function Main() {
  const [location, setLocation] = useState("Chicago, IL");
  const [weatherData, setWeatherData] = useState<ExtractedWeatherInfo | undefined>();
  const time: number = new Date().getHours();

  const newLocation = (location: string) => {
    setLocation(location);
  };

  useEffect(() => {
    fetch(
      `http://localhost:3000/api/weather?location=${location}&time=${time}`,
      { cache: "no-cache" }
    )
      .then((res) => res.json())
      .then((weatherData) => setWeatherData(weatherData));
    console.log(location);
  }, [location]);

  // const weatherData: ExtractedWeatherInfo = await weatherRes.json();

  return (
    <main className="w-full flex flex-col py-[40px] px-7 md:px-14 justify-start items-center gap-y-10">
      <SearchBar newLocation={newLocation} />
      <MobileSearchBar />
      <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center md:gap-x-8 lg:gap-x-16">
        <MainWeather weatherData={weatherData} />
        <HourlyForecast forecastData={weatherData.hourlyForecast} />
      </div>
      <DailyForecast forecastData={weatherData.dailyForecast} />
    </main>
  );
}
