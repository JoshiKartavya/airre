"use client";

import React, { useEffect } from "react";
import Image from "next/image";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

const Technologies = () => {
  const services = [
    { id: 1, title: "Humanoid", image: "/images/frame1.svg" },
    { id: 2, title: "Artificial General Intelligence", image: "/images/frame2.svg" },
    { id: 3, title: "Semi Conductor", image: "/images/frame3.svg" },
    { id: 4, title: "Brain Computer Interface", image: "/images/frame4.svg" },
  ];

  const formatTitle = (title: string) => {
    return title.split("").map((char, index) =>
      char.toLowerCase() === "e" ? (
        <span key={index} className="font-thin italic">
          {char}
        </span>
      ) : (
        char
      )
    );
  };

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const titleElement = document.querySelector(".ser-title");
  //   if (titleElement) {
  //     const spans = titleElement.querySelectorAll("h1");
  //     spans.forEach((span, index) => {
  //       gsap.to(span, {
  //         opacity: 1,
  //         scrollTrigger: {
  //           trigger: ".services-main",
  //           start: `top ${40 - index * 5}%`,
  //           end: `top ${30 - index * 5}%`,
  //           scrub: true,
  //           toggleActions: "play reverse play reverse",
  //         },
  //       });
  //     });
  //   }
  // }, []);

  return (
    <div id="Experties" className="services-main h-max w-full bg-primary text-secondary relative">
      {/* Contact us top left */}
      <div className="absolute left-12 top-12 xl:text-[24px] font-mono flex items-center gap-2">
        <span className="text-xl">&#123;&#125;</span> Our Experties
      </div>
      <div className="top w-full h-max md:h-max xl:h-max relative z-20 xl:pb-40">
        <div className="top-data w-[70%] h-full relative flex flex-col justify-start pt-20 xl:pt-60 items-center">
          <h1 className="ser-title text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold w-4/5 xl:w-4/5 font-mono">
            Our team not only make simple projects , we{" "}
            <span className="text-[var(--contrast)] font-thin opacity-50">
              contribute
            </span>{" "}
            building new{" "}
            <span className="text-[var(--contrast)] font-thin opacity-50">
              human civilization.
            </span>{" "}
          </h1>
        </div>
      </div>
      <div className="content flex flex-row w-full h-max">
        <div className="arrow hidden xl:block w-1/3 h-max px-8 xl:px-36 py-12 xl:py-24">
          <div className="arrow-img relative w-16 sm:w-18 md:w-18 lg:w-20 xl:w-28 2xl:w-28 aspect-square">
            <Image src="/icons/arrow.svg" alt="arrow" fill />
          </div>
        </div>
        <div className="services w-full flex justify-end pr-20 pb-20">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="service w-[400px] aspect-[232/337] relative group bg-transparent shadow-none"
              >
                <div className="service-image w-full h-full relative overflow-hidden rounded-none">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    fill
                    priority
                  />
                  <div className="absolute bottom-4 left-4 px-0 py-0 w-[90%]">
                    <h3 className="text-[24px] sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-4xl font-michroma text-left">
                      {formatTitle(service.title)}
                    </h3>
                  </div>                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies