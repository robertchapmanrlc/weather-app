import Image from "next/image";

import SunIcon from './../assets/Sun.svg';
import PrecipitationIcon from './../assets/Precipitation.svg';
import HumidityIcon from './../assets/Humidity.svg';
import WindSpeedIcon from './../assets/Wind Speed.svg';

export default function MainWeather() {
  return (
    <div className="sm:min-w-[450px] h-[400px] bg-black/25 flex flex-col items-center justify-start rounded-xl drop-shadow-[0_30px_10px_rgba(0,0,0,0.1)]">
      <h2>Chicao, IL</h2>
      <Image width={100} height={100} src={SunIcon} alt="Sun Icon" />
      <h1>72 °F</h1>
      <div className="w-[80%] flex flex-row justify-between items-start bg-black/25 sm:bg-transparent">
        <div className="flex flex-row gap-x-3">
          <Image width={20} height={20} src={PrecipitationIcon} alt="Precipitation Icon"/>
          <h5>24%</h5>
        </div>
        <div className="flex flex-row gap-x-3">
          <Image width={20} height={20} src={HumidityIcon} alt="Humidity Icon"/>
          <h5>24%</h5>
        </div>
        <div className="flex flex-row gap-x-3">
          <Image width={20} height={20} src={WindSpeedIcon} alt="Wind Speed Icon"/>
          <h5>24%</h5>
        </div>
      </div>
      <h4>Mostly Sunny</h4>
    </div>
  );
}
