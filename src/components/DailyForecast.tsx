import Image from "next/image";

import CloudyIcon from "../assets/Cloudy.svg";
import SunIcon from "../assets/Sun.svg";

export default function DailyForecast() {
  return (
    <div className="w-full lg:max-w-[840px] h-[300px] md:h-[200px] px-7 py-5 flex flex-col justify-between gap-y-5 bg-black/25 rounded-xl drop-shadow-[0_30px_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-white text-2xl font-bold">Forecast</h2>
      <div className="w-full h-[85%] flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-24 h-36 md:h-28 flex md:flex-col items-center justify-between rounded-md">
          <h5 className="w-28 text-white/60 text-lg">Monday</h5>
          <Image width={35} height={35} src={CloudyIcon} alt="Cloudy Icon" />
          <div className=" w-28 flex justify-between">
            <h5 className="text-white text-lg">66 °F</h5>
            <h5 className="text-white/60 text-lg">64 °F</h5>
          </div>
        </div>
        <div className="w-full md:w-24 h-36 md:h-28 flex md:flex-col items-center justify-between rounded-md">
          <h5 className="w-28 text-white/60 text-lg">Tuesday</h5>
          <Image width={35} height={35} src={SunIcon} alt="Cloudy Icon" />
          <div className=" w-28 flex justify-between">
            <h5 className="text-white text-lg">70 °F</h5>
            <h5 className="text-white/60 text-lg">68 °F</h5>
          </div>
        </div>
        <div className="w-full md:w-24 h-36 md:h-28 flex md:flex-col items-center justify-between rounded-md">
          <h5 className="w-28 text-white/60 text-lg">Wednesday</h5>
          <Image width={35} height={35} src={CloudyIcon} alt="Cloudy Icon" />
          <div className=" w-28 flex justify-between">
            <h5 className="text-white text-lg">74 °F</h5>
            <h5 className="text-white/60 text-lg">70 °F</h5>
          </div>
        </div>
        <div className="w-full md:w-24 h-36 md:h-28 flex md:flex-col items-center justify-between rounded-md">
          <h5 className="w-28 text-white/60 text-lg">Thursday</h5>
          <Image width={35} height={35} src={CloudyIcon} alt="Cloudy Icon" />
          <div className=" w-28 flex justify-between">
            <h5 className="text-white text-lg">72 °F</h5>
            <h5 className="text-white/60 text-lg">69 °F</h5>
          </div>
        </div>
        <div className="w-full md:w-24 h-36 md:h-28 flex flex-row md:flex-col items-center justify-between rounded-md">
          <h5 className="w-28 text-white/60 text-lg">Friday</h5>
          <Image width={35} height={35} src={SunIcon} alt="Cloudy Icon" />
          <div className=" w-28 flex justify-between">
            <h5 className="text-white text-lg">68 °F</h5>
            <h5 className="text-white/60 text-lg">64 °F</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
