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
      <div className="testimonial-section">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
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
            <div className="testimonial-card shadow-primary border-radius-20">
              <div className="flex flex-col gap-4">
                <div className="img-testimonial">
                  <Image
                    src={"/img/Sarah.png"}
                    width={50}
                    height={50}
                    alt="title-dot"
                    unoptimized={true}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p>
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px]">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card shadow-primary border-radius-20">
              <div className="flex flex-col gap-4">
                <div className="img-testimonial">
                  <Image
                    src={"/img/Sarah.png"}
                    width={50}
                    height={50}
                    alt="title-dot"
                    unoptimized={true}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p>
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px]">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card shadow-primary border-radius-20">
              <div className="flex flex-col gap-4">
                <div className="img-testimonial">
                  <Image
                    src={"/img/Sarah.png"}
                    width={50}
                    height={50}
                    alt="title-dot"
                    unoptimized={true}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p>
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px]">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card shadow-primary border-radius-20">
              <div className="flex flex-col gap-4">
                <div className="img-testimonial">
                  <Image
                    src={"/img/Sarah.png"}
                    width={50}
                    height={50}
                    alt="title-dot"
                    unoptimized={true}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p>
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px]">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card shadow-primary border-radius-20">
              <div className="flex flex-col gap-4">
                <div className="img-testimonial">
                  <Image
                    src={"/img/Sarah.png"}
                    width={50}
                    height={50}
                    alt="title-dot"
                    unoptimized={true}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p>
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px]">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card shadow-primary border-radius-20">
              <div className="flex flex-col gap-4">
                <div className="img-testimonial">
                  <Image
                    src={"/img/Sarah.png"}
                    width={50}
                    height={50}
                    alt="title-dot"
                    unoptimized={true}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p>
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px]">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>                              
        </Swiper>

        <div className="custom-pagination flex justify-center gap-3 mt-0 sm:mt-2"></div>

        <style jsx global>{`
          .custom-bullet {
          }

          .swiper-pagination-bullet-active.custom-bullet {
            background-color: #a21a41; /* Burgundy / Primary Color */
          }
        `}</style>
      </div>
    </>
  );
};

export default Testimonial;