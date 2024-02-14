"use client";

import React, { useState, createContext, useContext } from "react";

const WeatherContext = createContext<WeatherContextType | null>(null);

type WeatherContextProviderProps = {
  children: React.ReactNode;
};

type WeatherContextType = {
  location: {
    latitude: number;
    longitude: number;
  };
  setLocation: React.Dispatch<
    React.SetStateAction<{
      latitude: number;
      longitude: number;
    }>
  >;
};

export default function WeatherContextProvider({
  children,
}: WeatherContextProviderProps) {
  const [location, setLocation] = useState({
    latitude: 41.87,
    longitude: -87.62,
  });

  return (
    <WeatherContext.Provider value={{ location, setLocation }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
