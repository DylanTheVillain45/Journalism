import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/data.js";
import JournalismLogo from "../assets/JournalismLogo.png";
function Nav() {
  return (
    <nav className="py-2 pb-3 border-b-2 border-red bg-[#f9f9ec] drop-shadow-lg shadow-[#ff8f8f] z-50">
      <div className="w-full flex items-center">
        <div className="ml-8 flex-grow-0">
          <img src={JournalismLogo} alt="" className="lg:w-48 md:w-40 w-0" />
        </div>
        <div className="pt-8 mx-auto">
          <h1 className="xl:text-7xl lg:text-6xl text-5xl font-title capitalize justify-self-center flex-grow text-center">
            the asti phoenix
          </h1>
          <div className="w-full px-[20%] items-center justify-center text-lg flex flex-row gap-8 mt-4">
            {navLinks.map((item, index) => (
              <div key={index}>
                <Link
                  to={item}
                  className="font-serif hover:text-gray-500 transition-all duration-200"
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
