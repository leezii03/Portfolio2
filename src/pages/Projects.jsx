import React from "react";
import { Link } from "react-router-dom";
import icons from "../data/icons";
import projects from "../data/projects";
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

const statusBadgeMap = {
  Finished: "bg-green-500 text-white",
  "In Progress": "bg-yellow-500 text-black",
};

const typeBadgeMap = {
  "Front-End": "bg-blue-600 text-white",
  "Back-End": "bg-purple-600 text-white",
};

export default function Projects() {
  return (
    <div className="min-h-screen px-4 py-20 md:px-12">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        My Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image with status badge */}
              <div className="relative">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div className="flex justify-center items-center h-48">
                    <img
                      src={images.comingsoon}
                      className="w-52 h-fit text-center"
                      alt=""
                    />
                  </div>
                )}
                <span
                  className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full font-semibold ${
                    statusBadgeMap[project.status] ||
                    "bg-gray-300 text-gray-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-grow gap-y-4">
                <div className="space-y-3 flex-grow">
                  {/* Title + Type Badge */}
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-bold text-blue-800">
                      {project.title}
                    </h2>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        typeBadgeMap[project.type] ||
                        "bg-gray-300 text-gray-800"
                      }`}
                    >
                      {project.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">{project.des}</p>

                  {/* Features */}
                  <ul className="text-sm list-disc list-inside text-gray-500">
                    {project.features?.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
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
                </div>

                {/* Footer pinned to bottom */}
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-sm text-blue-800 font-medium hover:underline"
                    >
                      View Details
                    </Link>
                    <div className="flex gap-x-4">
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-800 w-6 h-6"
                        title="View GitHub"
                      >
                        {icons.github}
                      </a>

                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          title="Live Preview"
                          className="w-6 h-6 hover:text-blue-800 duration-300"
                        >
                          {icons.eye}
                        </a>
                      ) : (
                        <Link
                          to={`/projects/${project.id}`}
                          className="w-6 h-6"
                          title="Live Preview"
                        >
                          {icons.link}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
