import { Tag } from "../common/tag";

export const ChoosingDaysTag = ({ data, onChangeDay }) => {
  return (
    <div>
      <label className="hidden font-bold lg:inline-block">5-Day Forecast</label>
      <div className="lg:mt-4">
        <Tag className="py-6 lg:py-4 h-64">
          <div className="flex flex-col gap-3 h-full justify-around">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-start items-center gap-2 xl:gap-8 hover:bg-[#62c3f7] hover:rounded-xs hover:cursor-pointer"
                onClick={() => onChangeDay(index)}
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={item.condition.icon}
                    alt="icon weather"
                    width={28}
                  />
                  <h2>{item.temperature}</h2>
                </div>
                <p className="text-[#908e92] text-xs xl:text-sm">{item.time}</p>
                <p className="text-[#908e92] text-xs xl:text-sm mr-0 ml-auto">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </Tag>
      </div>
    </div>
  );
};
