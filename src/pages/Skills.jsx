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
import { Autoplay, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Javascript", icon: js },
  { name: "ReactJS", icon: react },
  { name: "TailwindCSS", icon: tailwind },
  { name: "SASS", icon: sass },
  { name: "Git", icon: git },
  { name: "Photoshop", icon: ps },
];
const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16 px-6"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-3xl font-bold mb-5 text-center">My Skills</h2>
        <p className="text-gray-400 text-md mb-10 text-center">
          A curated set of tools and technologies I use to craft modern,
          responsive, <br />
          and scalable web experiences.
        </p>
        {/* swiper carousel */}
        <div className="w-full flex flex-col items-center">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            slidesPerView={3}
            pagination={{
              clickable: true,
              el: ".custom-pagination", // 👈 we define our own pagination container outside
            }}
            autoplay={{
              delay: 3000, // continuous flow
              disableOnInteraction: false,
            }}
            speed={2000}
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

          {/* 👇 Pagination placed outside and centered */}
          <div className="custom-pagination flex justify-center mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
