import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const [active, setActive] = useState("");
  return (
    <>
      <header className="header">
        <NavLink
          to="/"
          className="bg-white font-bold flex justify-center items-center w-10 h-10 rounded-lg shadow-lg hover:shadow-xl blue-gradient_text"
        >
          <p>3D</p>
        </NavLink>
        <nav className="flex gap-7 text-lg font-medium">
          <NavLink
            to="/about"
            onClick={() => setActive("about")}
            className={`${active === "about" ? "text-blue-500" : "text-black"}`}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setActive("projects")}
            className={`${
              active === "projects" ? "text-blue-500" : "text-black"
            }`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setActive("contact")}
            className={`${
              active === "contact" ? "text-blue-500" : "text-black"
            }`}
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
}
