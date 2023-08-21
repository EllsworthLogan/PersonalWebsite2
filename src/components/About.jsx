import React from "react";

const About = () => {
  const times = [
    {
      id: "1",
      time: "Summer 2022",
      company: "Robison Trucking",
      title: "Summer data Intern",
      desc: "",
      desc2: "",
    },
    {
      id: "2",
      time: "Fall 2023",
      company: "Iowa State University",
      title: "Undergraduate research in marketing",
      desc: "Write programs to automate research tasks",
      desc2: "",
    },
    {
      id: "3",
      time: "Spring 2023",
      company: "Iowa State University Computer Science Department",
      title: "Undergraduate research in robotics",
      desc: "",
      desc2: "",
    },
    {
      id: "4",
      time: "Summer 2023",
      company: "Kent Corporation",
      title: "Networking IT Intern",
      desc: "Build and troubleshoot networks.",
      desc2: "Receive training in networking and security, servers and systems, and database administration.",
    },
  ];

  return (
    <div name="about" className="w-full h-full md:h-screen bg-blue-100">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center">
          <h3 className="text-5xl font-bold py-2  border-b-4 border-gray-500">
            Work History
          </h3>
        </div>
        <div className="">
          <div className="flex justify-center">
            <ul className="flex flex-col gap-8">
              {/* Maps a time object to a list element*/}
              {times.map((time) => (
                <li
                  key={time.id}
                  className="hover:scale-105 duration-200 py-4 px-4 border-2 border-black shadow-md shadow-gray-600"
                >
                  <ul>
                    <li>{time.time}</li>
                    <li className="text-xl font-bold">{time.company}</li>
                    <li className="">{time.title}</li>
                    <li>{time.desc}</li>
                    <li>{time.desc2}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
