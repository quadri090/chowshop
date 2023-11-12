import React from "react";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import ServeSteps from "./ServeSteps";
import map1 from "../assets/Map1.png";
import Fast from "../assets/Fast food.png";
import scooter from "../assets/Scooter.png";

export default function HomeServe() {
  return (
    <div>
      <div className="md:hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ServeSteps
              src={map1}
              head="Tell us where you are"
              desc="Select the location you want us to deliver."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServeSteps
              src={Fast}
              head="Tell us what you want"
              desc="Browse the type of food that interest you."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServeSteps
              src={scooter}
              head="We'll come running"
              desc="Your order will be delivered to you in no time."
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="hidden w-full md:flex justify-between">
        <ServeSteps
          src={map1}
          head="Tell us where you are"
          desc="Select the location you want us to deliver."
        />

        <ServeSteps
          src={Fast}
          head="Tell us what you want"
          desc="Browse the type of food that interest you."
        />

        <ServeSteps
          src={scooter}
          head="We'll come running"
          desc="Your order will be delivered to you in no time."
        />

      </div>
      <div className="mt-[30px] border-b-4 border-white w-full"></div>
    </div>
  );
}
