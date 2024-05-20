import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import Image from "next/image";

const Carousel = () => {
  const book_2 = useRef();
  var settingsWeb_2 = {
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const data = [
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.mOjrQ0yMjA-BSqW-Fi1cpQHaE8&pid=Api&P=0&h=180",
      title: "",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.mOjrQ0yMjA-BSqW-Fi1cpQHaE8&pid=Api&P=0&h=180",
      title: "",
    },
    {
      img: "https://tse4.mm.bing.net/th?id=OIP.T2bkB2lkGtJoKvpFUqwscAAAAA&pid=Api&P=0&h=180",
      title: "",
    },
  ];
  return (
    <div>
      <Slider
        ref={book_2}
        {...settingsWeb_2}
        className="col-span-4  w-full  grid grid-cols-4 sm:grid-cols-3 mt-14  "
      >
        {data?.map((item, indx) => {
          return (
            <div
              key={indx}
              className="pr-5 right-0 grid grid-cols-1 hover:scale-105 transition duration-700 ease-in-out  col-span-1 rounded-lg "
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
                  className="rounded-t-lg h-[500px] w-full border-b  "
                />
                <div className="absolute  top-2 right-2">
                  {/*  <Image
                src="/instaIcon.webp"
                width={30}
                height={30}
                alt="article image"
                loading="lazy"
              /> */}
                </div>
                {/*  <div className="p-3  w-[full]  rounded-b-lg h-[100px]">
              {item.Title}
            </div> */}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
