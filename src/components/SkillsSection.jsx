import React, { useState } from "react";

const skills = [
  // frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "ReactJS", level: 90, category: "Frontend" },
  { name: "React Native", level: 55, category: "Frontend" },
  { name: "TypeScript", level: 55, category: "Frontend" },
  { name: "Bootstrap", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "JQuery", level: 60, category: "Frontend" },

  // backend
  { name: "PHP", level: 90, category: "Backend" },
  { name: "Laravel", level: 75, category: "Backend" },
  { name: "MySQL", level: 85, category: "Backend" },

  // languages
  { name: "Java", level: 85, category: "Languages" },
  { name: "C#", level: 75, category: "Languages" },

  // tools
  { name: "Git/GitHub", level: 75, category: "Tools" },
];

const buttons = ["All", "Frontend", "Backend", "Languages", "Tools"];

function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Determine current category from buttons array
  const activeCategory = buttons[activeIndex];

  // Filter skills based on active category, or show all if "All"
  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div className="py-14">
      <h1 className="text-center mb-8 text-4xl font-bold">
        My <span className="text-blue-800">Skills</span>
      </h1>
      <div className="flex flex-wrap gap-x-8 justify-center">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-8 py-2 rounded-full mb-6 transition ${
              activeIndex === index ? "bg-blue-800 text-white" : "border border-blue-800"
            }`}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-12 2xl:px-0">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition hover:scale-105"
          >
            <div className="mb-3 text-lg font-semibold">{skill.name}</div>
            <div className="relative w-full h-2 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-2 bg-blue-800 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="text-right text-sm text-gray-500 mt-1">
              {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
