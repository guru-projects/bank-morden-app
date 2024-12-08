import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex items-center navbar">

      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-none hidden sm:flex  justify-end items-center flex-1 space-x-10">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className="font-poppins cursor-pointer font-normal text-[1rem] text-white">
            <a href={`#${nav.title}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28] h-[28] object-contain cursor-pointer"
          onClick={() => setToggle((perv) => !perv)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient absolute top-20 right-0 min-w-[140px] sidebar p-6 rounded-xl mx-4 my-2`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1 space-y-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className="font-poppins cursor-pointer font-normal text-[1rem] text-white">
            <a href={`#${nav.title}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
