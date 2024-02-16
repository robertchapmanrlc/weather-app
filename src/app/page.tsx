import DailyForecast from "../components/DailyForecast";
import HourlyForecast from "../components/HourlyForecast";
import MainWeather from "../components/MainWeather";
import MobileSearchBar from "../components/MobileSearchBar";
import SearchBar from "../components/SearchBar";
import { ExtractedDailyForecastInfo, ExtractedHourlyForecastInfo, ExtractedWeatherInfo, LocationCoords } from "../types/weatherTypes";

export default async function Main() {

  const location: string = "Chicago, IL";

  return (
    <main className="w-full flex flex-col py-[40px] px-7 md:px-14 justify-start items-center gap-y-10">
      {/* <SearchBar /> */}
      {/* <MobileSearchBar /> */}
      <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center md:gap-x-8 lg:gap-x-16">
        {/* <MainWeather weatherData={weatherData} /> */}
        {/* <HourlyForecast forecastData={hourlyForecastData}/> */}
      </div>
      {/* <DailyForecast forecastData={dailyForecastData} /> */}
    </main>
  );
}
