import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {Boxes,Contact,GraduationCap,Home,Info,User,Menu,X, Bell,} from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-section flex flex-row justify-between items-center  p-4 relative z-50 ">
                <div className="flex flex-row items-center gap-2">
          <div className="w-20">
            <img
              src="https://www.cocaspatna.ac.in/img/Logo_of_College_of_Commerce,_Arts_and_Science.png"
              alt="College of Commerce Logo"
              className="logo"
            />
          </div>
          <h1 className="text-xl font-semibold">MCA BY COCAS</h1>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row justify-around items-center gap-4 text-lg absolute md:static bg-[#FAF6E9] md:bg-transparent w-full md:w-auto left-0 top-25 md:top-auto p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className="flex flex-row items-center gap-2 font-semibold hover:text-blue-900 transition-all"
              style={({ isActive }) =>
                isActive ? { color: "#1E3A8A", scale: 1.07 } : {}
              }
            >
              <span>
                <Home />
              </span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faculty"
              className="flex flex-row items-center gap-2 font-semibold hover:text-blue-900 transition-all"
              style={({ isActive }) =>
                isActive ? { color: "#1E3A8A", scale: 1.07 } : {}
              }
            >
              <span>
                <GraduationCap />
              </span>
              Faculty
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/student"
              className="flex flex-row items-center gap-2 font-semibold hover:text-blue-900 transition-all"
              style={({ isActive }) =>
                isActive ? { color: "#1E3A8A", scale: 1.07 } : {}
              }
            >
              <span>
                <User />
              </span>
              Students
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/about"
              className="flex flex-row items-center gap-2 font-semibold hover:text-blue-900 transition-all"
              style={({ isActive }) =>
                isActive ? { color: "#1E3A8A", scale: 1.07 } : {}
              }
            >
              <span>
                <Info />
              </span>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notificaiton"
              className="flex flex-row items-center gap-2 font-semibold hover:text-blue-900 transition-all"
              style={({ isActive }) =>
                isActive ? { color: "#1E3A8A", scale: 1.07 } : {}
              }
            >
              <span>
                <Bell/>
              </span>
              Notifications
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
