"use client";

import Image from "next/image";
import SearchIcon from "../assets/Search Icon.svg";
import { useState } from "react";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={`w-full hidden sm:flex sm:max-w-[400px] md:max-w-[500px] h-10 px-4 bg-black ${
        !isFocused ? "bg-opacity-25" : "bg-opacity-75"
      } flex rounded-md transition-bg duration-300`}
    >
      <Image width={20} height={20} src={SearchIcon} alt="Search Icon" className={`${isFocused ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`} />
      <input
        type="text"
        placeholder="Enter Location"
        aria-label="Search for a location"
        className="w-full h-full bg-transparent pl-3 text-white/50 text-xl placeholder:text-white/50 outline-none transition-opacity duration-300 focus:text-white"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
