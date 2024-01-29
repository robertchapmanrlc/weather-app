import MobileSearchBar from "../components/MobileSearchBar";
import SearchBar from "../components/SearchBar";

export default function Main() {
  return (
    <main className="w-full flex flex-col pt-[40px] justify-start items-center">
      <div className="hidden sm:flex w-full justify-center">
        <SearchBar />
      </div>
      <MobileSearchBar />
    </main>
  );
}
