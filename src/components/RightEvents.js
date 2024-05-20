import React from "react";

const RightEvents = () => {
  return (
    <div>
      <div>
        <p className="w-full font-bold text-[25px] text-white pl-[20px] ml-[10px]  ">
          Explore your first
        </p>
        <p className="w-full font-bold text-[25px] text-white pl-[20px] ml-[10px] ">
          Event
        </p>

        <p className="w-full font-bold text-[45px] text-white pl-[20px] ml-[10px] mt-[50px]">
          Event Name
        </p>
        <p className=" flex flex-wrap w-full font-bold mt-6 text-[25px] text-white pl-[20px] ml-[10px]">
          <span className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>

          <span className="pl-6 ">Venue</span>

          <span className="mt-2 pl-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className="pl-3 ">04/3/2024</span>
          <span className="md:pl-3 ">@19:00</span>
        </p>
        <p className=" font-semibold text-[16px] text-white p-[20px] ml-[10px] md:w-2/3 leading-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="w-full font-semibold text-[25px] text-white pl-[20px] ml-[10px] ">
          Artist Lineup
        </p>
        <div className="flex justify-center p-[20px] mt-16">
          <img
            className="w-[120px] h-[170px] rounded-l-xl bg-cover"
            src="https://images.pexels.com/photos/2419554/pexels-photo-2419554.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <img
            className="w-[180px] h-[220px] rounded-xl -mt-6 bg-cover"
            src="https://images.pexels.com/photos/1809390/pexels-photo-1809390.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <img
            className="w-[120px] h-[170px] rounded-r-xl bg-cover"
            src="https://images.pexels.com/photos/1881773/pexels-photo-1881773.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>

        <div className="flex justify-around  w-full p-[20px] mt-5 md:mt-10  relative ">
          <div className="md:w-1/2 md:pl-[20px]">
            <img
              className="w-[100px] h-[100px] rounded-lg bg-cover"
              src="https://tse3.mm.bing.net/th?id=OIP.hLDXPRy5J91FEnjuOHKoPAHaGH&pid=Api&P=0&h=180"
            />
          </div>
          <div className="flex justify-end items-end w-max  py-2 px-5 h-[50px] md:h-auto md:absolute right-16 bottom-5 bg-[#ffca5f] content-baseline text-center rounded-full   text-black text-[25px] font-bold">
            Join Waitlist
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightEvents;
