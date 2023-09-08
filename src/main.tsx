import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const backgrounds = {
  sunrise: "background-image: linear-gradient(145deg, rgb(84, 90, 158), #FF5800); height: 100vh; width: 100vw;",
  morning: "background-image: linear-gradient(145deg, #FF5800, #ffae42, rgb(240, 240, 0)); height: 100vh; width: 100vw;",
  daytime: "background-image: linear-gradient(145deg, rgb(238, 238, 0), skyblue); height: 100vh; width: 100vw;",
  sunset: "background-image: linear-gradient(145deg, skyblue, #FF5800); height: 100vh; width: 100vw;",
  evening: "background-image: linear-gradient(145deg, #FF5800, #A020F0); height: 100vh; width: 100vw;",
  night: "background-image: linear-gradient(145deg, #A020F0, blue, #1520A6); height: 100vh; width: 100vw;",
};

let time = new Date().getHours();
let background = "";

if ((time >= 0 && time <= 6) || time > 22) {
  background = backgrounds.night;
} else if (time > 6 && time <= 9) {
  background = backgrounds.sunrise;
} else if (time > 9 && time <= 11) {
  background = backgrounds.morning;
} else if (time > 11 && time <= 17) {
  background = backgrounds.daytime;
} else if (time > 17 && time <= 19) {
  background = backgrounds.sunset;
} else if (time > 19 && time <= 22) {
  background = backgrounds.evening;
}

document.body.setAttribute(
  "style",
  background,
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
