import { IMAGES } from "../../assets/images";

export const Logo = () => {
  return (
    <div className="flex gap-3 w-1/3 items-center">
      <img src={IMAGES.logoImage} alt="logo" width={32} height={32} />
      <h1 className="text-3xl lg:text-4xl font-bold">Weather Website</h1>
    </div>
  );
};
