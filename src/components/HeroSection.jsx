import React, { useEffect, useRef } from "react";
import icons from "../data/icons";
import Typed from "typed.js";

function HeroSection() {
  const el = useRef(null);

  // Initialize Typed.js
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-end Developer", "Web Designer", "Back-end Developer"],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const scrollToProject = () => {
    const project = document.getElementById("project");
    if (project) {
      project.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className="relative min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-4 py-12 md:py-0"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:justify-between py-12">
        <div className="max-w-lg md:text-left md:max-w-md lg:max-w-lg w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-800">LyLy</span> Theav
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mt-4 text-gray-700">
            Aspiring <span className="text-blue-800" ref={el}></span>
          </h2>
          <p className="text-base md:text-lg mt-4 text-gray-600 leading-relaxed">
            I create web experiences with modern technologies. Specializing in
            full-stack web development, I build interfaces that are both
            beautiful and functional.
          </p>

          <button
            onClick={scrollToProject}
            className="mt-6 bg-blue-800 text-white px-8 py-3 rounded-full w-full md:w-auto font-medium hover:bg-blue-700 transition"
          >
            View My Work
          </button>
        </div>

        <div className="flex-shrink-0">
          <img
            className="w-40 sm:w-48 md:w-56 lg:w-72 h-auto object-contain rounded-lg shadow-md"
            src="/images/1111.jpg"
            alt="LyLy Theav"
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 right-1/2 transform flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-600">Scroll</span>
        <span className="w-4 h-4 mt-1 text-blue-800">{icons.arrowdown}</span>
      </div>
    </div>
  );
}

export default HeroSection;
// return (
//   <div
//     id="hero"
//     className="relative h-screen flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4"
//   >
//     <h1 className="text-4xl md:text-6xl font-bold">
//       Hi, I'm <span className="text-blue-800">LyLy</span> Theav
//     </h1>
//     <p className="text-lg mt-4">
//       I create web experiences with modern technologies. Specializing in
//       full-stack web development, I build interfaces that are both beautiful
//       and functional.
//     </p>
//     <button
//       onClick={scrollToProject}
//       className="bg-blue-800 px-6 py-2 mt-8 text-white rounded-full"
//     >
//       View My Work
//     </button>
//     <div className="flex flex-col items-center absolute bottom-6 animate-bounce">
//       <span>Scroll</span>
//       <span className="w-4 h-4">{icons.arrowdown}</span>
//     </div>
//   </div>
// );
