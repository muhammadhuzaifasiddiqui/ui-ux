import React from "react";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="background-color pt-50 pb-40">
          <div className="w-[25%]">
            <p className="text-gray font-normal">
              Hi.... <br /> My name is <span className="font-bold">Taha Khanzada</span>
            </p>
            <h1 className="font-bold text-gray">UI/UX</h1>
            <Link href="#" className="btn btn-gray-right btn-md gap-2.5">
              {" "}
              Design
            </Link>
            <p>
              Simplifying complex ideas into clear and engaging interfaces,
              ensuring that every interaction is intuitive, efficient, and
              visually pleasing.
            </p>
            <div className="charges-box flex items-center border-radius-30 bg-dark-gray">
              <div className="w-[45%]">
                <p>35$
                  <span className="text-[46.341px]">/</span><span className="text-[25.951px] font-semibold">hr</span>
                </p>
              </div>
              <div className="w-[35%] flex flex-col">
                <Link href="#" className="btn">Wireframes</Link>
                <Link href="#" className="btn">Insights</Link>
                <Link href="#" className="btn">Testimonials</Link>
              </div>
            </div>
            <div className="flex gap-4 mt-20">
              <Link href="#" className="btn">Get in touch</Link>
              <Link href="#" className="btn">Show my work</Link>
            </div>
          </div>
          <div className="w-[65%]">

          </div>
        </div>
      </section>
    </>
  );
};

export default page;
