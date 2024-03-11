import { Dropdown } from "./dropdown";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <div className="flex justify-between gap-6">
      <Logo />
      <Dropdown />
    </div>
  );
};
