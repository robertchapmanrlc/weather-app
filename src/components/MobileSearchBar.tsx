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

export default function MobileSearchBar({ newLocation }: SearchBarProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const { register, handleSubmit } = useForm<SearchInputs>();

  const onSubmit: SubmitHandler<SearchInputs> = (inputs: SearchInputs) => {
    newLocation(inputs.location);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:hidden w-full flex">
      <Image
        src="/Search-Icon.png"
        width={32}
        height={32}
        onClick={toggleVisibility}
        alt="Search Icon"
        className={`${!isFocused && "opacity-60"} cursor-pointer`}
      />
      {isVisible && (
        <input
          type="text"
          placeholder="Search"
          className="w-[75%] h-8 ml-5 px-4 bg-black bg-opacity-25 text-white/70 focus:text-white placeholder:text-white/50 focus:bg-opacity-75 rounded-md outline-none transition-bg duration-300"
          autoFocus
          {...register("location", { required: true })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}
    </form>
  );
}
