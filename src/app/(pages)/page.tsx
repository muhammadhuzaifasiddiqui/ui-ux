"use client";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Testimonial from "../components/layout/Testimonial";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Tags from "../components/Tags";
import Bullets from "../components/Bullets";

// Define the interface for a card item
interface CardItem {
  id: number;
  text: string;
  color: string;
  size: string;
  rotation?: string;
  translateX?: string;
  border?: string;
}

const initialCards: CardItem[] = [
  {
    id: 1,
    text: "USER EXPERIENCE",
    color: "bg-blue-600" + " text-[#F6FAFF]",
    size: "text-2xl",
    rotation: "rotate-2",
    translateX: "-translate-x-4",
  },
  {
    id: 2,
    text: "MOBILE",
    color: "bg-white",
    size: "text-xl",
    rotation: "-rotate-1",
    translateX: "translate-x-8",
  },
  {
    id: 3,
    text: "IDEAS",
    color: "bg-white",
    size: "text-lg",
  },
  {
    id: 4,
    text: "BRAND DESIGN",
    color: "bg-white",
    size: "text-xl",
  },
  {
    id: 5,
    text: "AGENCY WEBSITE",
    color: "bg-white",
    size: "text-2xl",
    rotation: "rotate-3",
  },
  {
    id: 6,
    text: "WIREFRAMING",
    color: "bg-white",
    size: "text-xl",
  },
  {
    id: 7,
    text: "STARTUP",
    color: "bg-white",
    size: "text-xl",
  },
  {
    id: 8,
    text: "PROTOTYPING",
    color: "bg-[#4A26FF]" + " text-[#F6FAFF]",
    size: "text-3xl",
    rotation: "rotate-3",
  },
  {
    id: 9,
    text: "CREATIVITY",
    color: "bg-white",
    size: "text-xl",
    translateX: "translate-x-4",
  },
  {
    id: 10,
    text: "WEB APP",
    color: "bg-white",
    size: "text-xl",
  },
  {
    id: 11,
    text: "VISUAL DESIGN",
    color: "bg-white",
    size: "text-lg",
    translateX: "-translate-x-4",
  },
  {
    id: 12,
    text: "WEB DESIGN",
    color: "bg-[#F0F7FF]",
    size: "text-3xl",
    rotation: "-rotate-2",
  },
  {
    id: 13,
    text: "USER INTERFACE",
    color: "bg-white",
    size: "text-xl",
  },
  // {
  //   id: 14,
  //   text: "AUTOMATION",
  //   color: "bg-white",
  //   size: "text-xl",
  // },
  // {
  //   id: 15,
  //   text: "3D-ANIMATION",
  //   color: "bg-white",
  //   size: "text-xl",
  // },
  // {
  //   id: 16,
  //   text: "VR-BOX",
  //   color: "bg-white",
  //   size: "text-xl",
  // },
  // Add more cards as needed
];

