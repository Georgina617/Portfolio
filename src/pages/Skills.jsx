import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import html from "../assets/html.png";
import css from "../assets/CSS.jpg";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import sass from "../assets/sass.jpeg";
import git from "../assets/git.png";
import ps from "../assets/photoshop.png";
import ts from "../assets/Typescript.png";
import Ns from "../assets/Node.png";
import express from "../assets/Express.png";
import mongo from "../assets/MongoDB.png";
import mysql from "../assets/MySQL.png";
import php from "../assets/PHP.png";
import jwt from "../assets/JWT.png";
import { Autoplay, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Javascript", icon: js },
  { name: "Typescript", icon: ts },
  { name: "ReactJS", icon: react },
  { name: "NodeJS", icon: Ns },
  { name: "ExpressJS", icon: express },
  { name: "MongoDB", icon: mongo },
  { name: "MySQL", icon: mysql },
  { name: "PHP", icon: php },
  { name: "TailwindCSS", icon: tailwind },
  { name: "SASS", icon: sass },
  { name: "Git", icon: git },
  { name: "JWT", icon: jwt },
  { name: "Photoshop", icon: ps },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16 px-6"
    >
      <h2 className="text-3xl font-bold mb-5">My Skills</h2>
      <p className="text-gray-400 text-md mb-10 text-center">
        A curated set of tools and technologies I use to craft modern,
        responsive, <br />
        and scalable web experiences.
      </p>

      <div className="w-full flex flex-col items-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          slidesPerView={3}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: (index, className) =>
              `<span class="${className} inline-block w-4 h-4 mx-1 rounded-full bg-white/70 opacity-70 transition-all duration-300"></span>`,
          }}
          autoplay={{
            delay: 3000, // slightly faster on mobile
            disableOnInteraction: false,
          }}
          speed={2000} // smoother but a bit faster
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 16,
              loop: true,
              autoplay: {
                delay: 2500, // faster slide switch for mobile
                disableOnInteraction: false,
              },
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
              autoplay: {
                delay: 0,
                disableOnInteraction: false,
              },
              speed: 4000,
            },
          }}
          className="w-full max-w-6xl"
        >
          {skills.map((s, id) => (
            <SwiperSlide key={id} className="flex justify-center">
              <div className="w-full max-w-[200px] flex flex-col items-center justify-center bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                <img src={s.icon} alt={s.name} className="w-12 h-12 mb-4" />
                <p className="text-lg font-medium">{s.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
    </section>
  );
};

export default Skills;
