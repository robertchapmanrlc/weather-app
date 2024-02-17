import DailyForecast from "../components/DailyForecast";
import HourlyForecast from "../components/HourlyForecast";
import MainWeather from "../components/MainWeather";
import MobileSearchBar from "../components/MobileSearchBar";
import SearchBar from "../components/SearchBar";
import {
  ExtractedDailyForecastInfo,
  ExtractedHourlyForecastInfo,
  ExtractedWeatherInfo,
} from "../types/weatherTypes";

export default async function Main() {
  const location: string = "Chicago, IL";
  const time: number = new Date().getHours();

  const weatherRes = await fetch(
    `http://localhost:3000/api/weather?location=${location}&time=${time}`,
    { cache: "no-cache" }
  );

  const weatherData: ExtractedWeatherInfo = await weatherRes.json();

  return (
    <main className="w-full flex flex-col py-[40px] px-7 md:px-14 justify-start items-center gap-y-10">
      {/* <SearchBar /> */}
      {/* <MobileSearchBar /> */}
      <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center md:gap-x-8 lg:gap-x-16">
        <MainWeather weatherData={weatherData} />
        <HourlyForecast forecastData={weatherData.hourlyForecast}/>
      </div>
      <DailyForecast forecastData={weatherData.dailyForecast} />
    </main>
  );
}
