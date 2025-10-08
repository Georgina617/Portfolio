import React from "react";
import { Link } from "react-scroll";

const Button = () => {
  return (
    <Link to="contact" smooth={true} duration={500}>
      <div>
        <a
          href="#contact"
          className="px-6 py-3 rounded-md bg-sky-500 hover:bg-sky-600 transition text-center"
        >
          Let's Talk
        </a>
      </div>
    </Link>
  );
};

export default Button;
