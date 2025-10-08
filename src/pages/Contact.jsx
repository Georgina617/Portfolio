import { Mail, Phone, Sparkles } from "lucide-react";
import React, { useEffect } from "react";
import { IoLogoLinkedin } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6"
    >
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="py-16 text-center flex flex-col items-center"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-white animate-spin" />
          <h1 className="text-3xl sm:text-4xl font-bold ">Contact me</h1>
          <Sparkles className="w-6 h-6 text-white animate-spin" />
        </div>
        <p className="text-gray-400 text-md text-center mt-6 max-w-2xl mx-auto ">
          Let’s turn your vision into reality. <br />
          Connect with me through the option that works best for you.
        </p>
      </div>
      {/* contact part */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl items-start justify-center pb-16">
        {/* right side */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <div className="p-6 rounded-xl border border-sky-500 bg-sky-500 hover:bg-transparent transition-all duration-300 cursor-pointer">
            <Mail className="w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-1">georginaodusanya@gmail.com</p>
            <a
              href="mailto:georginaodusanya@gmail.com"
              className="mt-2 inline-block text-sm text-gray-500 "
            >
              Send a message
            </a>
          </div>

          <div className="p-6 rounded-xl border border-sky-500 bg-sky-500 hover:bg-transparent transition-all duration-300 cursor-pointer">
            <IoLogoLinkedin className="text-white w-8 h-8 mb-2" />
            <h3 className="text-xl font-bold">LinkedIn</h3>
            <p className="mt-1">Georgina Odusanya</p>
            <a
              href="https://www.linkedin.com/in/georgina-odusanya-ba6892380/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-gray-500"
            >
              send a message
            </a>
          </div>
          <div className="p-6 rounded-xl border border-sky-500 bg-sky-500 hover:bg-transparent transition-all duration-300 cursor-pointer">
            <Phone className="text-white w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold">Whatsapp</h3>
            <p className="mt-1">+2349058453154</p>
            <a
              href="https://wa.me/2349058453154"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-gray-500"
            >
              send a message
            </a>
          </div>
        </div>
        {/* right side */}
        <div className="bg-[#141b2d] p-8 rounded-xl shadow-lg w-full md:w-2/3">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 rounded-lg bg-transparent border border-sky-500 focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-transparent border border-sky-500 focus:ring-2 focus:ring-sky-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-lg bg-transparent border border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
            ></textarea>
            <button
              type="submit"
              className="bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition"
            >
              send a message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
