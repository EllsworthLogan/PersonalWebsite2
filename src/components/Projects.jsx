import React from "react";
import cart from "/Users/logan/Desktop/logansite/src/images/cart.png";
import ltb from "/Users/logan/Desktop/logansite/src/images/ltb.png";
import classi from "/Users/logan/Desktop/logansite/src/images/class.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      preview: ltb,
      alt: "3img",
      title: "Brewery Website",
      demo: "https://www.google.com",
      code: "https://github.com/prolling/Lake-Time-Brewery-Website",
    },
    {
      id: 2,
      preview: cart,
      alt: "3img",
      title: "Shopping Website",
      demo: "https://www.google.com",
      code: "https://www.yahoo.com",
    },
    {
      id: 3,
      preview: classi,
      alt: "3img",
      title: "Image Classifier",
      demo: "https://www.google.com",
      code: "https://www.yahoo.com",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full h-full md:h-screen bg-gradient-to-b to-gray-900 from-blue-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Projects
          </p>
          <p className="py-6">Some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* Maps a project object to a project space*/}
          {projects.map((project) => (
            <div className="hover:scale-105 duration-200  shadow-md shadow-gray-600 rounded-lg">
              <p className="text-center text-2xl font-bold">{project.title}</p>
              <img
                src={project.preview}
                alt={project.alt}
                className="rounded-md"
              />
              <div className="flex justify-center items-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 rounded-md border-2 border-black my-2">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    View Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 rounded-md border-2 border-black my-2">
                  <a href={project.code} target="_blank" rel="noreferrer">
                    See Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
