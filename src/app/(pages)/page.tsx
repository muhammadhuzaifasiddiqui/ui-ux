import React from "react";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="hero-wrapper border-radius-20 bg-cover bg-center">
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
                <Link href="#" className="btn btn-md btn-gray btn-border-right">
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
                      <span className="text-[25.951px] font-semibold">hr</span>
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
            <div className="w-[70%]">
              <div className="flex flex-row items-end gap-23">
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
                    Design
                  </Link>
                </div>
              </div>
              <div className="relative pt-11 pb-10">
                <Image
                  src={"/img/Rectangle 2.png"}
                  width={652}
                  height={153}
                  alt="Laptop"
                  unoptimized={true}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
