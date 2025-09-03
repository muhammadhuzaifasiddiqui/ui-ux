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
            <p></p>
            <h1></h1>
            <Link href="#" className="btn"></Link>
            <p></p>
            <div className="flex">
              <div className="w-[45%]">
                <p>
                  <span></span>
                </p>
              </div>
              <div className="w-[35%]">
                <Link href="#" className="btn"></Link>
                <Link href="#" className="btn"></Link>
                <Link href="#" className="btn"></Link>
              </div>
            </div>
            <div className="flex gap-4 mt-20">
              <Link href="#" className="btn"></Link>
              <Link href="#" className="btn"></Link>
            </div>
          </div>
          <div className="w-[65%]"></div>
        </div>
      </section>
    </>
  );
};

export default page;
