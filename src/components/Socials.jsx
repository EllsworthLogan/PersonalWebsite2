import React from "react";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFilePdf,
} from "react-icons/ai";

const Socials = () => {
  //Array containing social elements with three properties
  const links = [
    {
      id: "GitHub",
      link: "https://github.com/EllsworthLogan",
      icon: <AiFillGithub size={30} />,
    },
    {
      id: "LinkedIn",
      link: "https://www.linkedin.com/in/loganellsworth/",
      icon: <AiFillLinkedin size={30} />,
    },
    {
      id: "Resume",
      link: "/resume.pdf",
      icon: <AiOutlineFilePdf size={30} />,
      download: true,
    },
    {
      id: "email",
      link: "mailto:lte@iastate.edu",
      icon: <AiOutlineMail size={30} />,
    },
  ];

  return (
    <div className="hidden lg:flex lg:flex-col lg:top-[35%] lg:left-0 lg:fixed">
      <ul>
        {/* Maps a social link object to a list element */}
        {links.map((link) => (
          <li
            key={link.id}
            className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 capitalize ml-[-100px] rounded-md hover:ml-[-10px] duration-300"
          >
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              download={link.download ? link.link : undefined}
              className="flex justify-between items-center w-full text-white"
            >
              <>
                {link.id} {link.icon}
              </>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
