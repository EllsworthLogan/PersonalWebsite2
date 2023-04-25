import React from "react";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFilePdf,
} from "react-icons/ai";

const links = [
  {
    key: "1",
    id: "GitHub",
    link: "https://github.com/EllsworthLogan",
    icon: <AiFillGithub size={30} />,
  },
  {
    key: "2",
    id: "LinkedIn",
    link: "https://www.linkedin.com/in/loganellsworth/",
    icon: <AiFillLinkedin size={30} />,
  },
  {
    key: "3",
    id: "Resume",
    link: "https://github.com/EllsworthLogan/PersonalWebsite/raw/main/public/resume.pdf",
    icon: <AiOutlineFilePdf size={30} />,
    download: true,
  },
  {
    key: "4",
    id: "email",
    link: "mailto:lte@iastate.edu",
    icon: <AiOutlineMail size={30} />,
  },
];

const Contact = () => {
  return (
    <div className="w-full h-full md:h-screen">
      <div
        name="contact"
        className="w-full h-full  bg-gradient-to-b to-gray-700 from-blue-100"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-12 text-center">
            <p className="text-5xl font-bold py-2 border-b-4 border-gray-500">
              Contact Me
            </p>
            <p className="pt-6 font-bold">
              Feel free to check out my GitHub or LinkedIn page, download my
              resume, or send me an email!{" "}
            </p>
          </div>

          <div className="flex justify-center">
            <ul className="">
              {/* Maps a social link object to a list element */}
              {links.map((link) => (
                <li
                  key={link.key}
                  className="flex justify-between items-center my-4 w-40 h-14 px-4 bg-gray-500 capitalize rounded-md hover:scale-110 duration-200 border-2 border-black hover:shadow-md hover:shadow-white"
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
