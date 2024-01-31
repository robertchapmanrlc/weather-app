import MainWeather from "../components/MainWeather";
import MobileSearchBar from "../components/MobileSearchBar";
import SearchBar from "../components/SearchBar";

export default function Main() {
  return (
    <main className="w-full flex flex-col pt-[40px] justify-start items-center gap-y-10">
      <SearchBar />
      <MobileSearchBar />
      <MainWeather />
    </main>
  );
}
