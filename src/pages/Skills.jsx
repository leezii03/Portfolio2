import React, { useState } from "react";
import skillData from "../data/skills";

const levelColors = {
  Expert: "bg-green-200 text-green-800",
  Advanced: "bg-blue-200 text-blue-800",
  Intermediate: "bg-yellow-200 text-yellow-800",
  Basic: "bg-yellow-600 text-white",
  ComingSoon: "bg-red-600 text-white",
};

function Skills() {
  const [selected, setSelected] = useState("All");

  const allSkills = Object.values(skillData).flat();
  const skillsToShow = selected === "All" ? allSkills : skillData[selected];
  const categories = ["All", ...Object.keys(skillData)];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center pt-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-6 uppercase">
            My Skills
          </h1>
          {selected === "ComingSoon" ? (
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              I aim to learn these programming languages, DBMS, and new
              technologies in the future to enhance my experience and knowledge,
              and to better prepare myself to adapt to the evolving IT industry.
            </p>
          ) : (
            <p className="text-gray-600 mb-10">
              Explore my skill set, experience, and project applications.
            </p>
          )}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selected === category
                  ? "bg-blue-800 text-white"
                  : "bg-white text-blue-600 border border-blue-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div>
          {selected === "ComingSoon" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
              {skillsToShow.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl flex flex-col items-center shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-32 w-52">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <div className="p-6 space-y-4 text-center">
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                      {skill.level}
                    </span>

                    <h3 className="text-lg font-semibold text-gray-800">
                      {skill.name}
                    </h3>

                    <p className="text-sm text-gray-500 text-center">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
              {skillsToShow.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-x-2">
                      <img
                        src={skill.image}
                        alt=""
                        className="w-8 h-8 object-contain"
                      />
                      <h2 className="text-lg font-semibold text-blue-800">
                        {skill.name}
                      </h2>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        levelColors[skill.level]
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {skill.description}
                  </p>
                  {skill.level !== "ComingSoon" && (
                    <>
                      <p className="text-sm text-gray-500 mb-1">
                        <strong>Tools:</strong> {skill.tools.join(", ")}
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Projects:</strong>{" "}
                        {skill.projectsUsedIn.join(", ")}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
