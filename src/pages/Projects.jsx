import React, { useEffect } from "react";
import voyagerImg from "../assets/voyager.png";
import ecommerceImg from "../assets/Ecommerce.png";
import weatherImg from "../assets/weather App.png";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Voyager Travel Website",
    description:
      "A modern travel and booking platform with a clean UI for exploring destinations, booking tours, and managing trips seamlessly. Built with React and Tailwind for responsiveness.",
    tags: ["React", "Tailwind CSS", "Javascript"],
    image: voyagerImg,
    demoLink: "#",
    githubLink: "https://github.com/Georgina617",
  },
  {
    title: "DNk Ecommerce Website",
    description:
      "A modern e-commerce platform featuring a clean interface, seamless product browsing, secure checkout, and responsive design for an effortless shopping experience.",
    tags: ["React", "Tailwind CSS", "Javascript"],
    image: ecommerceImg,
    demoLink: "#",
    githubLink: "https://github.com/Georgina617",
  },
  {
    title: "Weather App",
    description:
      "A sleek and responsive weather app that provides real-time forecasts, current conditions, and location-based updates with a clean, user-friendly interface.",
    tags: ["React", "Tailwind CSS", "Javascript"],
    image: weatherImg,
    demoLink: "https://georgina617.github.io/Weather-app/",
    githubLink: "https://github.com/Georgina617",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="relative min-h-screen py-16 px-6 bg-gray-900 text-white"
    >
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        My Projects
      </h2>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-gray-400 text-md text-center mb-10 max-w-2xl mx-auto"
      >
        A showcase of modern solutions and thoughtful designs that reflect my
        dedication to innovation, technology, and seamless user experiences.
      </p>
      {/* Project Cards */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="grid md:grid-cols-3 gap-10"
      >
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform translate-all duration-500"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.description}</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={p.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center flex items-center justify-center gap-2 bg-sky-500 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm transition-transform transform hover:scale-105 duration-300"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={p.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center flex items-center justify-center gap-2 bg-gray-700 hover:bg-sky-500 text-white px-4 py-2 rounded-full text-sm transition-transform transform hover:scale-105 duration-300"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href="#"
          className="px-6 py-2 border border-sky-500 text-sky-500 rounded-md hover:bg-sky-500 hover:text-white transition duration-300"
        >
          More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
