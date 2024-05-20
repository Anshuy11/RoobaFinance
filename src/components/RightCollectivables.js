import React from "react";
import CollectivableCard from "./CollectivableCard";

const RightCollectivables = () => {
  return (
    <div>
      <p className="w-full font-bold text-[25px] text-white pl-[20px] ml-[10px] ">
        Explore your first
      </p>
      <p className="w-full font-bold text-[25px] text-white pl-[20px] ml-[10px] ">
        Collectible
      </p>

      <p className="w-full font-bold text-[45px] text-white pl-[20px] ml-[10px] mt-[50px]">
        Meta
      </p>
      <div className="w-full font-bold text-[45px] text-white pl-[20px] ml-[10px] -mt-4">
        Lives
      </div>
      <p className=" flex w-full font-bold mt-6 text-[25px] text-white  ml-[10px]">
        <span className="pl-6 ">Live in Astrix</span>
      </p>
      <p className=" font-semibold text-[16px] text-white p-[20px] ml-[10px] w-2/3 leading-6 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="flex items-center">
        <div className="p-[20px] ml-[10px] flex">
          <img
            className="w-[40px] h-[40px] rounded-full bg-cover "
            src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
          />
          <img
            className="w-[40px] h-[40px] rounded-full bg-cover -ml-3"
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <img
            className="w-[40px] h-[40px] rounded-full bg-cover -ml-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVd1FIRCW8CVLWbz7xByfx8X02F1F20JcCnVFild3XNQ&s"
          />
          <img
            className="w-[40px] h-[40px] rounded-full bg-cover -ml-3"
            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg"
          />
          <img
            className="w-[40px] h-[40px] rounded-full bg-cover -ml-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwloUBNqIwtwNojU-nHjMoH7N7Js6pg6PwP1A9FrIyWA&s"
          />
          <img
            className="w-[40px] h-[40px] rounded-full bg-cover -ml-3"
            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvMjc5LXBhaTE1NzktbmFtLmpwZw.jpg"
          />
        </div>
        <p className="font-semibold text-[20px] text-white">
          22k people intrested
        </p>
      </div>

      <p className="w-full font-semibold text-[16px] text-white pl-[20px] ml-[10px] ">
        Artist Lineup
      </p>
      <div className="p-4 flex flex-wrap gap-2">
        {[0, 1, 3, 4].map((item , idx) => (
          <CollectivableCard key={idx} />
        ))}
      </div>

      <div className="flex w-full p-[20px] mt-20  relative ">
        <div className="flex justify-end items-end w-max  py-2 px-5 absolute right-16 bottom-5 bg-[#ffca5f] content-baseline text-center rounded-full   text-black text-[25px] font-bold">
          Join Waitlist
        </div>
      </div>
    </div>
  );
};

export default RightCollectivables;
