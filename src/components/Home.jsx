import React from "react";
import me from "/Users/loganellsworth/Documents/Programming/LocalPersonalSite/PersonalWebsite/src/images/portrait.jpg";
import { BsArrowRightSquare } from "react-icons/bs";
import { Link as ReactScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-blue-100"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="px-5 flex flex-col justify-center h-full text-white max-w-2xl">
          <h2 className="text-4xl sm:text-7xl font-bold py-4">
            I'm Logan Ellsworth
          </h2>
          <p>
            I am a Computer Science student at Iowa State University who has a strong interest in the
            areas of <b>artificial intelligence</b> and <b>robotics</b>. My
            curiosity for these subjects initially arose from a deep fascination
            with <b>neuroscience</b> and <b>artificial general intelligence</b>.
            I am dedicated to expanding my knowledge and expertise in these
            fields and seeking out opportunities to make a meaningful impact
            within them.
          </p>
          <div>
            <ReactScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="group w-fit flex items-center rounded-md bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-3 my-2 cursor-pointer hover:scale-105 duration-200"
            >
              <div className="pr-2">Projects</div>
              <span className="group-hover:rotate-90 duration-200">
                <BsArrowRightSquare />
              </span>
            </ReactScrollLink>
          </div>
        </div>
        <div>
          <img
            src={me}
            alt="me"
            className="rounded-2xl mx-auto w-1/3 md:w-full mb-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
