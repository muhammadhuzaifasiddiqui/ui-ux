import React from "react";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section shadow-primary">
        <div className="hero-wrapper border-radius-20 bg-cover bg-center">
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
                <div className="shadow-down border-radius-30">
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
                          className="object-contain"
                        />
                      </div>
                      <div className="pl-4 pt-[33px] leading-[70%]">
                        <p className="fs-14 font-normal">
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
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-end">
                      <div className="flex pl-10 items-center gap-2">
                        <p className="underline fs-14 font-normal">View all</p>
                        <Image
                          src={"/img/arrow.png"}
                          width={100}
                          height={100}
                          alt="Laptop"
                          unoptimized={true}
                          className="object-contain"
                        />
                      </div>
                      <div className="mt-9">
                        <Image
                          src={"/img/portfolio 3.png"}
                          width={100}
                          height={100}
                          alt="Laptop"
                          unoptimized={true}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-col gap-6">
                    <div className="flex items-center gap-5">
                      <p className="fs-14 font-medium text-gray">Success <br/>project</p>
                      <p className="font-medium text-[36px] text-primary">250<span className="text-blue">+</span></p>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="font-medium text-[36px] text-primary">160<span className="text-blue">+</span></p>
                      <p className="fs-14 font-normal text-gray">Recent <br/>clients</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="fs-14 font-normal text-gray">Happy<br/> Clients</p>
                      <p className="font-medium text-[36px] text-primary">95<span className="text-blue">+</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="">
          <div className=""></div>
        </div>
      </section>
    </>
  );
};

export default page;
