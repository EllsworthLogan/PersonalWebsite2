import React from "react";

const About = () => {
  const times = [
    {
      id: "",
      time: "Fall 2023",
      company: "Iowa State University Computer Science Department",
      title: "Undergraduate research in marketing",
      desc: "Write programs to automate research tasks",
    },
    {
      id: "",
      time: "Spring 2023",
      company: "Iowa State University Computer Science Department",
      title: "Undergraduate research in robotics",
      desc: "",
    },
    {
      id: "",
      time: "Summer 2023",
      company: "Kent Corporation",
      title: "Desktop Services Tech Intern",
      desc: "",
    },
  ];

  return (
    <div name="about" className="w-full h-full md:h-screen bg-blue-100">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-16">
          <h3 className="text-4xl font-bold inline border-b-4 border-black">
            What I've Been Up To
          </h3>
        </div>
        <div className="">
          <div className="flex justify-center">
            <ul className="flex flex-col gap-8">
              {/* Maps a time object to a list element*/}
              {times.map((time) => (
                <li className="hover:scale-105 duration-200 py-4 px-4 border-2 border-black">
                  <ul>
                    <li>{time.time}</li>
                    <li className="font-bold">{time.company}</li>
                    <li>{time.title}</li>
                    <li>{time.desc}</li>
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
