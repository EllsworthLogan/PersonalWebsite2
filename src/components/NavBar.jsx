import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link as ReactScrollLink } from "react-scroll";

const NavBar = () => {
  //Creates a state for the dropdown menu that is set to false by default
  const [drop, dropDown] = useState(false);

  //Array containing link objects with two properties (to be used in navbar)
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center w-full h-24 px-4 text-white bg-gray-900">
        <div>
          <h1 className="font-signature text-5xl cursor-pointer hover:scale-105 hover:text-gray-500 duration-200">
            LE
          </h1>
        </div>
        <ul className="hidden md:flex">
          {/* Maps a link object to a list element*/}
          {links.map((link) => (
            <li className="px-4 cursor-pointer font-medium hover:scale-105 hover:text-gray-500  duration-200 capitalize">
              <ReactScrollLink to={link.link} smooth={true} duration={500}>
                {link.link}
              </ReactScrollLink>
            </li>
          ))}
        </ul>

        {/* Provides dropdown functionality */}
        <div
          onClick={() => dropDown(!drop)}
          className="pr-4 z-10 cursor-pointer hover:scale-105 hover:text-gray-500 duration-200 md:hidden"
        >
          {drop ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* If drop, then ____ */}
        {drop && (
          <ul
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen
        bg-gradient-to-b from-gray-900 to-gray-600"
          >
            {/* Maps a link object to a list element*/}
            {links.map((link) => (
              <li className="px-4 py-6 text-4xl cursor-pointer font-medium hover:scale-105 hover:text-gray-500  duration-200 capitalize">
                <ReactScrollLink
                  to={link.link}
                  smooth={true}
                  duration={500}
                  onClick={() => dropDown(!drop)}
                >
                  {link.link}
                </ReactScrollLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
