import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Products from "../components/layout/Products";
import Trusted from "../components/layout/Trusted";
import Blog from "../components/layout/Blog";
import Book from "../components/layout/Book";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import Marquee from "../components/layout/Marquee";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="service-section overflow-hidden py-80 px-3 md:px-4 lg:px-5" id="service">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="w-full lg:w-[58%]">
                <h2 className="font-behindthetineties leading-[100%] text-secondary-light font-normal">
                  <span className="text-primary italic"> Effective</span>,
                  Gentle, & Science-Back
                  <span className="text-primary italic"> Skincare</span>
                </h2>
                <Image
                  src={"/images/Sparkle Line.webp"}
                  width={298}
                  height={60}
                  alt="logo"
                  unoptimized={true}
                  className="w-full h-full object-cover hidden lg:block mt-10"
                />
              </div>
              <div className="w-full lg:w-[42%]">
                <p className="font-light">
                  As a trusted aesthetic clinic in Pakistan, BioFlex Aesthetics
                  provides personalized care in a comfortable, hygienic
                  environment. Every treatment is tailored to your skin’s needs
                  — using the latest technology and performed by skilled
                  professionals.
                </p>
                <div className="pt-6 md:pt-8 lg:pt-10">
                  <a
                    className="btn inline-block bg-primary text-white!"
                    href="#"
                  >
                    View All Treatments
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-50">
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <a className="service-card" href="#">
                  <div className="img-wrapper overflow-hidden relative h-64">
                    <Image
                      src={"/images/Exosome-Therapy.webp"}
                      width={401}
                      height={500}
                      alt="Exosome-Therapy"
                      unoptimized={true}
                      className="w-full! h-full! object-cover"
                    />
                    <div className="flex flex-col justify-between absolute inset-0 p-2 md:p-3 xl:p-5">
                      <div className="btn btn-lg btn-circle ms-auto">
                        <Image
                          src={"/images/Arrow Right.svg"}
                          width={20}
                          height={20}
                          alt="Arrow Right"
                          unoptimized={true}
                          className="w-full! h-full! object-cover"
                        />
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <div className="tag">1 Session per month</div>
                        <div className="tag">3 Session</div>
                        <div className="tag">
                          Prices Starting form 12000 PKR
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h5 className="line-clamp-1 text-secondary-dark font-medium leading-[110%]">
                      Exosome Therapy for Hair Loss
                    </h5>
                    <p className="line-clamp-2 mt-3">
                      <b>Stimulating hair regrowth with dissolvable threads.</b>
                      “Threads for hair” refers to a treatment where tiny
                      absorbable threads (usually made of PDO – Polydioxanone, a
                      material used in surgical sutures) are inserted into the
                      scalp to combat hair loss. PDO scalp threading, also known
                      as hair threading therapy, is a minimally invasive
                      procedure originally adapted from facial thread lifts. The
                      concept is simple: dozens of very fine threads are placed
                      just under the scalp skin in areas of thinning. These
                      threads create a supportive mesh and cause a controlled
                      “micro-injury” that triggers the body’s healing response.
                      In doing so, they increase blood flow, collagen, and
                      growth factors around hair follicles. Over the next 6–8
                      months, the threads slowly dissolve, but during that time
                      they continuously stimulate the scalp – essentially
                      “tricking” it into rejuvenation mode. The result is
                      stronger, thicker hair growth in those areas. Our clinic
                      performs PDO hair threading using FDA-approved threads and
                      a proprietary technique from Canada to ensure precision
                      and safety. This therapy is an excellent non-surgical hair
                      restoration option for those who want to boost hair
                      density naturally. It can be used alone or in combination
                      with PRP and other treatments for
                      <b>best-in-class results in Pakistan.</b>
                    </p>
                  </div>
                </a>

                <a className="service-card" href="#">
                  <div className="img-wrapper overflow-hidden relative h-64">
                    <Image
                      src={"/images/EMS.webp"}
                      width={401}
                      height={500}
                      alt="Exosome-Therapy"
                      unoptimized={true}
                      className="w-full! h-full! object-cover"
                    />
                    <div className="flex flex-col justify-between absolute inset-0 p-2 md:p-3 xl:p-5">
                      <div className="btn btn-lg btn-circle ms-auto">
                        <Image
                          src={"/images/Arrow Right.svg"}
                          width={20}
                          height={20}
                          alt="Arrow Right"
                          unoptimized={true}
                          className="w-full! h-full! object-cover"
                        />
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <div className="tag">1 Session per month</div>
                        <div className="tag">3 Session</div>
                        <div className="tag">
                          Prices Starting form 12000 PKR
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h5 className="line-clamp-1 text-secondary-dark font-medium leading-[110%]">
                      EMS
                    </h5>
                    <p className="line-clamp-2 mt-3">
                      <b>
                        Electromagnetic muscle stimulation to burn fat and build
                        muscle.
                      </b>
                      “Threads for hair” refers to a treatment where tiny
                      absorbable threads (usually made of PDO – Polydioxanone, a
                      material used in surgical sutures) are inserted into the
                      scalp to combat hair loss. PDO scalp threading, also known
                      as hair threading therapy, is a minimally invasive
                      procedure originally adapted from facial thread lifts. The
                      concept is simple: dozens of very fine threads are placed
                      just under the scalp skin in areas of thinning. These
                      threads create a supportive mesh and cause a controlled
                      “micro-injury” that triggers the body’s healing response.
                      In doing so, they increase blood flow, collagen, and
                      growth factors around hair follicles. Over the next 6–8
                      months, the threads slowly dissolve, but during that time
                      they continuously stimulate the scalp – essentially
                      “tricking” it into rejuvenation mode. The result is
                      stronger, thicker hair growth in those areas. Our clinic
                      performs PDO hair threading using FDA-approved threads and
                      a proprietary technique from Canada to ensure precision
                      and safety. This therapy is an excellent non-surgical hair
                      restoration option for those who want to boost hair
                      density naturally. It can be used alone or in combination
                      with PRP and other treatments for
                      <b>best-in-class results in Pakistan.</b>
                    </p>
                  </div>
                </a>

                <a className="service-card" href="#">
                  <div className="img-wrapper overflow-hidden relative h-64">
                    <Image
                      src={"/images/RF-BODY-1.webp"}
                      width={401}
                      height={500}
                      alt="Exosome-Therapy"
                      unoptimized={true}
                      className="w-full! h-full! object-cover"
                    />
                    <div className="flex flex-col justify-between absolute inset-0 p-2 md:p-3 xl:p-5">
                      <div className="btn btn-lg btn-circle ms-auto">
                        <Image
                          src={"/images/Arrow Right.svg"}
                          width={20}
                          height={20}
                          alt="Arrow Right"
                          unoptimized={true}
                          className="w-full! h-full! object-cover"
                        />
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <div className="tag">1 Session per month</div>
                        <div className="tag">3 Session</div>
                        <div className="tag">
                          Prices Starting form 12000 PKR
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h5 className="line-clamp-1 text-secondary-dark font-medium leading-[110%]">
                      RF (BODY)
                    </h5>
                    <p className="line-clamp-2 mt-3">
                      <b>
                        Radiofrequency treatment for fat reduction and skin
                        tightening.
                      </b>
                      “Threads for hair” refers to a treatment where tiny
                      absorbable threads (usually made of PDO – Polydioxanone, a
                      material used in surgical sutures) are inserted into the
                      scalp to combat hair loss. PDO scalp threading, also known
                      as hair threading therapy, is a minimally invasive
                      procedure originally adapted from facial thread lifts. The
                      concept is simple: dozens of very fine threads are placed
                      just under the scalp skin in areas of thinning. These
                      threads create a supportive mesh and cause a controlled
                      “micro-injury” that triggers the body’s healing response.
                      In doing so, they increase blood flow, collagen, and
                      growth factors around hair follicles. Over the next 6–8
                      months, the threads slowly dissolve, but during that time
                      they continuously stimulate the scalp – essentially
                      “tricking” it into rejuvenation mode. The result is
                      stronger, thicker hair growth in those areas. Our clinic
                      performs PDO hair threading using FDA-approved threads and
                      a proprietary technique from Canada to ensure precision
                      and safety. This therapy is an excellent non-surgical hair
                      restoration option for those who want to boost hair
                      density naturally. It can be used alone or in combination
                      with PRP and other treatments for
                      <b>best-in-class results in Pakistan.</b>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Products />
      <Trusted />
      <Blog />
      <Marquee />
      <Book />
      <Contact />
      <Footer />
    </>
  );
};

export default page;