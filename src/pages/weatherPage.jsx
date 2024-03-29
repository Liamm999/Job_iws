import { useState } from "react";
import { Header } from "../components/header/header";
import { WeatherInformation } from "../components/weather-information/weather-information";
import mockData from "../config/mockData";

const weatherByDays = mockData.weatherByDays;
const locations = mockData.locations;
const hours = mockData.hours;

export const WeatherPage = () => {
  const [currentWeather, setCurrentWeather] = useState(0);

  return (
    <div className="relative bg-black w-full h-screen overflow-y-hidden">
      <div className="relative">
        <img
          src={weatherByDays[currentWeather].condition.image}
          alt="bg"
          className="absolute object-cover w-full h-screen top-0 left-0 z-0 opacity-80 "
        />
      </div>
      <div className="absolute w-full h-full px-6 xl:px-[8%] 2xl:px-[13%] py-10 z-10 overflow-y-scroll">
        <div className="mb-20">
          <Header />
        </div>
        <WeatherInformation
          weatherData={weatherByDays[currentWeather]}
          currentLocaiton={locations[0]}
          choosingDaysData={weatherByDays}
          onChooseDay={(index) => setCurrentWeather(index)}
          choosingTimeData={hours}
        ></WeatherInformation>
      </div>
    </div>
  );
};
