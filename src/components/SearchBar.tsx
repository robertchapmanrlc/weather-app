"use client";

import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type SearchInputs = {
  location: string;
};

interface SearchBarProps {
  newLocation: (location: string) => void;
}

export default function SearchBar({ newLocation }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<SearchInputs>();

  const onSubmit: SubmitHandler<SearchInputs> = (
    inputs: SearchInputs
  ) => {
    newLocation(inputs.location)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-full hidden md:flex items-center lg:max-w-[400px] md:max-w-[500px] h-10 px-4 bg-black ${
        !isFocused ? "bg-opacity-25" : "bg-opacity-75"
      } flex rounded-md transition-bg duration-300`}
    >
      <Image
        width={20}
        height={20}
        src="/Search-Icon.png"
        alt="Search Icon"
        className={`${
          isFocused ? "opacity-100" : "opacity-50"
        } transition-opacity duration-300`}
      />
      <input
        {...register("location", { required: true })}
        type="text"
        placeholder="Enter Location"
        aria-label="Search for a location"
        className="w-full h-full bg-transparent pl-3 text-white/50 text-xl placeholder:text-white/50 outline-none transition-opacity duration-300 focus:text-white"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </form>
  );
}
