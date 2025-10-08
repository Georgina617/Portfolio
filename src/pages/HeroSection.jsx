import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Desktop from "../assets/Desktop.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="home"
      className="relative h-screen w-full text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={Desktop}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30 sm:bg-black/40 md:bg-black/50 lg:bg-black/60"></div>
      {/* Content (centered) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center space-y-4">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-lg sm:text-xl md:text-2xl  font-light text-sky-400"
        >
          Hello, I'm
        </p>
        <h1 className="text-2xl text-white sm:text-4xl md:text-6xl font-serif mt-2 leading-tight">
          <Typewriter
            words={["ODUSANYA OMOLOLA GEORGINA"]}
            loop={1}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-bold text-white">
          <Typewriter
            words={["Frontend Developer"]}
            loop={1}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        {/* Buttons */}

        <div
          className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <a
            href="#"
            className="px-5 py-2 sm:px-6 sm:py-3 rounded-md border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white transition text-center text-sm sm:text-base"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-5 py-2 sm:px-6 sm:py-3 rounded-md bg-sky-500 hover:bg-sky-600 transition text-center text-sm sm:text-base"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
