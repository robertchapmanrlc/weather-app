
import Image from "next/image";

export default async function MainWeather() {

  return (
    <div className="w-full md:max-w-[450px] h-[400px] md:pt-5 bg-transparent md:bg-black/25 flex flex-col gap-y-6 items-center md:justify-start justify-center rounded-xl drop-shadow-[0_30px_10px_rgba(0,0,0,0.1)]">
      <h2 className="hidden md:block text-3xl text-white">Chicago, IL</h2>
      <Image width={120} height={120} src={`/Sun.png`} alt={`Sun Icon`} />
      <h1 className="font-bold text-5xl text-white">41 °F</h1>
      <h4 className="md:hidden text-2xl text-white opacity-70">clear sky</h4>
      <div className="w-full px-7 py-2 md:py-0 flex flex-row justify-between items-start bg-black/25 rounded-lg md:bg-transparent">
        <div className="flex flex-row gap-x-3">
          <Image
            width={20}
            height={20}
            src="/Precipitation.png"
            alt="Precipitation Icon"
          />
          <h5 className="font-light text-white">0%</h5>
        </div>
        <div className="flex flex-row items-center gap-x-3">
          <Image
            width={20}
            height={20}
            src="/Humidity.png"
            alt="Humidity Icon"
          />
          <h5 className="font-light text-white">51%</h5>
        </div>
        <div className="flex items-center flex-row gap-x-3">
          <Image
            width={20}
            height={20}
            src="/Wind Speed.png"
            alt="Wind Speed Icon"
          />
          <h5 className="font-light text-white">4mph</h5>
        </div>
      </div>
      <h4 className="hidden md:block text-2xl text-white opacity-70">
        clear sky
      </h4>
    </div>
  );
}
