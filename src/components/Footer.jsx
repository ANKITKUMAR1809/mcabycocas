import React from "react";
import { NavLink } from "react-router-dom";
import { Home, GraduationCap, User, Boxes, Info, Contact } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <img
              src="https://www.cocaspatna.ac.in/img/Logo_of_College_of_Commerce,_Arts_and_Science.png"
              alt="College of Commerce Logo"
              className="w-20 mx-auto md:mx-0"
            />
            <h1 className="text-xl font-semibold mt-2">MCA BY COCAS</h1>
            <p className="text-sm mt-2">
              Empowering students with knowledge and skills for a brighter future.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="flex flex-wrap justify-center gap-4">
              <li>
                <NavLink
                  to="/"
                  className="flex items-center gap-2 text-sm hover:text-blue-400 transition-all"
                >
                  <Home size={16} />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faculty"
                  className="flex items-center gap-2 text-sm hover:text-blue-400 transition-all"
                >
                  <GraduationCap size={16} />
                  Faculty
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/student"
                  className="flex items-center gap-2 text-sm hover:text-blue-400 transition-all"
                >
                  <User size={16} />
                  Students
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/misc"
                  className="flex items-center gap-2 text-sm hover:text-blue-400 transition-all"
                >
                  <Boxes size={16} />
                  Miscellaneous
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="flex items-center gap-2 text-sm hover:text-blue-400 transition-all"
                >
                  <Info size={16} />
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="flex items-center gap-2 text-sm hover:text-blue-400 transition-all"
                >
                  <Contact size={16} />
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:mcabycocas@gmail.com"
                className="text-blue-400 hover:underline"
              >
                mcabycocas@gmail.com
              </a>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a href="tel:+1234567890" className="text-blue-400 hover:underline">
                +123 456 7890
              </a>
            </p>
            <p className="text-sm">
              Address: College of Commerce, Arts & Science, Patna
            </p>
            <p className="text-sm mt-2">
              <a
                href="https://www.google.com/maps?q=College+of+Commerce,+Arts+and+Science,+Patna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Get Directions on Google Maps
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 MCA BY COCAS. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;