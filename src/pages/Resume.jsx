import React from "react";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Odusanya Omolola Georgina
          </h1>
          <p className="text-gray-600 text-lg">Full Stack Software Engineer</p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-5 mt-4">
            <a
              href="https://www.linkedin.com/in/georgina-odusanya-ba6892380/"
              target="_blank"
              className="text-gray-700 hover:text-blue-600 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Georgina617"
              target="_blank"
              className="text-gray-700 hover:text-gray-900 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:georginaodusanya@gmail.com"
              target="_blank"
              className="text-gray-700 hover:text-green-600 text-2xl"
            >
              <FaGlobe />
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Full Stack Software Engineer with 2+ years of experience designing,
            developing, and deploying scalable web applications. Skilled in
            React, Node.js, and cloud technologies, with a passion for crafting
            seamless user experiences and optimizing backend performance. Strong
            collaborator who bridges the gap between design and functionality.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
            <p>React / Next.js</p>
            <p>Redux / Tailwind CSS</p>
            <p>Node.js / Express.js</p>
            <p>REST APIs / GraphQL</p>
            <p>MongoDB / PostgreSQL</p>
            <p>AWS / Docker</p>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold text-purple-600 mb-3">
            Projects
          </h2>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Voyager website</h3>
            <p className="text-gray-700 text-sm">
              A modern travel and booking platform with a clean UI for exploring
              destinations, booking tours, and managing trips seamlessly. Built
              with React and Tailwind for responsiveness.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">E-Commerce Platform</h3>
            <p className="text-gray-700 text-sm">
              Developed a responsive shopping site handling 600+ concurrent
              users. Integrated Stripe for secure payments and optimized
              checkout flow.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800">Portfolio Website</h3>
            <p className="text-gray-700 text-sm">
              Designed a personal developer portfolio with animated project
              showcases. Achieved 95+ Lighthouse performance score.
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-purple-600 mb-3">
            Work Experience
          </h2>

          <div className="mb-5">
            <h3 className="font-semibold text-gray-800">
              Full Stack Developer – CLS Tech Solutions
            </h3>
            <p className="text-gray-600 text-sm mb-1">Jan 2022 – Present</p>
            <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
              <li>
                Designed and deployed full-stack applications with React and
                Node.js.
              </li>
              <li>
                Reduced API response latency by 30% through query optimization.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver 12+
                production projects.
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="font-semibold text-gray-800">
              Frontend Developer Intern – Applick Innovations
            </h3>
            <p className="text-gray-600 text-sm mb-1">Jun 2021 – Dec 2021</p>
            <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
              <li>Developed reusable React components and UI modules.</li>
              <li>Improved user engagement by 20% with optimized UI/UX.</li>
              <li>
                Wrote unit tests with Jest, increasing code coverage to 85%.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-purple-600 mb-3">
            Education
          </h2>
          <p className="text-gray-700">
            B.Sc. in Agricultural extension and rural development – University
            of Ibadan (2016 – 2023)
          </p>
        </section>

        {/* Certifications & Achievements */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-purple-600 mb-3">
            Certifications & Achievements
          </h2>

          <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
            <li>Appclick Practitioner (2025)</li>
            <li>Winner – Hackathon 2025 (Voyager Flight Booking App)</li>
            <li>Open-source Contributor – React & Node.js libraries</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
