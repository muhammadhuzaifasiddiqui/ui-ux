"use client";
import Image from "next/image";
import React, { useState } from "react";
// import Link from "next/link";
// import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="testimonial-section w-full overflow-hidden px-20">
        <Swiper
          spaceBetween={10}          
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          breakpoints={{
            1024: { slidesPerView: 3, centeredSlides: true },
            768: { slidesPerView: 2, centeredSlides: true },
            555: { slidesPerView: 1, centeredSlides: true },
          }}
        >
          <SwiperSlide>
            <div>
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
                  <p className="line-clamp-4 testimonial-text">
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px] testimonial-text">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
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
                  <p className="line-clamp-4 testimonial-text">
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px] testimonial-text">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
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
                  <p className="line-clamp-4 testimonial-text">
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px] testimonial-text">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
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
                  <p className="line-clamp-4 testimonial-text">
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px] testimonial-text">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
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
                  <p className="line-clamp-4 testimonial-text">
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px] testimonial-text">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
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
                  <p className="line-clamp-4 testimonial-text">
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px] testimonial-text">Sukarya Masiony</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
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
                  <p className="line-clamp-4 testimonial-text">
                    Product designer transformed our vision into reality with
                    precision and creativity. Highly recommend for top-notch
                    designs! Product designer transformed our vision into
                    reality with precision and creativity. Highly recommend for
                    into reality with precision and creativity. Highly recommend
                    for top-notch designs!
                  </p>
                </div>
                <div>
                  <p className="text-[#79899B] text-[15px] testimonial-text">Sukarya Masiony</p>
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
            background-color: #0085ff; /* Burgundy / Primary Color */
            width: 40px !important;
          }
        `}</style>
      </div>
    </>
  );
};

export default Testimonial;