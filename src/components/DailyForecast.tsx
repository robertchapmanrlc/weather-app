import Image from "next/image";

import { ExtractedDailyForecastInfo } from "@/types/weatherTypes";

interface DailyForecastProps {
  forecastData: ExtractedDailyForecastInfo[];
}

export default function DailyForecast({ forecastData }: DailyForecastProps) {
  return (
    <div className="w-full lg:max-w-[840px] h-[300px] md:h-[200px] px-4 md:px-7 py-5 flex flex-col justify-between gap-y-5 bg-black/25 rounded-xl drop-shadow-[0_30px_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-white text-2xl font-bold">Forecast</h2>
      <div className="w-full h-[85%] flex flex-col md:flex-row justify-between">
        {forecastData.map((forecast, i) => (
          <div
            key={i}
            className={`w-full ${
              i > 0 && "border-transparent"
            } border-2 px-2 md:w-32 h-36 md:h-28 flex md:flex-col items-center justify-between rounded-md`}
          >
            <h5 className="w-24 md:w-full text-white/60 md:text-center text-lg">
              {forecast.date}
            </h5>
            <Image
              width={35}
              height={35}
              src={`/${forecast.icon}.png`}
              alt={`${forecast.icon} Icon`}
            />
            <div className="w-24 md:w-full flex justify-between">
              <h5 className="text-white text-lg">{forecast.max_temp} °F</h5>
              <h5 className="text-white/60 text-lg">{forecast.min_temp} °F</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
