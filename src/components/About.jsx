import React from "react";
import { BsDashLg } from "react-icons/bs";

const About = () => {
  const times = [
    {
      id: "",
      time: "Spring 2023",
      company: "Iowa State University Computer Science Department",
      desc: "Undergraduate research in robotics",
    },
    {
      id: "",
      time: "Summer 2023",
      company: "Kent Corporation",
      desc: "Desktop Services Tech Intern",
    },
  ];

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-blue-200 to-blue-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center md:h-screen">
        <h3 className="text-4xl font-bold py-4 text-white">
          What I've Been Up To
        </h3>
        <ul className="flex-col justify-center items-center px-5">
          {/* Maps a time object to a list element*/}
          {times.map((time) => (
            <li className="flex flex-col px-3 justify-center items-center float-left">
              <ul>
                <li>{time.time}</li>
                <li className="font-bold">{time.company}</li>
                <li>{time.desc}</li>
              </ul>
              <BsDashLg className="rotate-90" />
              <BsDashLg className="rotate-90" />
              <BsDashLg className="rotate-90" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