// Define animation variants for the cards
const cardVariants = {
  // The state of the card before it's animated
  initial: {
    opacity: 0,
    y: -200, // Start high up, as if falling from above
    scale: 0.5,
  },
  // The state of the card after the animation
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const Page = () => {
  const [cards] = useState<CardItem[]>(initialCards);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Detect when the container is 50% in view

  return (
    <>
      <Navbar />

      <section className="hero-section top-[60px] border-radius-20 shadow-primary mb-2.5">
        <div className="container mx-auto hero-wrapper">
          <div className="flex flex-col">
            <div className="flex flex-col-reverse sm:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-stretch sm:items-center mb-3 xl:mb-4">
              <div className="ml-0!">
                <p className="text-gray font-normal">
                  Hi.... <br /> My name is{" "}
                  <span className="font-bold">Nanolix Digital</span>
                </p>
                <h1 className="font-bold text-gray leading-[100%] mt-3 mb-6.5">
                  UI/UX
                </h1>
              </div>

              <div className="flex gap-22.5 pl-6.5 ml-auto sm:ml-0">
                <div className="img-wrapper relative">
                  <Image
                    src={"/img/laptop.png"}
                    width={319}
                    height={316}
                    alt="Laptop"
                    unoptimized={true}
                    className="absolute top-auto! bottom-0!"
                  />
                </div>
                {/* <div className="lg:hidden flex items-end">
                    <Link
                      href="#"
                      className="text-[14px]! btn btn-md btn-gray btn-border-left"
                    >
                      Innovation
                    </Link>
                  </div> */}
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-12 justify-between items-center">
              {/* <div className="pl-9.5">
                    <Link
                      href="#"
                      className="text-[14px]! btn btn-md btn-gray btn-border-right"
                    >
                      Design
                    </Link>
                  </div> */}
              <div className="w-full lg:w-[35%]">
                <p>
                  Simplifying complex ideas into clear and engaging interfaces,
                  ensuring that every interaction is intuitive, efficient, and
                  visually pleasing.
                </p>
              </div>

              <div className="relative">
                <div className="p-2.5 designer-text-box -rotate-2 opacity-100">
                  <Image
                    src={"/img/Rectangle 1.png"}
                    width={18}
                    height={18}
                    alt="Rectangle"
                    unoptimized={true}
                    className="absolute -left-[18px] -top-[18px]"
                  />
                  <Image
                    src={"/img/Rectangle 2.png"}
                    width={18}
                    height={18}
                    alt="Rectangle"
                    unoptimized={true}
                    className="absolute -right-[18px] -top-[18px]"
                  />
                  <Image
                    src={"/img/Rectangle 3.png"}
                    width={18}
                    height={18}
                    alt="Rectangle"
                    unoptimized={true}
                    className="absolute -bottom-[18px] -right-[18px]"
                  />
                  <Image
                    src={"/img/Rectangle 4.png"}
                    width={18}
                    height={18}
                    alt="Rectangle"
                    unoptimized={true}
                    className="absolute -bottom-[18px] -left-[18px]"
                  />
                  <h1 className="uppercase text-blue font-bold leading-[106%]">
                    Designer
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 justify-between mt-9 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-18">
              <div className="w-full lg:w-[35%]">
                <div className="shadow-down border-radius-30 bg-white">
                  <div className="charges-box shadow-primary flex gap-2 justify-between items-center border-radius-30 bg-dark-gray">
                    <div>
                      <p className="text-center">
                        35$
                        <span className="text-[46.341px]">/</span>
                        <span className="text-[25.951px] font-semibold">
                          hr
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link
                        href="#"
                        className="fs-14 btn btn-sm btn-white text-center w-fit"
                      >
                        Wireframes
                      </Link>
                      <Link
                        href="#"
                        className="fs-14 btn btn-sm btn-white text-center w-fit"
                      >
                        Insights
                      </Link>
                      <Link
                        href="#"
                        className="fs-14 btn btn-sm btn-white text-center w-fit"
                      >
                        Testimonials
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pl-7.5 pt-6.5 pb-6.5">
                    <Link href="#" className="btn btn-primary">
                      Get in touch
                    </Link>
                    <Link href="#" className="btn btn-offWhite">
                      Show my work
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[60%]">
                <div className="flex flex-col md:flex-row items-center sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
                  <div className="flex flex-row cursor-pointer portfolio-box border-radius-30 bg-light-gray gap-2.5">
                    <div className="flex flex-col">
                      <div className="portfolio-image-wraper">
                        <Image
                          src={"/img/portfolio 1.png"}
                          width={158}
                          height={177}
                          alt="Laptop"
                          unoptimized={true}
                          className="object-contain"
                        />
                      </div>
                      <p className="fs-14 pt-[33px] font-normal max-w-[120px] whitespace-normal">
                        Best Project on the years
                      </p>
                    </div>
                    <div className="portfolio-image-wraper">
                      <Image
                        src={"/img/portfolio 2.png"}
                        width={100}
                        height={100}
                        alt="Laptop"
                        unoptimized={true}
                        className="h-full!"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-end items-center gap-2">
                        <p className="underline fs-14 font-normal">View all</p>
                        <div className="portfolio-image-wraper">
                          <Image
                            src={"/img/arrow.png"}
                            width={100}
                            height={100}
                            alt="Laptop"
                            unoptimized={true}
                            className="h-full"
                          />
                        </div>
                      </div>
                      <div className="mt-9">
                        <Image
                          src={"/img/portfolio 3.png"}
                          width={100}
                          height={100}
                          alt="Laptop"
                          unoptimized={true}
                          className="object-contain "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col gap-5 lg:gap-7">
                    <div className="flex flex-col-reverse md:flex-row items-center gap-1 md:gap-3">
                      <div>
                        <p className="fs-14 font-normal capitalize text-gray">
                          Success project
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-[36px] text-primary">
                          250<span className="text-blue">+</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                      <div>
                        <p className="font-medium text-[36px] text-primary">
                          160<span className="text-blue">+</span>
                        </p>
                      </div>
                      <div>
                        <p className="fs-14 font-normal capitalize text-gray">
                          Recent clients
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row items-center gap-1 md:gap-3">
                      <div>
                        <p className="fs-14 font-normal capitalize text-gray">
                          Happy Clients
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-[36px] text-primary">
                          95<span className="text-blue">%</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-wrapper">
          <div className="flex flex-col xl:flex-row gap-2.5">
            <div className="shadow-primary services-collection-box border-radius-20 w-full xl:w-1/2">
              <div className="flex w-full justify-between">
                <div className="w-[30%] overflow-hidden">
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    loop={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                    }}
                    speed={7000}
                    modules={[Autoplay]}
                    className="rotate-[-20.46deg] w-[125%] top-[10px]"
                  >
                    <SwiperSlide>
                      <span className="leading-[100%] fs-138 font-normal font-anton font-anton-slide">
                        UI/UX
                      </span>
                    </SwiperSlide>
                    <SwiperSlide>
                      <span className="leading-[100%] fs-138 font-normal font-anton font-anton-slide">
                        UI/UX
                      </span>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="w-[60%] pt-4 sm:pt-5 md:pt-6 lg:pt-7.5 pr-4 sm:pr-5 md:pr-6 lg:pr-7.5">
                  <div className="flex flex-col items-end">
                    <div className="">
                      <Bullets bulletname="Service" className="bullet" />
                    </div>
                    <h2 className="font-montreal text-black font-light text-right mt-2.5 leading-[106%]">
                      EXPLORE MY <br />
                      <span className="font-medium text-primary">SERVICES</span>
                    </h2>
                  </div>
                </div>
              </div>

              <div ref={ref} className="w-full mt-23 overflow-hidden">
                <div className="flex flex-wrap items-center justify-evenly gap-1">
                  {cards.map((card, index) => (
                    <motion.div
                      key={card.id}
                      variants={cardVariants}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"} // Animate only when the section is in view
                      transition={{
                        type: "spring", // Use a spring transition for a bouncing effect
                        damping: 10,
                        stiffness: 100,
                        delay: index * 0.05, // Stagger the animation of each card
                      }}
                      className={`
              inline-block
              btn-xxl
              service-bullets-border
              border-radius-50 
              cursor-pointer
              transition-all
              duration-100
              hover:scale-103
              whitespace-nowrap
              ${card.color}
              ${card.size}
              ${card.rotation || ""}
              ${card.translateX || ""}
              ${card.color === "bg-white" ? "text-gray-800" : "text-[#3C3C3C]"}
            `}
                      style={{
                        transform: `${card.rotation ? card.rotation : ""} ${
                          card.translateX ? card.translateX : ""
                        }`,
                      }}
                    >
                      {card.text}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full xl:w-1/2 items-stretch gap-2 h-full ">
              <div className="group">
                <div className="service-card cursor-pointer shadow-primary flex flex-col  group-hover:bg-[#0085FF]! transition-all duration-400 border-radius-20 ">
                  <div className="flex items-center justify-between">
                    <h3 className="font-montreal group-hover:text-white! transition-all duration-400 font-normal leading-[110%] uppercase">
                      User Research & Analysis
                    </h3>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <path
                          d="M48.5219 41.3622L48.5219 23.4783L30.638 23.4783"
                          className="group-hover:stroke-white! transition-all duration-400"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.4786 48.5217L48.2715 23.7288"
                          className="group-hover:stroke-white! transition-all duration-400"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-full sm:w-[85%] md:w-[75%] lg:w-[65%] ml-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                    <p className="text-right fs-16 group-hover:text-white! transition-all duration-400">
                      Conducting research to understand user needs, behaviors,
                      and pain points for informed design decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="service-card cursor-pointer shadow-primary flex flex-col  group-hover:bg-[#0085FF]! transition-all duration-400 border-radius-20 ">
                  <div className="flex items-center justify-between">
                    <h3 className="font-montreal group-hover:text-white! transition-all duration-400 font-normal leading-[110%] uppercase">
                      User Research & Analysis
                    </h3>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <path
                          d="M48.5219 41.3622L48.5219 23.4783L30.638 23.4783"
                          className="group-hover:stroke-white! transition-all duration-400"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.4786 48.5217L48.2715 23.7288"
                          className="group-hover:stroke-white! transition-all duration-400"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-full sm:w-[85%] md:w-[75%] lg:w-[65%] ml-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                    <p className="text-right fs-16 group-hover:text-white! transition-all duration-400">
                      Conducting research to understand user needs, behaviors,
                      and pain points for informed design decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="service-card cursor-pointer shadow-primary flex flex-col  group-hover:bg-[#0085FF]! transition-all duration-400 border-radius-20 ">
                  <div className="flex items-center justify-between">
                    <h3 className="font-montreal group-hover:text-white! transition-all duration-400 font-normal leading-[110%] uppercase">
                      User Research & Analysis
                    </h3>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <path
                          d="M48.5219 41.3622L48.5219 23.4783L30.638 23.4783"
                          className="group-hover:stroke-white! transition-all duration-400"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.4786 48.5217L48.2715 23.7288"
                          className="group-hover:stroke-white! transition-all duration-400"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-full sm:w-[85%] md:w-[75%] lg:w-[65%] ml-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                    <p className="text-right fs-16 group-hover:text-white! transition-all duration-400">
                      Conducting research to understand user needs, behaviors,
                      and pain points for informed design decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-wrapper relative border-radius-20 overflow-hidden shadow-primary pt-7.5 pb-7.5 sm:pb-10 md:pb-14 lg:pb-18 xl:pb-22.5">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-full justify-between">
              <div className="flex flex-col w-full lg:w-1/2">
                <div className="opacity-130">
                  <Bullets bulletname="About Me" className="bullet" />
                  <h2 className="font-light font-montreal uppercase text-white leading-[106%]">
                    Meet the Mind
                    <br />
                    <span className="text-pink font-medium">
                      Behind the Work
                    </span>
                  </h2>
                </div>
                <div className="w-full xl:w-[700px] lg:w-[550px] lg:absolute bottom-0 flex justify-center">
                  <Image
                    src={"/img/Profile Pic Taha.png"}
                    width={600}
                    height={600}
                    alt="Profile Pic"
                    unoptimized={true}
                    className=""
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <div className="flex justify-start lg:justify-end mt-5 lg:mt-0">
                  <Image
                    src={"/img/figma-icon.png"}
                    width={61}
                    height={61}
                    alt="Figma"
                    unoptimized={true}
                    className="object-contain figma-icon p-3"
                  />
                </div>
                <div className="flex lg:ml-auto mt-10 lg:mt-15.5 mb-6.5 sm:mb-8 md:mb-10 lg:mb-15 xl:mb-30">
                  <p className="text-justify line-clamp-3 lg:text-right fs-20 text-[#B2B2B2] capitalize">
                    Hi, I’m
                    <span className="font-bold  text-white">
                      {" "}
                      Taha Khanzada,{" "}
                    </span>
                    a designer who thrives on transforming ideas into engaging
                    designs. From wireframes to polished visuals, I focus on
                    blending functionality with aesthetics to deliver
                    exceptional results.
                  </p>
                </div>
                <div className="flex project-counter gap-7.5">
                  <div>
                    <h2 className="flex items-center text-white font-normal leading-[100%]">
                      250<span className="text-blue">+</span>
                    </h2>
                    <p className="fs-20 text-[#B2B2B2]">Success Project</p>
                  </div>
                  <div>
                    <h2 className="flex items-center text-white font-normal leading-[100%]">
                      160<span className="text-blue">+</span>
                    </h2>
                    <p className="fs-20 text-[#B2B2B2]">Recent Clients</p>
                  </div>
                  <div>
                    <h2 className="flex items-center text-white font-normal leading-[100%]">
                      99<span className="text-blue">%</span>
                    </h2>
                    <p className="fs-20 text-[#B2B2B2]">Happy Clients</p>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 md:mt-8 lg:mt-10 xl:mt-12.5 gap-2.5">
                  <Tags tagname="Design" className="about-tags" />
                  <Tags tagname="User Experience" className="about-tags" />
                  <Tags tagname="Insights" className="about-tags" />
                  <Tags tagname="Prototypes" className="about-tags" />
                  <Tags tagname="Intuitive Interfaces" className="about-tags" />
                  <Tags tagname="High-Fidelity Design" className="about-tags" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-section">
        <div className="workflow-wrapper py-5 mb-2.5 bg-white shadow-primary border-radius-20">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <div className="flex w-full justify-between">
                <div className="flex items-start">
                  <Image
                    src={"/img/gesture.png"}
                    width={111}
                    height={111}
                    alt="Laptop"
                    unoptimized={true}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-end">
                  <Bullets bulletname="How I Work" className="bullet" />
                  <div className="">
                    <h2 className="font-light text-right uppercase leading-[100%]">
                      My Excellent <br />
                      <span className="font-medium font-montreal text-primary">
                        Approach
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex w-full fs-20 lg:w-[65%] mt-6 text-justify lg:text-start">
                <p>
                  I take a user-focused approach, starting with research to
                  understand needs and goals. Through collaboration, wireframes,
                  and refined designs, I create impactful, functional, and
                  visually engaging solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center relative gap-2.5 mb-2.5">
          <div className="flex-1 w-full lg:w-[33.33%] card border-radius-20 shadow-primary">
            <div className="flex flex-col items-center">
              <Image
                src={"/img/Rectangle.png"}
                width={288}
                height={345}
                alt="Laptop"
                unoptimized={true}
                className=""
              />
              <h3 className="mb-2.5 font-montreal uppercase leading-[100%] font-normal text-black">
                Custom, User-Centered Designs
              </h3>
              <p className="line-clamp-2 capitalize fs-16">
                I create tailored designs that resonate with your audience and
                meet their needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[33.33%] justify-between items-stretch">
            <div className="flex w-full justify-between items-center gap-2.5 bg-white pt-8 pb-8 pl-5 border-radius-20 shadow-primary">
              <div className="flex flex-col items-start w-[50%] gap-3">
                <h3 className="font-montreal uppercase leading-[100%] font-normal text-black">
                  Transparent Process
                </h3>
                <p className="line-clamp-4 capitalize fs-16">
                  No surprises—just high-quality work delivered on time. just
                  high-quality work delivered on time.
                </p>
              </div>
              <div className="">
                <Image
                  src={"/img/Rectangle (1).png"}
                  width={236}
                  height={264}
                  alt="Laptop"
                  unoptimized={true}
                  className="rounded-[20px]"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between mt-2 w-full gap-2.5 bg-white pr-5 pt-8 pb-8 border-radius-20 shadow-primary">
              <div className="">
                <Image
                  src={"/img/Rectangle (2).png"}
                  width={236}
                  height={264}
                  alt="Laptop"
                  unoptimized={true}
                  className="rounded-[20px]"
                />
              </div>
              <div className="flex flex-col w-[50%] gap-3">
                <h3 className="font-montreal text-right uppercase leading-[100%] font-normal text-black">
                  Proven Results
                </h3>
                <p className="line-clamp-4 capitalize text-right fs-16">
                  Trusted by over{" "}
                  <span className="fs-18 font-semibold text-black">160+</span>,
                  just high-quality work delivered on time. just high-quality
                  work delivered on time.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-[33.33%] card border-radius-20 shadow-primary">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={"/img/Rectangle (3).png"}
                width={288}
                height={345}
                alt="Laptop"
                unoptimized={true}
                className=""
              />
              <div>
                <h3 className="mb-2.5 text-right font-montreal uppercase leading-[100%] font-normal text-black">
                  Affordable Packages
                </h3>
                <p className="line-clamp-2 text-right capitalize fs-16">
                  Offering flexible design solutions starting at just $300 to
                  fit your budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-wrapper shadow-primary border-radius-20">
          <div className="container mx-auto">
            <div className="flex w-full justify-center">
              <div className="flex flex-col w-[100%] lg:w-[70%] items-center mb-6 lg:mb-7.5">
                <Bullets bulletname="My Portfolio" className="bullet" />
                <h2 className="font-light font-montreal text-center uppercase leading-[100%]">
                  Designs That{"  "}
                  <br />
                  <span className="text-primary font-medium font-montreal text-center uppercase leading-[100%]">
                    Solve Problems
                  </span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col gap-2.5">
                <div className="portfolio-card border-radius-20 shadow-primary"></div>
                <div className="flex flex-col gap-6 portfolio-card-footer cursor-pointer border-radius-20 shadow-primary">
                  <div className="flex flex-wrap gap-1">
                    <Tags tagname="Figma" className="portfolio-categories" />
                    <Tags tagname="Webflow" className="portfolio-categories" />
                    <Tags tagname="Wizard" className="portfolio-categories" />
                    <Tags tagname="Weglot" className="portfolio-categories" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1.5">
                      <p className="fs-14 text-gray">Bulit to Launch</p>
                      <p className="fs-16 font-bold">6 Weeks</p>
                    </div>
                    <div className="flex gap-1.5">
                      <p className="fs-14 text-gray">Visit Website</p>
                      <div>
                        <Image
                          src={"/img/Frame.png"}
                          width={17}
                          height={17}
                          alt="right arrow"
                          unoptimized={true}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="portfolio-card border-radius-20 shadow-primary"></div>
                <div className="flex flex-col gap-6 portfolio-card-footer cursor-pointer border-radius-20 shadow-primary">
                  <div className="flex flex-wrap gap-1">
                    <Tags tagname="Figma" className="portfolio-categories" />
                    <Tags tagname="Webflow" className="portfolio-categories" />
                    <Tags tagname="Wizard" className="portfolio-categories" />
                    <Tags tagname="Weglot" className="portfolio-categories" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1.5">
                      <p className="fs-14 text-gray">Bulit to Launch</p>
                      <p className="fs-16 font-bold">6 Weeks</p>
                    </div>
                    <div className="flex gap-1.5">
                      <p className="fs-14 text-gray">Visit Website</p>
                      <div>
                        <Image
                          src={"/img/Frame.png"}
                          width={17}
                          height={17}
                          alt="right arrow"
                          unoptimized={true}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="portfolio-card border-radius-20 shadow-primary"></div>
                <div className="flex flex-col gap-6 portfolio-card-footer cursor-pointer border-radius-20 shadow-primary">
                  <div className="flex flex-wrap gap-1">
                    <Tags tagname="Figma" className="portfolio-categories" />
                    <Tags tagname="Webflow" className="portfolio-categories" />
                    <Tags tagname="Wizard" className="portfolio-categories" />
                    <Tags tagname="Weglot" className="portfolio-categories" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1.5">
                      <p className="fs-14 text-gray">Bulit to Launch</p>
                      <p className="fs-16 font-bold">6 Weeks</p>
                    </div>
                    <div className="flex gap-1.5">
                      <p className="fs-14 text-gray">Visit Website</p>
                      <div>
                        <Image
                          src={"/img/Frame.png"}
                          width={17}
                          height={17}
                          alt="right arrow"
                          unoptimized={true}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center mt-7.5">
              <Link href="#" className="fs-14 btn btn-xl btn-primary">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="idea-section mt-2.5 mb-2.5">
        <div className="idea-wrapper border-radius-20 shadow-primary">
          <div className="container mx-auto">
            <div className="flex flex-col gap-20 sm:gap-32 md:gap-40 lg:gap-48 xl:gap-64">
              <div className="flex items-start w-[75%]">
                <h2 className="font-light font-montreal text-white uppercase leading-[100%]">
                  Ready to Create Your{"  "}
                  <br />
                  <span className="text-pink font-medium font-montreal uppercase leading-[100%]">
                    Amazing Ideas
                  </span>
                </h2>
              </div>
              <div className="flex flex-col w-[75%] ml-auto items-end">
                <p className="mb-6 text-right text-white capitalize">
                  I’m always excited to discuss new opportunities and
                  collaborations. Feel free to reach out.
                </p>
                <Link href="#" className="fs-12 btn btn-pink">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section mb-2.5">
        <div className="pricing-wrapper shadow-primary border-radius-20">
          <div className="container mx-auto">
            <div className="flex w-full justify-center">
              <div className="flex flex-col w-[100%] lg:w-[70%] items-center mb-6 lg:mb-7.5">
                <Bullets bulletname="Pricing" className="bullet" />
                <h2 className="font-light font-montreal text-center uppercase leading-[100%]">
                  Concise and{"  "}
                  <br />
                  <span className="text-primary font-medium font-montreal text-center uppercase leading-[100%]">
                    Authoritative
                  </span>
                </h2>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row price-card items-center justify-center gap-5">
              <div className="w-full lg:w-[33.33%] cursor-pointer card border-radius-20 group hover:bg-[#DFE2FF]!">
                <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-9">
                  <div className="flex flex-col gap-4">
                    <p className="text-[23px] text-dark">Starter Package</p>
                    <p className="fs-48 text-dark leading-[100%]">$300</p>
                  </div>
                  <div className="flex flex-col price-card-bullet gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 pt-7.5 pb-7.5">
                    <div className="flex items-center gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">Up to 5 Sections</p>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">Responsive Design</p>
                    </div>
                    <div className="flex items-center opacity-60 gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">Basic Interaction Design</p>
                    </div>
                    <div className="flex items-center opacity-60 gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">1 Round of Revision</p>
                    </div>
                  </div>
                  <div className="flex flex-col text-center">
                    <Link
                      href="#"
                      className="btn btn-xl btn-lightGray group-hover:bg-[#4A26FF] group-hover:text-[#FFF]! fs-14 font-semibold"
                    >
                      Select Plan
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[33.33%] cursor-pointer card active bg-[#DFE2FF]! border-radius-20">
                <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-9">
                  <div className="flex flex-col gap-4">
                    <p className="text-[23px] text-dark">Basic Plan</p>
                    <p className="fs-48 text-dark leading-[100%]">$490</p>
                  </div>
                  <div className="flex flex-col price-card-bullet gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 pt-7.5 pb-7.5">
                    <div className="flex items-center gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">Up to 7 Sections</p>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">Interactive Elements</p>
                    </div>
                    <div className="flex items-center opacity-60 gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">Clickable Prototypes</p>
                    </div>
                    <div className="flex items-center opacity-60 gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">2 Rounds of Revisions</p>
                    </div>
                  </div>
                  <div className="flex flex-col text-center">
                    <Link
                      href="#"
                      className="btn btn-xl fs-14 bg-[#4A26FF] text-[#FFF]! font-semibold"
                    >
                      Select Plan
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[33.33%] cursor-pointer card border-radius-20 group hover:bg-[#DFE2FF]!">
                <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-9">
                  <div className="flex flex-col gap-4">
                    <p className="text-[23px] text-dark">Premium Package</p>
                    <p className="fs-48 text-dark leading-[100%]">$600</p>
                  </div>
                  <div className="flex flex-col price-card-bullet gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 pt-7.5 pb-7.5">
                    <div className="flex items-center gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">Up to 10 Sections</p>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">Multiple Expansion</p>
                    </div>
                    <div className="flex items-center opacity-60 gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">Developer-Ready Files</p>
                    </div>
                    <div className="flex items-center opacity-60 gap-3.5">
                      <Image
                        src={"/img/check_small.png"}
                        width={30}
                        height={30}
                        alt="title-dot"
                        unoptimized={true}
                        className="object-contain"
                      />
                      <p className="fs-20">3 Round of Revision</p>
                    </div>
                  </div>
                  <div className="flex flex-col text-center">
                    <Link
                      href="#"
                      className="btn btn-xl btn-lightGray group-hover:bg-[#4A26FF] group-hover:text-[#FFF]! fs-14 font-semibold"
                    >
                      Select Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section mb-2.5">
        <div className="testimonial-wrapper shadow-primary flex flex-col items-center border-radius-20">
          <div className="flex w-full justify-center">
            <div className="flex flex-col w-[100%] lg:w-[70%] items-center mb-6 lg:mb-7.5">
              <Bullets bulletname="Testimonials" className="bullet" />
              <h2 className="font-light font-montreal text-center uppercase leading-[100%]">
                Some words from{"  "}
                <br />
                <span className="text-primary font-medium font-montreal text-center uppercase leading-[100%]">
                  my clients
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <footer className="pt-2.5">
        <div className="footer-wrapper shadow-primary border-radius-20">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <div className="text-right w-[70%] ml-auto">
                <h3 className="text-black cursor-pointer uppercase font-normal leading-[100%]">
                  Transform Your Ideas into Extraordinary Designs.
                </h3>
              </div>
              <div className="mt-[100px] w-[70%]">
                <h1 className="text-black font-medium font-montreal cursor-pointer uppercase leading-[85%]">
                  Reach Out now
                </h1>
              </div>
              <div className="mt-[50px]">
                <ul className="flex justify-center gap-6 lg:gap-15">
                  <li>
                    <Link href="#" className="fs-16 font-poppins font-bold">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="fs-16 font-poppins font-normal">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="fs-16 font-poppins font-normal">
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="fs-16 font-poppins font-normal">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="fs-16 font-poppins font-normal">
                      Assets
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <section className="hero-section px-20">
        <div className="hero-wrapper shadow border-radius-20">
          <div className="container mx-auto">
            <div className="flex justify-between">
              <div className="w-[35%]">
                <p className="text-gray font-normal">
                  Hi.... <br /> My name is{" "}
                  <span className="font-bold">Taha Khanzada</span>
                </p>
                <h1 className="font-bold text-gray leading-[100%] mt-3 mb-6.5">
                  UI/UX
                </h1>
                <div className="pl-9">
                  <Link
                    href="#"
                    className="text-[14px]! btn btn-md btn-gray btn-border-right"
                  >
                    {" "}
                    Design
                  </Link>
                </div>
                <p className="mt-8 mb-15">
                  Simplifying complex ideas into clear and engaging interfaces,
                  ensuring that every interaction is intuitive, efficient, and
                  visually pleasing.
                </p>
                <div className="shadow-down border-radius-30 bg-white">
                  <div className="charges-box shadow-primary flex justify-between items-center border-radius-30 bg-dark-gray">
                    <div className="w-[55%]">
                      <p>
                        35$
                        <span className="text-[46.341px]">/</span>
                        <span className="text-[25.951px] font-semibold">
                          hr
                        </span>
                      </p>
                    </div>
                    <div className="w-[45%] flex flex-col gap-3">
                      <Link
                        href="#"
                        className="text-[14px]! btn btn-sm btn-white text-center w-fit lg:w-full"
                      >
                        Wireframes
                      </Link>
                      <Link
                        href="#"
                        className="text-[14px]! btn btn-sm btn-white text-center w-fit lg:w-full"
                      >
                        Insights
                      </Link>
                      <Link
                        href="#"
                        className="text-[14px]! btn btn-sm btn-white text-center w-fit lg:w-full"
                      >
                        Testimonials
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 pt-6.5 pb-6.5">
                    <Link href="#" className="text-[14px]! btn btn-primary">
                      Get in touch
                    </Link>
                    <Link
                      href="#"
                      className="text-[14px]! btn btn-xl btn-offWhite"
                    >
                      Show my work
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[60%]">
                <div className="flex flex-col gap-10">
                  <div className="flex items-end gap-22.5 pb pl-6">
                    <div className="bg-laptop">
                      <div className="img-wrapper">
                        <Image
                          src={"/img/laptop.png"}
                          width={319}
                          height={316}
                          alt="Laptop"
                          unoptimized={true}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="text-[14px]! btn btn-md btn-gray btn-border-left"
                      >
                        {" "}
                        Innovation
                      </Link>
                    </div>
                  </div>
                  <div className="relative pt-11 pb-9  pl-[123px]">
                    <Image
                      src={"/img/Rectangle 2.png"}
                      width={652}
                      height={153}
                      alt="Laptop"
                      unoptimized={true}
                      className="object-contain"
                    />
                    <h1 className="font-bold text-blue rotate-[-3deg] absolute top-12 left-38">
                      DESIGNER
                    </h1>
                    <Image
                      src={"/img/Rectangle 3.png"}
                      width={18}
                      height={18}
                      alt="Laptop"
                      unoptimized={true}
                      className="object-contain absolute top-[62px] left-[105px]"
                    />
                    <Image
                      src={"/img/Rectangle 4.png"}
                      width={18}
                      height={18}
                      alt="Laptop"
                      unoptimized={true}
                      className="object-contain absolute top-[196px] left-[782px]"
                    />
                    <Image
                      src={"/img/Rectangle 5.png"}
                      width={18}
                      height={18}
                      alt="Laptop"
                      unoptimized={true}
                      className="object-contain absolute top-[230px] left-[113px]"
                    />
                    <Image
                      src={"/img/Rectangle 6.png"}
                      width={18}
                      height={18}
                      alt="Laptop"
                      unoptimized={true}
                      className="object-contain absolute top-[26px] left-[774px]"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-row cursor-pointer portfolio-box border-radius-30 bg-light-gray gap-2.5">
                      <div className="flex flex-col">
                        <div className="portfolio-image-wraper">
                          <Image
                            src={"/img/portfolio 1.png"}
                            width={158}
                            height={177}
                            alt="Laptop"
                            unoptimized={true}
                            className="object-contain"
                          />
                        </div>
                        <p className="fs-16 pt-[33px] font-normal max-w-[120px] whitespace-normal">
                          Best Project on the years
                        </p>
                      </div>
                      <div className="portfolio-image-wraper">
                        <Image
                          src={"/img/portfolio 2.png"}
                          width={100}
                          height={100}
                          alt="Laptop"
                          unoptimized={true}
                          className="object-contain "
                        />
                      </div>
                      <div className="flex flex-col justify-end">
                        <div className="flex pl-15 items-center gap-2">
                          <p className="underline fs-16 font-normal">
                            View all
                          </p>
                          <div className="portfolio-image-wraper">
                            <Image
                              src={"/img/arrow.png"}
                              width={100}
                              height={100}
                              alt="Laptop"
                              unoptimized={true}
                              className="object-contain "
                            />
                          </div>
                        </div>
                        <div className="mt-9">
                          <Image
                            src={"/img/portfolio 3.png"}
                            width={100}
                            height={100}
                            alt="Laptop"
                            unoptimized={true}
                            className="object-contain "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-5">
                        <p className="fs-20 font-normal capitalize text-gray">
                          Success project
                        </p>
                        <p className="font-medium text-[36px] text-primary">
                          250<span className="text-blue">+</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-5">
                        <p className="font-medium text-[36px] text-primary">
                          160<span className="text-blue">+</span>
                        </p>
                        <p className="fs-20 font-normal capitalize text-gray">
                          Recent clients
                        </p>
                      </div>
                      <div className="flex items-center gap-5">
                        <p className="fs-20 font-normal capitalize text-gray">
                          Happy Clients
                        </p>
                        <p className="font-medium text-[36px] text-primary">
                          95<span className="text-blue">%</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="about-section">
        <div className="about-wrapper border-radius-20 overflow-hidden shadow-primary pt-7.5 pb-7.5 sm:pb-10 md:pb-14 lg:pb-18 xl:pb-22.5">
          <div className="container mx-auto px-6.5">
            <div className="flex flex-row items-center w-full justify-between">
              <div className="opacity-130 w-[70%] lg:w-[50%]">
                <Bullets bulletname="About Me" className="bullet" />
                <h2 className="font-light font-montreal uppercase text-white leading-[106%]">
                  Meet the Mind
                  <br />
                  <span className="text-pink font-medium">Behind the Work</span>
                </h2>
              </div>
              <div className="figma-icon p-3">
                <Image
                  src={"/img/figma-icon.png"}
                  width={61}
                  height={61}
                  alt="Figma"
                  unoptimized={true}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[50%] relative">
                <Image
                  src={"/img/Profile Pic Taha.png"}
                  width={727}
                  height={727}
                  alt="title-dot"
                  unoptimized={true}
                  className="lg:absolute top-[20px] lg:top-[150px] xl:top-[70px] 2xl:top-[-55px]"
                />
              </div>
              <div className="w-full lg:w-[50%]">
                <p className="text-justify line-clamp-3 lg:text-right fs-20 text-[#B2B2B2] capitalize mt-4 mb-7.5 sm:mb-10 md:mb-14 lg:mb-15 xl:mb-30">
                  Hi, I’m
                  <span className="font-bold  text-white">
                    {" "}
                    Taha Khanzada,{" "}
                  </span>
                  a designer who thrives on transforming ideas into engaging
                  designs. From wireframes to polished visuals, I focus on
                  blending functionality with aesthetics to deliver exceptional
                  results.
                </p>
                <div className="flex gap-7.5">
                  <div>
                    <h2 className="flex items-center text-white font-normal leading-[100%]">
                      250<span className="text-blue">+</span>
                    </h2>
                    <p className="fs-20 text-[#B2B2B2]">Success Project</p>
                  </div>
                  <div>
                    <h2 className="flex items-center text-white font-normal leading-[100%]">
                      160<span className="text-blue">+</span>
                    </h2>
                    <p className="fs-20 text-[#B2B2B2]">Recent Clients</p>
                  </div>
                  <div>
                    <h2 className="flex items-center text-white font-normal leading-[100%]">
                      99<span className="text-blue">%</span>
                    </h2>
                    <p className="fs-20 text-[#B2B2B2]">Happy Clients</p>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 md:mt-8 lg:mt-10 xl:mt-12.5 gap-2.5">
                  <Tags tagname="Design" className="about-tags" />
                  <Tags tagname="User Experience" className="about-tags" />
                  <Tags tagname="Insights" className="about-tags" />
                  <Tags tagname="Prototypes" className="about-tags" />
                  <Tags tagname="Intuitive Interfaces" className="about-tags" />
                  <Tags tagname="High-Fidelity Design" className="about-tags" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Page;
