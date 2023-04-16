import React from "react";
import me from "/Users/logan/Desktop/untitled folder 2/logansite/src/images/portrait.jpg";
import { BsArrowRightSquare } from "react-icons/bs";
import { Link as ReactScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-blue-200"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="px-5 flex flex-col justify-center h-full text-white">
          <h2 className="text-4xl sm:text-7xl font-bold py-4">
            I'm a Computer Science Student
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            cupiditate quasi, ipsam reiciendis exercitationem voluptatum,
            doloribus veritatis eum esse hic, dolore dolores commodi autem
            blanditiis omnis ipsa facilis. Modi, aliquid!
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
