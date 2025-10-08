import React, { useEffect } from "react";
import profileImg from "../assets/profileImg.jpg";
import { Award, Code, Laptop } from "lucide-react";
import Button from "../component/utils/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16 px-6"
    >
      <div className="text-center mb-12">
        <p
          className="text-gray-400 uppercase tracking-widest"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Get To Know Me
        </p>
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-3xl sm:text-4xl font-bold"
        >
          About Me
        </h2>
      </div>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* left side image */}
        <div className="flex justify-center">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={profileImg}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-3xl shadow-lg"
          />
        </div>
        {/* RIGHT SIDE CONTENT */}
        <div data-aos="fade-up" data-aos-duration="1000">
          {/*  CARDS*/}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 mt-10">
            <div className="group border border-blue-500 rounded-xl p-6 text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Award className="mx-auto mb-2 text-blue-400" size={28} />
                <h3 className="font-bold">Experience</h3>
                <p className="text-gray-400 text-sm">1 year</p>
              </div>
            </div>
            <div className="border border-blue-500 rounded-xl p-6 text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Code className="mx-auto mb-2 text-blue-400" size={28} />
                <h3 className="font-semibold">Skills</h3>
                <p className="text-gray-400 text-sm">
                  Multiple SKills and Services
                </p>
              </div>
            </div>
            <div className="group border border-blue-500 rounded-xl p-6 text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Laptop className="mx-auto mb-2 text-blue-400" size={28} />
                <h3 className="font-semibold">Projects</h3>
                <p className="text-gray-400 text-sm">
                  Multiple Projects Completed
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate and detail-oriented Frontend Developer with a
            strong focus on creating clean, responsive, and user-friendly web
            applications. Skilled in JavaScript, Tailwind CSS, React, and HTML,
            I specialize in transforming ideas and designs into seamless digital
            experiences. I thrive in collaborative, team-oriented environments
            and embrace agile methodologies to deliver high-quality projects.
            Beyond coding, I am motivated by solving real-world problems and
            building intuitive solutions that create lasting impact.
          </p>
          <div className="mt-6">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
