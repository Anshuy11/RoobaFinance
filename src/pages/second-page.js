import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

import "react-multi-carousel/lib/styles.css";
import ToggleButton from "@/components/ToggleButton";
import RightEvents from "@/components/RightEvents";
import RightCollectivables from "@/components/RightCollectivables";
import Link from "next/link";

const Second = () => {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [actButton, setActButton] = useState("Events");
  const book_2 = useRef();
  var settingsWeb_2 = {
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
    dots: false,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const data = [
    {
      img: "https://plus.unsplash.com/premium_photo-1682855223543-2427fec5ec3d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      opacity: "70",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1681503974121-b9387f3aea69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
      title: "",
      opacity: "60",
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1573585808609-26146616378d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
      title: "",
      opacity: "0",
    },
    {
      img: "https://images.unsplash.com/photo-1597656370793-12900b6d9a28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxjb25jZXJ0fGVufDB8fDB8fHww",
      title: "",
      opacity: "0",
    },
    {
      img: "https://images.unsplash.com/photo-1564788774458-79471650559f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxjb25jZXJ0fGVufDB8fDB8fHww",
      title: "",
      opacity: "0",
    },
  ];

  const activeButtonHandler = (text) => {
    setActButton(text);
  };

  return (
    <div className="xl:container xl:m-auto md:flex w-full md:max-h-[950px] md:overflow-hidden">
      <div className="w-full md:w-[60%] md:flex bg-[#15181b] md:h-[1200px] md:overflow-hidden">
        <div
          id="backgroundTextContainer"
          className="absolute md:left-10 top-28"
        >
          <div className="backgroundTextWrapper text-gray-200 text-opacity-20 text-9xl font-bold">
            <div>ASDR</div>
            <div className="mb-16">IX</div>
            <div>EVE</div>
            <div>NTS</div>
          </div>
        </div>
        <div>
          <div className="flex ">
            <div className="text-[#ffca5f] ml-10 md:ml-24  text-[40px] font-bold">
              Astrix
            </div>
          </div>
          <div
            className={`${
              oldSlide === 0 && "md:translate-x-1/4"
            } md:mt-16  sm:grid z-10 w-full md:overflow-hidden lg:max-w-none sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4`}
          >
            <Slider
              ref={book_2}
              {...settingsWeb_2}
              className="col-span-4  w-full  grid grid-cols-4 sm:grid-cols-3 mt-4  md:mt-14  "
            >
              {/* <div className="pr-5 right-0 grid grid-cols-1 hover:scale-105 transition duration-700 ease-in-out  col-span-1 rounded-lg ">
                <div
                  className={
                    "h-full sm:w-[full] w-full relative  rounded-lg border border-gray-600  overflow-hidden  hover:border-sky-500  m-2"
                  }
                ></div>
              </div> */}
              {data?.map((item, indx) => {
                return (
                  <div
                    key={indx}
                    className={`  ${
                      oldSlide !== 0 && "md:-translate-x-32"
                    } pr-5 right-0 grid grid-cols-1 hover:scale-105 transition duration-700 ease-in-out  col-span-1 rounded-lg`}
                  >
                    <div
                      className={
                        "h-full sm:w-[full] w-full relative  rounded-lg border border-gray-600  overflow-hidden  hover:border-sky-500  m-2"
                      }
                    >
                      <img
                        style={{ objectFit: "cover", width: "100%" }}
                        src={item.img}
                        fill="true"
                        loading="lazy"
                        alt={item.title}
                        className={`opacity-${item.opacity} rounded-t-lg h-[500px] w-full border-b `}
                      />
                      <div className="absolute  top-2 right-2">
                       
                      </div>
                    
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="relative pb-4">
            <div className="  mt-2 flex justify-end mr-5 ">
              <div className="bg-gray-950 text-sm  rounded-full text-white flex w-max p-2">
                <Link href={"/"}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </span>
                </Link>

                <Link href={"/"}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-4 md:mt-10">
              <ToggleButton
                activeButtonHandler={activeButtonHandler}
                actButton={actButton}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#b9a0ff] flex justify-center  w-[5%] overflow-hidden   relative ">
        <div className="top-animate text-black [writing-mode:vertical-lr] h-[2000px] absolute font-medium text-3xl tracking-wide	">
          lorem dlfsdlsdf f sdsd; ;o j;o o oo opis
          <span className="text-4xl mx-4">*</span> lorem dlfsdlsdf f sdsd; ;o
          j;o o oo opis
        </div>
      </div>
      <div className="w-full md:w-[35%] bg-[#15181b] md:h-[1200px]">
       

        {actButton === "Events" ? <RightEvents /> : <RightCollectivables />}
      </div>
    </div>
  );
};

export default Second;
