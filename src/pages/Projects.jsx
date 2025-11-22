import React, { useEffect, useState } from 'react';
import voyagerImg from '../assets/voyager.png';
import FountainImg from '../assets/Fountain.png';
import BeowinImg from '../assets/Beowin.png';
import HarmonyImg from '../assets/Harmony.png';
import MagicStreamImg from '../assets/MagicStream.png';
import ecommerceImg from '../assets/Ecommerce.png';
import weatherImg from '../assets/weather App.png';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Voyager Travel Website',
    description:
      'A modern travel and booking platform with a clean UI for exploring destinations, booking tours, and managing trips seamlessly. Built with React and Tailwind for responsiveness.',
    tags: ['React', 'Tailwind CSS', 'Javascript'],
    image: voyagerImg,
    demoLink: 'https://travelsandtourvoyage.com/',
    githubLink: 'https://github.com/Georgina617/voyager-website.git',
  },
  {
    title: 'Fountain Connect Website',
    description:
      'A modern, sleek website designed to facilitate connection and collaboration. Built with a clean layout, intuitive navigation, and a responsive design, it delivers a professional and user-friendly experience. The project demonstrates my skills in front-end development (UI/UX), clean design aesthetics, and responsive web architecture.',
    tags: ['Html', 'Css', 'Javascript'],
    image: FountainImg,
    demoLink: 'https://fountainconnect.ca/',
    githubLink: 'https://github.com/Georgina617',
  },
  {
    title: 'Beowin Home & Care Website',
    description:
      'A responsive, mission-driven website developed for a staffing agency that specializes in personalized care services. The site highlights the company’s core offerings, including mental & addiction support, personal care, developmental services, companion care, nursing, and social services. It emphasizes 24/7 emergency support, patient-centered care, and professionalism, while also making it easy for prospective clients to book appointments and learn more.',
    tags: ['Html', 'Css', 'Javascript'],
    image: BeowinImg,
    demoLink: 'https://beowinhomecare.com/',
    githubLink: 'https://github.com/Georgina617',
  },
  {
    title: 'Harmony wellness Website',
    description:
      'A fully responsive medical services website built using HTML, CSS, and JavaScript. I developed a clean, modern interface showcasing the centre’s offerings, including diagnostics, pharmacy services, gynecology, chest care, and wellness programs. The site features optimized layouts for all screen sizes, smooth navigation, and an accessible user experience designed to communicate trust, professionalism, and holistic care.',
    tags: ['Html', 'Css', 'Javascript'],
    image: HarmonyImg,
    demoLink: 'https://harmonymedicalandwellness.com/',
    githubLink: 'https://github.com/Georgina617',
  },
  {
    title: 'Magic Stream Website',
    description:
      'A full-stack movie streaming platform built with React on the frontend and a high-performance Go (Golang) backend API. It integrates OpenAI for intelligent search and content recommendations, enhancing user interaction and discoverability. The project is deployed using DevOps best practices, including automated builds, environment-based configuration, and cloud deployment on Vercel. The architecture follows a modular, scalable design with secure API handling, optimized state management, and efficient routing for smooth, app-like navigation.',
    tags: ['React', 'Go', 'Javascript'],
    image: MagicStreamImg,
    demoLink: 'https://magic-stream-movies-nine.vercel.app',
    githubLink: 'https://github.com/Georgina617',
  },
  {
    title: 'DNk Ecommerce Website',
    description:
      'A modern e-commerce platform featuring a clean interface, seamless product browsing, secure checkout, and responsive design for an effortless shopping experience.',
    tags: ['React', 'Tailwind CSS', 'Javascript'],
    image: ecommerceImg,
    demoLink: '#',
    githubLink: 'https://github.com/Georgina617',
  },
  {
    title: 'Weather App',
    description:
      'A sleek and responsive weather app that provides real-time forecasts, current conditions, and location-based updates with a clean, user-friendly interface.',
    tags: ['React', 'Tailwind CSS', 'Javascript'],
    image: weatherImg,
    demoLink: 'https://georgina617.github.io/Weather-app/',
    githubLink: 'https://github.com/Georgina617/Weather-app.git',
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProjects = projects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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
        {selectedProjects.map((p, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-500"
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
                  className="flex-1 text-center flex items-center justify-center gap-2 bg-sky-500 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm transition-transform hover:scale-105 duration-300"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={p.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center flex items-center justify-center gap-2 bg-gray-700 hover:bg-sky-500 text-white px-4 py-2 rounded-full text-sm transition-transform hover:scale-105 duration-300"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-12 flex justify-center items-center gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md border ${
            currentPage === 1
              ? 'border-gray-500 text-gray-500 cursor-not-allowed'
              : 'border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition'
          }`}
        >
          Previous
        </button>

        <span className="text-gray-300">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md border ${
            currentPage === totalPages
              ? 'border-gray-500 text-gray-500 cursor-not-allowed'
              : 'border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition'
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
