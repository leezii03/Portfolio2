import React from "react";
import icons from "../data/icons";
import projects from "../data/projects";
import { Link } from "react-router-dom";
import images from "../data/images";

const techColorMap = {
  'HTML': "bg-orange-500 text-white",
  'CSS': "bg-blue-500 text-white",
  'Bootstrap': "bg-purple-500 text-white",
  'JavaScript': "bg-yellow-400 text-black",
  'React': "bg-cyan-500 text-white",
  'React Native': "bg-cyan-500 text-white",
  'TailwindCSS': "bg-sky-400 text-white",
  'Superbase': "bg-green-600 text-white",
  'PHP': "bg-indigo-600 text-white",
  'Laravel': "bg-red-500 text-white",
  'MySQL': "bg-blue-800 text-white",
  'TMDB API': "bg-blue-700 text-white",
  'App Write': 'bg-pink-500 text-white',
  'Expo': 'bg-black text-white',
};

function ProjectsSection() {
  return (
    <div className="py-14 px-4" id="project">
      <div className="text-center space-y-6 my-12 px-8">
        <h1 className="text-4xl font-bold">
          Featured <span className="text-blue-800">Projects</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.sort((a, b) => b.id - a.id).slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-md overflow-hidden text-center shadow-md"
          >
            <div className="h-48">
              {project.img ? (
                <img
                src={project.img}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              ) : (
                <div className="flex justify-center items-center h-full">
                  <img src={images.comingsoon} className="w-52 h-fit text-center" alt="" />
                </div>
              )}
            </div>

            <div className="p-4 space-y-6">
              <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1 rounded-full ${
                        techColorMap[tech] || "bg-gray-300 text-gray-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              <div>
                <h1 className="font-bold text-lg text-gray-800 mb-1">
                  {project.title}
                </h1>
                <p>{project.des}</p>
              </div>

              <div>
                <div className="flex gap-4">
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" title="Live Preview" className="w-6 h-6 hover:text-blue-800 duration-300">
                    {icons.link}
                  </a>
                  ) : (
                    <Link to={`/projects/${project.id}`} className="w-6 h-6" title="Live Preview">{icons.link}</Link>
                  )}

                  <a href={project.gitUrl} target="_blank" title="View GitHub" className="w-6 h-6 hover:text-blue-800 duration-300">
                    {icons.github}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-14 flex justify-center">
        <a
          href="https://github.com/leezii03"
          target="_blank"
          className="group bg-blue-800 text-white px-6 py-2 rounded-full flex items-center gap-x-2"
        >
          Check My Github
          <span className="w-4 h-4 group-hover:translate-x-2 duration-300">{icons.arrowright}</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectsSection;
