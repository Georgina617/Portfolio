import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-center py-10 relative">
      <nav aria-label="footer links" className="mb-6">
        <ul className="flex justify-center flex-wrap gap-4 sm:gap-8 md:gap-12 text-white text-sm sm:text-base md:text-lg font-medium">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="https://www.facebook.com/omolola.odusanya.37/"
          target="_blank"
          className="bg-[#11172b] w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
        >
          <FaFacebookF size={16} />
        </a>
        <a
          href="https://twitter.com/lollipop2529"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#11172b] w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
        >
          <FaTwitter size={16} />
        </a>
        <a
          href="https://instagram.com/_that_lola"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#11172b] w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
        >
          <FaInstagram size={16} />
        </a>
        <a
          href="https://github.com/Georgina617"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#11172b] w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
        >
          <FaGithub size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/georgina-odusanya-ba6892380/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#11172b] w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
        >
          <FaLinkedinIn size={16} />
        </a>
      </div>

      <p className="text-sm text-black mb-8">
        ©Georgina odusanya. All rights reserved.
      </p>
    </footer>
  );
}
