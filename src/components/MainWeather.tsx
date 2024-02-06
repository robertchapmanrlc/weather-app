import Image from "next/image";

import SunIcon from "./../assets/Sun.svg";
import PrecipitationIcon from "./../assets/Precipitation.svg";
import HumidityIcon from "./../assets/Humidity.svg";
import WindSpeedIcon from "./../assets/Wind Speed.svg";
import { getLocationWeather } from "../api/weatherApi";

export default async function MainWeather() {
  const data = await getLocationWeather();
  console.log(data);

  return (
    <div className="w-full md:max-w-[450px] h-[400px] md:pt-5 bg-transparent md:bg-black/25 flex flex-col gap-y-6 items-center md:justify-start justify-center rounded-xl drop-shadow-[0_30px_10px_rgba(0,0,0,0.1)]">
      <h2 className="hidden md:block text-3xl text-white">Chicago, IL</h2>
      <Image width={120} height={120} src={SunIcon} alt="Sun Icon" />
      <h1 className="font-bold text-5xl text-white">{data.temperature} °F</h1>
      <h4 className="md:hidden text-2xl text-white opacity-70">
        {data.weatherDescription}
      </h4>
      <div className="w-full px-7 py-2 md:py-0 flex flex-row justify-between items-start bg-black/25 rounded-lg md:bg-transparent">
        {data.precipitation && <div className="flex flex-row gap-x-3">
          <Image
            width={20}
            height={20}
            src={PrecipitationIcon}
            alt="Precipitation Icon"
          />
          <h5 className="font-light text-white">{data.precipitation}%</h5>
        </div>}
        <div className="flex flex-row gap-x-3">
          <Image
            width={20}
            height={20}
            src={HumidityIcon}
            alt="Humidity Icon"
          />
          <h5 className="font-light text-white">{data.humidity}%</h5>
        </div>
        <div className="flex flex-row gap-x-3">
          <Image
            width={20}
            height={20}
            src={WindSpeedIcon}
            alt="Wind Speed Icon"
          />
          <h5 className="font-light text-white">{data.windSpeed}mph</h5>
        </div>
      </div>
      <h4 className="hidden md:block text-2xl text-white opacity-70">
        {data.weatherDescription}
      </h4>
    </div>
  );
}
