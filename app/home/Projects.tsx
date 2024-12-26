"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Slider: React.FC = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation]}
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          1920: { slidesPerView: 3, spaceBetween: 30 },
          1028: { slidesPerView: 2, spaceBetween: 30 },
          990: { slidesPerView: 1, spaceBetween: 0 },
        }}
        className="multiple-slide-carousel"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-2xl font-semibold text-indigo-600">Slide 1</span>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-2xl font-semibold text-indigo-600">Slide 2</span>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-2xl font-semibold text-indigo-600">Slide 3</span>
          </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-2xl font-semibold text-indigo-600">Slide 4</span>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
      <div className="relative flex justify-center items-center m-auto left-0 right-0 w-fit bottom-30">
        {/* Previous Button */}
        <button
          id="slider-button-left"
          className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 !-translate-x-16"
        >
          <svg
            className="h-5 w-5 text-indigo-600 group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Next Button */}
        <button
          id="slider-button-right"
          className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 !translate-x-16"
        >
          <svg
            className="h-5 w-5 text-indigo-600 group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
