import { ChoosingDaysTag } from "./choosingDaysTag";
import { ChoosingTimeTag } from "./choosingTimeTag";
import { DetailInfoTag } from "./detailInfoTag";
import { GeneralInfoTag } from "./generalInfoTag";

export const WeatherInformation = ({
  weatherData,
  choosingDaysData,
  choosingTimeData,
  currentLocaiton,
  onChooseDay,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="w-full flex lg:flex-col gap-4 justify-between lg:mr-4 lg:w-[40%]">
        <GeneralInfoTag data={weatherData} currentLocation={currentLocaiton} />
        <ChoosingDaysTag data={choosingDaysData} onChangeDay={onChooseDay} />
      </div>
      <div className="flex flex-col justify-between gap-4 mt-4 lg:mt-0">
        <DetailInfoTag data={weatherData} />
        <ChoosingTimeTag data={choosingTimeData} />
      </div>
    </div>
  );
};
