import { Mosaic } from "react-loading-indicators";

export const WaitingAnimation = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Mosaic color="#26264C" size="medium" text="" textColor="" />
    </div>
  );
};