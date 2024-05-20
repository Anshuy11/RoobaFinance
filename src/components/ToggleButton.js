import React, { useState } from "react";

const ToggleButton = ({ actButton: activeButton, activeButtonHandler }) => {
  return (
    <div className="relative flex text-white font-medium text-xl md:text-2xl bg-[#282b30] w-max  items-center justify-between rounded-full overflow-hidden">
      <div
        className={` h-full bg-[#484e56] absolute top-0 ${
          activeButton === "Events"
            ? "left-0 w-[120px] md:w-[170px]"
            : "right-0 w-[170px] md:w-[200px]"
        } rounded-full transition-all duration-1000`}
      />
      <div
        onClick={() => activeButtonHandler("Events")}
        className={`w-[120px] md:w-[170px] py-3 rounded-full cursor-pointer z-10 text-center`}
      >
        Events
      </div>
      <div
        onClick={() => activeButtonHandler("Collections")}
        className={`w-[170px] md:w-[200px] py-3 rounded-full cursor-pointer z-10 text-center`}
      >
        Collections
      </div>
    </div>
  );
};

export default ToggleButton;
