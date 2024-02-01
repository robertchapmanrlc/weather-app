import HourlyForecast from "../components/HourlyForecast";
import MainWeather from "../components/MainWeather";
import MobileSearchBar from "../components/MobileSearchBar";
import SearchBar from "../components/SearchBar";

export default function Main() {
  return (
    <main className="w-full flex flex-col pt-[40px] justify-start items-center gap-y-10">
      <SearchBar />
      <MobileSearchBar />
      <div className="w-full flex flex-col md:flex-row-reverse md:px-8 lg:px-0 justify-center items-center md:gap-x-8 lg:gap-x-16">
        <MainWeather />
        <HourlyForecast />
      </div>
    </main>
  );
}
