import DailyForecast from "../components/DailyForecast";
import HourlyForecast from "../components/HourlyForecast";
import MainWeather from "../components/MainWeather";
import MobileSearchBar from "../components/MobileSearchBar";
import SearchBar from "../components/SearchBar";

export default function Main() {
  return (
    <main className="w-full flex flex-col py-[40px] px-7 justify-start items-center gap-y-10">
      <SearchBar />
      <MobileSearchBar />
      <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center md:gap-x-8 lg:gap-x-16">
        <MainWeather />
        <HourlyForecast />
      </div>
      <DailyForecast />
    </main>
  );
}
