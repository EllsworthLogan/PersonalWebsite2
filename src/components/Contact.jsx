import React from "react";

const Contact = () => {
  return (
    <div
      name="full"
      className="flex justify-center w-full h-screen bg-gradient-to-b from-blue-200 to-blue-300"
    >
      <div>
        <div>
          <p>Contact</p>
          <p>Submit this form to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="flex items-center mx-auto rounded-md px-6 py-3 bg-gradient-to-r  text-white from-blue-700 to-blue-500 cursor-pointer hover:scale-105 duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
