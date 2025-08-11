import React from "react";
import icons from "../data/icons";

function HeroSection() {
  const scrollToProject = () => {
    const project = document.getElementById("project");
    if (project) {
      project.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I'm <span className="text-blue-800">LyLy</span> Theav
      </h1>
      <p className="text-lg mt-4">
        I create web experiences with modern technologies. Specializing in
        full-stack web development, I build interfaces that are both beautiful
        and functional.
      </p>
      <button
        onClick={scrollToProject}
        className="bg-blue-800 px-6 py-2 mt-8 text-white rounded-full"
      >
        View My Work
      </button>
      <div className="flex flex-col items-center absolute bottom-6 animate-bounce">
        <span>Scroll</span>
        <span className="w-4 h-4">{icons.arrowdown}</span>
      </div>
    </div>
  );
}

export default HeroSection;
