
import "./globals.css";
import {
  calculateTimeOfDay,
  getTimeOfDayGradientClass,
} from "../utilities/timeUtils";

export const metadata = {
  title: "Weather App",
  description: "Use this web app to check the weather",
  version: "2.0.0",
  author: {
    name: "Robert Chapman",
    email: "chapmanrobert12@gmail.com",
    website: "https://robert-chapman.vercel.app/",
  },
  keywords: ["weather", "forecast", "web app", "next.js", "react"],
  urls: {
    repository: "https://github.com/robertchapmanrlc/weather-app/",
  },
  social: {
    title: "Weather App - Check the Weather",
    description:
      "A web application to check the weather with a clean interface",
  },
  language: "en",
  locale: "en_US",
  icons: {
    icon: "/weather.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const timeOfDay = calculateTimeOfDay();

  const gradientClass = `${getTimeOfDayGradientClass(
    timeOfDay
  )} text-white`;

  return (
    <html lang="en" className={gradientClass}>
      <body className="h-full">{children}</body>
    </html>
  );
}
