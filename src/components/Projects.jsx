import React from "react";
import cart from "/Users/loganellsworth/Documents/Programming/LocalPersonalSite/PersonalWebsite/src/images/cart.png";
import ltb from "/Users/loganellsworth/Documents/Programming/LocalPersonalSite/PersonalWebsite/src/images/ltb.png";
import classi from "/Users/loganellsworth/Documents/Programming/LocalPersonalSite/PersonalWebsite/src/images/class.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      preview: ltb,
      alt: "3img",
      title: "Brewery Website",
      demo: "Built a fully functional website for a brewery using MySQL, Express, React, Node, and Tailwind CSS. This project was done with a team of three people. We frequently reviewed the objectives determined through client consultations, and we performed a demonstration of the finished product and provided documentation for the client.",
      code: "https://github.com/prolling/Lake-Time-Brewery-Website",
    },
    {
      id: 2,
      preview: cart,
      alt: "3img",
      title: "Shopping Website",
      demo: "Built a simulated shopping website with a team of three people. We used Bootstrap and React for this project.",
      code: "https://github.com/EllsworthLogan/ShoppingCartSite",
    },
    {
      id: 3,
      preview: classi,
      alt: "3img",
      title: "Image Classifier",
      demo: "Built and trained a neural network on project-specific scraped data to classify an image as one of four breeds of cat and dog. Utilized TensorFlow, OpenCV, Matplotlib.",
      code: "https://github.com/EllsworthLogan/ImageClassifier",
    },
  ];

  return (
    <div name="projects" className="w-full h-full md:h-screen bg-blue-100">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center">
          <p className="text-5xl font-bold py-2 border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 font-bold">Check out some of my recent work!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* Maps a project object to a project space*/}
          {projects.map((project) => (
            <div
              key={project.id}
              className="hover:scale-105 duration-200  shadow-md shadow-gray-600 rounded-lg"
            >
              <p className="text-center text-2xl font-bold">{project.title}</p>
              <img
                src={project.preview}
                alt={project.alt}
                className="rounded-md"
              />
              <div className="p-2">{project.demo}</div>
              <div className="flex justify-center items-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 rounded-md border-2 border-black my-2">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    View Demo
                  </a>
                </button> */}
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
