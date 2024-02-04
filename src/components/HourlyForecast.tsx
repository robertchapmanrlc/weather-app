import Image from "next/image";

import CloudyIcon from "../assets/Cloudy.svg";
import SunIcon from "../assets/Sun.svg";

export default function HourlyForecast() {
  return (
    <div className="w-full md:max-w-[325px] h-[400px] px-7 py-5 flex flex-col justify-between gap-y-5 bg-black/25 rounded-xl drop-shadow-[0_30px_10px_rgba(0,0,0,0.1)]">
      <div className="w-full flex justify-between">
        <h2 className="text-white text-2xl font-bold">Today</h2>
        <h2 className="text-white text-2xl">Feb, 5</h2>
      </div>
      <div className="w-full h-[85%] flex flex-col justify-between">
        <div className="w-full h-10 flex flex-row items-center justify-between rounded-md">
          <h5 className="text-white text-lg">66 °F</h5>
          <Image width={35} height={35} src={CloudyIcon} alt="Cloudy Icon" />
          <h5 className="text-white/60 text-lg">12:00pm</h5>
        </div>
        <div className="w-full h-10 flex flex-row items-center justify-between rounded-md">
          <h5 className="text-white text-lg">70 °F</h5>
          <Image width={35} height={35} src={SunIcon} alt="Cloudy Icon" />
          <h5 className="text-white/60 text-lg">2:00pm</h5>
        </div>
        <div className="w-full h-10 flex flex-row items-center justify-between rounded-md">
          <h5 className="text-white text-lg">74 °F</h5>
          <Image width={35} height={35} src={CloudyIcon} alt="Cloudy Icon" />
          <h5 className="text-white/60 text-lg">4:00pm</h5>
        </div>
        <div className="w-full h-10 flex flex-row items-center justify-between rounded-md">
          <h5 className="text-white text-lg">72 °F</h5>
          <Image width={35} height={35} src={CloudyIcon} alt="Cloudy Icon" />
          <h5 className="text-white/60 text-lg">6:00pm</h5>
        </div>
        <div className="w-full h-10 flex flex-row items-center justify-between rounded-md">
          <h5 className="text-white text-lg">68 °F</h5>
          <Image width={35} height={35} src={SunIcon} alt="Cloudy Icon" />
          <h5 className="text-white/60 text-lg">8:00pm</h5>
        </div>
      </div>
    </div>
  );
}
