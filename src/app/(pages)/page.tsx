"use client";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    text: "AGENCY WEBSITE",
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
    text: "WIREFRAMING",
    color: "bg-white",
    size: "text-2xl",
    rotation: "rotate-3",
  },
  {
    id: 6,
    text: "PROTOTYPING",
    color: "bg-[#4A26FF]" + " text-[#F6FAFF]",
    size: "text-3xl",
    rotation: "rotate-3",
  },
  {
    id: 7,
    text: "STARTUP",
    color: "bg-white",
    size: "text-xl",
  },
  {
    id: 8,
    text: "MOBILE",
    color: "bg-white",
    size: "text-xl",
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
      <section className="hero-section">
        <div className="hero-wrapper shadow-primary border-radius-20 bg-cover bg-center">
          <div className="w-full lg:container mx-auto ">
            <div className="flex flex-row justify-between px-80">
              <div className="w-[25%]">
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
                    className="btn btn-md btn-gray btn-border-right"
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
                    <div className="w-[60%]">
                      <p>
                        35$
                        <span className="text-[46.341px]">/</span>
                        <span className="text-[25.951px] font-semibold">
                          hr
                        </span>
                      </p>
                    </div>
                    <div className="w-[35%] flex flex-col gap-3">
                      <Link href="#" className="btn btn-sm btn-white w-fit">
                        Wireframes
                      </Link>
                      <Link href="#" className="btn btn-sm btn-white w-fit">
                        Insights
                      </Link>
                      <Link href="#" className="btn btn-sm btn-white w-fit">
                        Testimonials
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 pt-6 pb-6">
                    <Link href="#" className="btn btn-primary">
                      Get in touch
                    </Link>
                    <Link href="#" className="btn btn-xl btn-offWhite">
                      Show my work
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[65%] pt-[113px]">
                <div className="flex flex-row items-end gap-23 pb">
                  <div className="bg-laptop">
                    <div className="img-wrapper">
                      <Image
                        src={"/img/hero-laptop.png"}
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
                      className="btn btn-md btn-gray btn-border-left"
                    >
                      {" "}
                      Innovation
                    </Link>
                  </div>
                </div>
                <div className="relative pt-11 pb-9 pl-[75px]">
                  <Image
                    src={"/img/Rectangle 2.png"}
                    width={652}
                    height={153}
                    alt="Laptop"
                    unoptimized={true}
                    className="object-contain"
                  />
                  <h1 className="font-bold text-blue rotate-[-3deg] absolute top-12 left-26">
                    DESIGNER
                  </h1>
                  <Image
                    src={"/img/Rectangle 3.png"}
                    width={18}
                    height={18}
                    alt="Laptop"
                    unoptimized={true}
                    className="object-contain absolute top-[62px] left-[57px]"
                  />
                  <Image
                    src={"/img/Rectangle 4.png"}
                    width={18}
                    height={18}
                    alt="Laptop"
                    unoptimized={true}
                    className="object-contain absolute top-[196px] left-[734px]"
                  />
                  <Image
                    src={"/img/Rectangle 5.png"}
                    width={18}
                    height={18}
                    alt="Laptop"
                    unoptimized={true}
                    className="object-contain absolute top-[230px] left-[65px]"
                  />
                  <Image
                    src={"/img/Rectangle 6.png"}
                    width={18}
                    height={18}
                    alt="Laptop"
                    unoptimized={true}
                    className="object-contain absolute top-[26px] left-[726px]"
                  />
                </div>
                <div className="flex items-center gap-20">
                  <div className="portfolio-box border-radius-30 p-[17px] flex flex-row bg-light-gray gap-2.5">
                    <div className="flex-col">
                      <div>
                        <Image
                          src={"/img/portfolio 1.png"}
                          width={158}
                          height={177}
                          alt="Laptop"
                          unoptimized={true}
                          className="object-contain cursor-pointer"
                        />
                      </div>
                      <div className="pl-4 pt-[33px] leading-[70%]">
                        <p className="fs-14 font-normal cursor-pointer">
                          Best Project on <br /> the years
                        </p>
                      </div>
                    </div>
                    <div className="flex-col">
                      <Image
                        src={"/img/portfolio 2.png"}
                        width={100}
                        height={100}
                        alt="Laptop"
                        unoptimized={true}
                        className="object-contain cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col justify-end">
                      <div className="flex pl-10 items-center gap-2">
                        <p className="underline fs-14 cursor-pointer font-normal">
                          View all
                        </p>
                        <Image
                          src={"/img/arrow.png"}
                          width={100}
                          height={100}
                          alt="Laptop"
                          unoptimized={true}
                          className="object-contain cursor-pointer"
                        />
                      </div>
                      <div className="mt-9">
                        <Image
                          src={"/img/portfolio 3.png"}
                          width={100}
                          height={100}
                          alt="Laptop"
                          unoptimized={true}
                          className="object-contain cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-col gap-6">
                    <div className="flex items-center gap-5">
                      <p className="fs-14 font-medium text-gray">
                        Success <br />
                        project
                      </p>
                      <p className="font-medium text-[36px] text-primary">
                        250<span className="text-blue">+</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="font-medium text-[36px] text-primary">
                        160<span className="text-blue">+</span>
                      </p>
                      <p className="fs-14 font-normal text-gray">
                        Recent <br />
                        clients
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="fs-14 font-normal text-gray">
                        Happy
                        <br /> Clients
                      </p>
                      <p className="font-medium text-[36px] text-primary">
                        95<span className="text-blue">+</span>
                      </p>
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
          <div className="flex flex-row gap-2.5">
            <div className="flex-row shadow-primary services-collection-box pt-7.5 border-radius-20 w-1/2">
              <div className="w-full flex justify-between relative">
                <div>
                  <Image
                    src={"/img/UI UX.png"}
                    width={246}
                    height={138}
                    alt="UI UX"
                    unoptimized={true}
                    className="object-contain absolute top-[-20px]"
                  />
                </div>
                <div className="flex flex-col items-end pr-7.5 gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <Image
                      src={"/img/title-dot.png"}
                      width={5}
                      height={5}
                      alt="title-dot"
                      unoptimized={true}
                      className="object-contain"
                    />
                    <p className="text-blue text-right leading-[80%]">
                      service
                    </p>
                  </div>
                  <div className="flex items-center">
                    <h2 className="font-montreal text-black font-light text-right leading-[110%]">
                      EXPLORE MY
                      <br />
                      <span className="font-medium text-primary">SERVICES</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full mt-23">
                <div ref={ref} className="w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-evenly gap-4">
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
            </div>
            <div className="w-1/2">
              <div className="flex w-full flex-col gap-2.5">
                <div className="service-card shadow-primary flex flex-col border-radius-20 group">
                  <div className="flex justify-between relative">
                    <h3 className="font-montreal group-hover:text-white font-normal leading-[110%] uppercase">
                      User Research &
                      <br />
                      Analysis
                    </h3>
                    <div>
                      <svg
                        className="absolute top-[-15px] left-[773px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <path
                          d="M48.5219 41.3622L48.5219 23.4783L30.638 23.4783"
                          className="group-hover:stroke-white"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.4786 48.5217L48.2715 23.7288"
                          className="group-hover:stroke-white"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-[70%] ml-auto mt-10">
                    <p className="text-right group-hover:text-white leading-[100%]">
                      Conducting research to understand user needs, behaviors,
                      <br />
                      and pain points for informed design decisions.
                    </p>
                  </div>
                </div>

                <div className="service-card shadow-primary active flex flex-col border-radius-20 group">
                  <div className="flex justify-between relative">
                    <h3 className="font-montreal group-hover:text-white font-normal leading-[110%] uppercase">
                      Wireframing &
                      <br />
                      Prototyping
                    </h3>
                    <div>
                      <svg
                        className="absolute top-[-15px] left-[773px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <path
                          d="M48.5219 41.3622L48.5219 23.4783L30.638 23.4783"
                          className="group-hover:stroke-white"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.4786 48.5217L48.2715 23.7288"
                          className="group-hover:stroke-white"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-[70%] ml-auto mt-10">
                    <p className="text-right group-hover:text-white leading-[100%]">
                      Creating low-fidelity layouts and interactive prototypes
                      to
                      <br />
                      visualize design concepts and user flows.
                    </p>
                  </div>
                </div>

                <div className="service-card shadow-primary flex flex-col border-radius-20 group">
                  <div className="flex justify-between relative">
                    <h3 className="font-montreal group-hover:text-white font-normal leading-[110%] uppercase">
                      Visual Design &
                      <br />
                      Interaction Design
                    </h3>
                    <div>
                      <svg
                        className="absolute top-[-15px] left-[773px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <path
                          d="M48.5219 41.3622L48.5219 23.4783L30.638 23.4783"
                          className="group-hover:stroke-white"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.4786 48.5217L48.2715 23.7288"
                          className="group-hover:stroke-white"
                          stroke="#4A26FF"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-[70%] group-hover:text-white ml-auto mt-10">
                    <p className="text-right leading-[100%]">
                      Crafting aesthetically pleasing and intuitive interfaces
                      that
                      <br />
                      ensure seamless user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-wrapper border-radius-20 shadow-primary px-80 pt-7.5 pb-22.5">
          <div className="flex flex-row items-center w-full justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <Image
                  src={"/img/title-dot.png"}
                  width={5}
                  height={5}
                  alt="title-dot"
                  unoptimized={true}
                  className="object-contain"
                />
                <p className="text-blue font-normal fs-20">About Me</p>
              </div>
              <h2 className="font-light font-montreal uppercase text-white leading-[106%]">
                Meet the Mind <br />
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
          <div className="flex">
            <div className="w-[50%] relative">
              <Image
                src={"/img/Profile Pic Taha.png"}
                width={727}
                height={727}
                alt="title-dot"
                unoptimized={true}
                className="object-contain absolute top-[-20px]"
              />
            </div>
            <div className="w-[50%]">
              <p className="text-right fs-20 capitalize mt-4 mb-30">
                Hi, I’m{" "}
                <span className="font-bold text-white">Taha Khanzada,</span> a
                designer who thrives on
                <br /> transforming ideas into engaging designs. From wireframes
                <br /> to polished visuals, I focus on blending functionality
                with
                <br /> aesthetics to deliver exceptional results.
              </p>
              <div className="flex gap-7.5">
                <div>
                  <h2 className="text-white font-normal leading-[100%]">
                    250<span className="text-blue text-[64px]">+</span>
                  </h2>
                  <p className="fs-20">Success Project</p>
                </div>
                <div>
                  <h2 className="text-white font-normal leading-[100%]">
                    160<span className="text-blue text-[64px]">+</span>
                  </h2>
                  <p className="fs-20">recent clients</p>
                </div>
                <div>
                  <h2 className="text-white font-normal leading-[100%]">
                    99<span className="text-blue text-[64px]">%</span>
                  </h2>
                  <p className="fs-20">Happy Clients</p>
                </div>
              </div>
              <div className="flex flex-wrap mt-12.5 gap-2.5">
                <Link href="#" className="btn btn-lg btn-black">
                  Design
                </Link>
                <Link href="#" className="btn btn-lg btn-black">
                  User Experience
                </Link>
                <Link href="#" className="btn btn-lg btn-black">
                  Insights
                </Link>
                <Link href="#" className="btn btn-lg btn-black">
                  prototypes
                </Link>
                <Link href="#" className="btn btn-lg btn-black">
                  intuitive interfaces
                </Link>
                <Link href="#" className="btn btn-lg btn-black">
                  High-fidelity Design
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-section">
        <div className="workflow-wrapper">
          <div className="flex bg-white shadow-primary justify-between border-radius-20 px-80 p-5 mb-2.5">
            <div className="w-[60%]">
              <Image
                src={"/img/gesture.png"}
                width={111}
                height={111}
                alt="Laptop"
                unoptimized={true}
                className="object-contain"
              />
              <p>
                I take a user-focused approach, starting with research to
                understand needs and goals. Through collaboration, wireframes,
                and refined designs, I create impactful, functional, and
                visually engaging solutions.
              </p>
            </div>
            <div className="flex flex-col items-end w-[30%]">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Image
                  src={"/img/title-dot.png"}
                  width={5}
                  height={5}
                  alt="title-dot"
                  unoptimized={true}
                  className="object-contain"
                />
                <p className="text-blue font-normal fs-20"> How I Work </p>
              </div>
              <h2 className="font-light text-right uppercase leading-[100%]">
                My Excellent{" "}
                <span className="font-medium font-montreal text-primary">
                  Approach
                </span>
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-stretch relative lg:flex-nowrap gap-2.5 mb-2.5">
            <div className="flex-1 w-[33.33%] card border-radius-20 shadow-primary">
              <div className="flex flex-col items-center">
                <Image
                  src={"/img/Rectangle.png"}
                  width={288}
                  height={345}
                  alt="Laptop"
                  unoptimized={true}
                  className="object-contain"
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
            <div className="flex flex-col flex-1 justify-between w-[33.33%] ">
              <div className="flex items-center gap-2.5 bg-white pl-5 border-radius-20 shadow-primary">
                <div className="flex flex-col">
                  <h3 className="font-montreal uppercase leading-[100%] font-normal text-black">
                    Transparent Process
                  </h3>
                  <p className="line-clamp-5 capitalize fs-16">
                    No surprises—just high-quality work delivered on time. just
                    high-quality work delivered on time.
                  </p>
                </div>
                <Image
                  src={"/img/Rectangle (1).png"}
                  width={236}
                  height={264}
                  alt="Laptop"
                  unoptimized={true}
                  className="object-contain rounded-[20px]"
                />
              </div>
              <div className="flex items-center gap-2.5 bg-white pr-5 border-radius-20 shadow-primary">
                <Image
                  src={"/img/Rectangle (2).png"}
                  width={236}
                  height={264}
                  alt="Laptop"
                  unoptimized={true}
                  className="object-contain rounded-[20px]"
                />
                <div className="flex flex-col">
                  <h3 className="font-montreal text-right uppercase leading-[100%] font-normal text-black">
                    Proven Results
                  </h3>
                  <p className="line-clamp-5 capitalize text-right fs-16">
                    Trusted by over{" "}
                    <span className="fs-18 font-semibold text-black">160+</span>
                    , just high-quality work delivered on time. just
                    high-quality work delivered on time.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-[33.33%] card border-radius-20 shadow-primary">
              <div className="flex flex-col items-center">
                <Image
                  src={"/img/Rectangle (3).png"}
                  width={288}
                  height={345}
                  alt="Laptop"
                  unoptimized={true}
                  className="object-contain"
                />
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
        <div className="portfolio-wrapper shadow-primary border-radius-20 px-80">
          <div className="flex flex-col items-center mb-7.5">
            <div className="flex gap-1.5 mb-2.5">
              <Image
                src={"/img/title-dot.png"}
                width={5}
                height={5}
                alt="title-dot"
                unoptimized={true}
                className="object-contain"
              />
              <p className="text-blue font-normal fs-20">My Work</p>
            </div>
            <h2 className="font-light font-montreal uppercase text-center leading-[100%]">
              Designs That
              <br />
              <span className="font-medium text-primary">Solve Problems</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-7 md:pt-9 xl:pt-12">
            <div className="flex flex-col gap-2.5">
              <div className="portfolio-card border-radius-20 shadow-primary"></div>
              <div className="flex flex-col gap-6 portfolio-card-footer border-radius-20 shadow-primary">
                <div className="flex flex-wrap gap-1">
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Figma
                  </Link>
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Webflow
                  </Link>
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Wizard
                  </Link>
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Weglot
                  </Link>
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
              <div className="flex flex-col gap-6 portfolio-card-footer border-radius-20 shadow-primary">
                <div className="flex flex-wrap gap-1">
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Figma
                  </Link>
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Webflow
                  </Link>
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Wizard
                  </Link>
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Weglot
                  </Link>
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
              <div className="flex flex-col gap-6 portfolio-card-footer border-radius-20 shadow-primary">
                <div className="flex flex-wrap gap-1">
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Figma
                  </Link>
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Webflow
                  </Link>
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Wizard
                  </Link>
                  <Link href="#" className="btn btn-xsm btn-lilac">
                    Weglot
                  </Link>
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
      </section>

      <section className="idea-section mt-2.5 mb-2.5">
        <div className="idea-wrapper border-radius-20 shadow-primary px-80">
          <div className="flex flex-col gap-64">
            <div className="flex items-start">
              <h2 className="font-light text-white font-montreal leading-[100%] uppercase">
                Ready to Create Your <br />
                <span className="text-pink font-medium">Amazing Ideas</span>
              </h2>
            </div>
            <div className="flex flex-col items-end">
              <p className="mb-6 text-right text-white capitalize">
                I’m always excited to discuss new
                <br /> opportunities and collaborations.
                <br /> Feel free to reach out.
              </p>
              <Link href="#" className="fs-12 btn  btn-pink">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section mb-2.5"></section>

      <section className="testimonial-section">
        <div className="testimonial-wrapper shadow-primary flex flex-col items-center border-radius-20">
          <div className="flex items-center gap-1.5">
            <Image
              src={"/img/title-dot.png"}
              width={5}
              height={5}
              alt="title-dot"
              unoptimized={true}
              className="object-contain"
            />
            <p className="text-blue text-right leading-[80%] mt-2.5">Testimonial</p>
          </div>
          <h2 className="font-montreal text-center uppercase font-light leading-[100%]">Some words from <br/><span className="font-medium text-pink">my clients</span></h2>
        </div>
      </section>
    </>
  );
};

export default Page;