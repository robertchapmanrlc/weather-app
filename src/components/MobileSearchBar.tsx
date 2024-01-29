"use client";

import Image from "next/image";
import { useState } from "react";

import SearchIcon from "../assets/Search Icon.svg";

export default function MobileSearchBar() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="md:hidden w-full px-6">
      <div className="flex">
        <Image
          src={SearchIcon}
          width={32}
          height={32}
          onClick={toggleVisibility}
          alt="Search Icon"
        />
        {isVisible && (
          <input
            type="text"
            placeholder="Search"
            className="w-[75%] h-8 ml-5 px-4 bg-black bg-opacity-25 text-white placeholder:text-white/50 focus:bg-opacity-75 rounded-md outline-none transition-bg duration-300"
          />
        )}
      </div>
    </div>
  );
}
