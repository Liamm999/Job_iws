import { Tag } from "../common/tag";

export const ChoosingTimeTag = ({ data }) => {
  return (
    <div>
      <label className="font-bold hidden lg:inline-block">Today At</label>
      <div className="grid grid-cols-12 gap-32 lg:grid-cols-6 lg:gap-4 lg:mt-4 overflow-x-auto lg:h-64">
        {data.map((item, index) => (
          <Tag key={index} className="w-max min-w-28 h-max">
            <div className="flex items-center flex-col">
              <p className="text-[#908e92]">{item.hour}</p>
              <img
                src={item.icon}
                alt="icon weather"
                width={28}
                className="hover:scale-150 transition-all"
              />
              <p className="text-[#908e92]">{item.temperature}</p>
            </div>
          </Tag>
        ))}
      </div>
    </div>
  );
};
