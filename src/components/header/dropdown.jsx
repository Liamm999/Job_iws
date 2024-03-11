import mockData from "../../config/mockData";

const selections = mockData.locations;

export const Dropdown = ({ onSelect }) => {
  return (
    <select className="bg-[#1d1b1f] text-[white] p-2 border border-1 border-[#0091cf] rounded-lg">
      {selections.map((location, index) => (
        <option value={location.name} key={index}>
          {location.name}, {location.country}
        </option>
      ))}
    </select>
  );
};
