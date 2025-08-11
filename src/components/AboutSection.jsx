import React from "react";
import icons from "../data/icons";
import { useNavigate } from "react-router-dom";


function AboutSection() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <div className="py-14">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
        About <span className="text-blue-800">Me</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-12 md:px-10">
        <div className="space-y-6 text-center">
          <h1 className="font-semibold text-2xl">
            Passionate Web Developer & Tech Creator
          </h1>
          <p className="text-[17px]">
            With over 2 years of experience in web development, I specialize in
            creating responsive, accessible, and performant web applications
            using modern technologies.
          </p>
          <p className="text-[17px]">
            I'm Passionate about creating elegant solutions to complex problems,
            and I'm constantly learning new technologies and techniques to stay
            at the forefront of the ever-evolving web landscape.
          </p>

          <button
            onClick={goToAbout}
            className="bg-blue-800 px-6 py-2 text-white rounded-full w-full sm:w-fit"
          >
            Know Me Better
          </button>
        </div>

        <div className="">
          <div className="flex items-start gap-4 p-6 mb-6 bg-white shadow-lg rounded-md transition hover:shadow-xl hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full">
              <div className="h-8 w-8 text-blue-800">{icons.code}</div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900 mb-1">
                Web Development
              </h1>
              <p className="text-gray-800 text-[15px]">
                Creating responsive websites and web applications using modern
                frameworks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 mb-6 bg-white shadow-lg rounded-md transition hover:shadow-xl hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full">
              <div className="h-8 w-8 text-blue-800">{icons.user}</div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900 mb-1">
                UX/UI Design
              </h1>
              <p className="text-gray-800 text-[15px]">
                Designing intuitive user interfaces and seamless user
                experiences.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-md transition hover:shadow-xl hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full">
              <div className="h-8 w-8 text-blue-800">{icons.bag}</div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900 mb-1">
                Project Management
              </h1>
              <p className="text-gray-800 text-[15px]">
                Leading projects from conception to completion with agile
                methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
