import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tag } from "../common/tag";
import {
  faDroplet,
  faEye,
  faTemperature0,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export const DetailInfoTag = ({ data }) => {
  return (
    <Tag className="pb-11 h-max lg:h-64">
      <label className="hidden lg:inline-block">Today Highlights</label>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-28 mt-8">
        {Array(4)
          .fill(undefined)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-3"
            >
              <label className="lg:text-xs xl:text-sm text-[#908e92] min-w-24 text-center">
                {(index === 0 && "Humidity") ||
                  (index === 1 && "Wind Speed") ||
                  (index === 2 && "Visibility") ||
                  "Temperature"}
              </label>
              <div className="mt-3">
                {(index === 0 && (
                  <FontAwesomeIcon icon={faDroplet} color="#ffff" size="2x" />
                )) ||
                  (index === 1 && (
                    <FontAwesomeIcon icon={faWind} color="#ffff" size="2x" />
                  )) ||
                  (index === 2 && (
                    <FontAwesomeIcon icon={faEye} color="#ffff" size="2x" />
                  )) || (
                    <FontAwesomeIcon
                      icon={faTemperature0}
                      color="#ffff"
                      size="2x"
                    />
                  )}
              </div>
              <p className="lg:text-sm xl:text-xl">
                {(index === 0 && `${data.humidity}%`) ||
                  (index === 1 && `${data.windSpeed} km/h`) ||
                  (index === 2 && `${data.visibility} km`) ||
                  `${data.temperature}℃`}
              </p>
            </div>
          ))}
      </div>
    </Tag>
  );
};
