import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mockData from "../../config/mockData";
import { Tag } from "../common/tag";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const GeneralInfoTag = ({ data, currentLocation }) => {
  return (
    <Tag className="w-[50%] lg:w-full">
      <div className="flex flex-row items-center gap-2 lg:gap-8">
        <div className="flex flex-col gap-4 ">
          <h3>{data.hour}</h3>
          <h1 className="text-6xl flex">
            {data.temperature}
            <p className="text-[26px] mt-2">&#8451;</p>
          </h1>
          <p className="text-[#908e92]">{data.condition.text}</p>
        </div>
        <div className="mt-4 mr-0 ml-auto">
          <img src={data.condition.icon} alt="icon weather" width={120} />
        </div>
      </div>

      <span className="flex w-full my-3 border-t-[0.5px] border-[#908e92]"></span>

      <div>
        <div className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faCalendar} color="#ffff" />
          <p className="text-[#908e92]">{data.time}</p>
        </div>
        <div className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faLocationDot} color="#ffff" />
          <p className="text-[#908e92]">
            {currentLocation.name}, {currentLocation.country}
          </p>
        </div>
      </div>
    </Tag>
  );
};
