import { Code, Palette, Settings, Smartphone, Zap } from 'lucide-react';
import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
const services = [
  {
    title: 'Web Development',
    description:
      'Full-stack web development using modern technologies like React, Node.js, Express, MongoDB, PHP, and Laravel. I build scalable, secure, and high-performing applications — from responsive frontends to robust backend APIs and databases.',
    features: [
      'React',
      'Node.js',
      'MongoDB',
      'Express',
      'PHP',
      'Laravel',
      'Clean Code',
    ],
    icon: <Code size={40} />,
    color: 'text-blue-500',
    dotColor: 'bg-blue-500',
    hoverBg: 'hover:bg-blue-500',
  },
  {
    title: 'Responsive Design',
    description:
      'Mobile-first approach ensuring your website looks perfect on all devices. Seamless user experience across desktop,tablet and mobile',
    features: [
      'flexible layouts',
      'Cross Browser',
      'Mobile-first',
      'Touch-friendly',
    ],
    icon: <Smartphone size={40} />,
    color: 'text-pink-500',
    dotColor: 'bg-pink-500',
    hoverBg: 'hover:bg-pink-500',
  },
  {
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive interfaces that engage users and drive conversions. Modern design principles with focus on usability and accessibility.',
    features: [
      'User-Centered',
      'Modern Design',
      'Accessibility',
      'Wireframing',
    ],
    icon: <Palette size={40} />,
    color: 'text-orange-500',
    dotColor: 'bg-orange-500',
    hoverBg: 'hover:bg-orange-500',
  },
  {
    title: 'Performance Optimatization',
    description:
      'Lightning-fast loading times and smooth interactions. Optimized images, code splitting, and best practices for superior performance.',
    features: [
      'Fast Loading',
      'Code Splitting',
      'Image Optimization',
      'Caching',
    ],
    icon: <Zap size={40} />,
    color: 'text-yellow-500',
    dotColor: 'bg-yellow-500',
    hoverBg: 'hover:bg-yellow-500',
  },
  {
    title: 'SEO Optimatization',
    description:
      'Search engine optimized websites with proper meta tags, structured data, and performance metrics to boost your online visibility.',
    features: ['Meta Tags', 'Core Web Vitals', 'Structured Data', 'Analytics'],
    icon: <Zap size={40} />,
    color: 'text-green-500',
    dotColor: 'bg-green-500',
    hoverBg: 'hover:bg-green-500',
  },
  {
    title: 'Maintenance & Support',
    description:
      'Ongoing support, updates, and maintenance to keep your website running smoothly. Regular backups and security monitoring.',
    features: ['Regular Updates', 'Security', 'Bug Fixes', '24/7 support'],
    icon: <Settings size={40} />,
    color: 'text-purple-500',
    dotColor: 'bg-purple-500',
    hoverBg: 'hover:bg-purple-500',
  },
];
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="services"
      className="min-h-screen bg-gray-900 text-white py-10 px-6"
    >
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-3xl font-bold text-center mb-6"
      >
        My Services
      </h2>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Tailored frontend development that combines innovation, performance, and
        design to help your brand stand out.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div
            key={idx}
            className={`group relative p-6 rounded-2xl bg-gray-800 shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-[1.03] hover:-translate-y-2`}
          >
            <div
              className={`p-3 rounded-xl w-fit mb-4 transition-colors duration-300 text-${s.color} group-hover:text-white`}
            >
              {s.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-gray-400 mb-4">{s.description}</p>
            <ul className="text-sm grid grid-cols-2 gap-2">
              {s.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${s.dotColor}`}></span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-gray-800 shadow-lg">
          <span className="font-semibold text-lg">
            Ready to start your project?
          </span>
          <Link to="contact">
            <button
              className="px-5 py-2 rounded-full font-bold text-white 
                         bg-gradient-to-r from-cyan-400 to-blue-500 
                         hover:opacity-90 transition"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
