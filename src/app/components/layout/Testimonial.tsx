"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={false}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          
        </SwiperSlide>

        <SwiperSlide></SwiperSlide>

        <SwiperSlide></SwiperSlide>
      </Swiper>

      <div className="custom-pagination flex justify-center gap-3 mt-0 sm:mt-2"></div>

      <style jsx global>{`
        .custom-bullet {
        }

        .swiper-pagination-bullet-active.custom-bullet {
          background-color: #a21a41; /* Burgundy / Primary Color */
        }
      `}</style>
    </>
  );
};
export default Testimonial;
