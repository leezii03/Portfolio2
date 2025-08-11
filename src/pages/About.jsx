import React from "react";
import educations from "../data/education";

const skills = [
  "Front-end: HTML, CSS, JavaScript, React.js, Tailwindcss",
  "Back-end: PHP, Laravel",
  "Database: MySQL",
  "Tools: Git, VS Code, Postman, Figma",
  "Other: Basic CCNA, Basic Mobile App Development, UX/UI Design",
];

const softSkills = [
  "Problem-solving",
  "Time Management",
  "Team Collaboration",
  "Adaptability",
  "Communication",
];

const languages = ["Khmer (Native)", "English (Intermediate)"];

function About() {
  return (
    <div className="py-24 px-6 md:px-12">
      <h1 className="text-center mb-24 text-4xl font-bold text-blue-800 uppercase tracking-wider">
        Biography
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-10">
          <div className="flex justify-between gap-x-4">
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-400 pb-2 uppercase">
                Personal Info
              </h2>
              <ul className="space-y-2 text-gray-700 text-base">
                <li>
                  <span className="font-medium">Name:</span> LyLy Theav
                </li>
                <li>
                  <span className="font-medium">Date of Birth:</span> <span className="blur-sm text-blue-600">03-09-2004</span>
                </li>
                <li>
                  <span className="font-medium">Email:</span>
                  lylytheav@gmail.com
                </li>
                <li>
                  <span className="font-medium">Phone:</span> +855 96 96 86 971
                </li>
                <li>
                  <span className="font-medium">City:</span> Phnom Penh
                </li>
              </ul>
            </div>

            <img
              src="/images/1111.jpg"
              alt="LyLy Profile"
              className="w-40 h-48 object-cover shadow-lg ring-4 ring-blue-300"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-400 pb-2 uppercase">
              Main Skills
            </h2>
            <ul className="list-disc list-inside marker:text-blue-800 space-y-2 text-gray-700 text-base">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-400 pb-2 uppercase">
              Soft Skills
            </h2>
            <ul className="list-disc list-inside marker:text-blue-800 space-y-2 text-gray-700 text-base">
              {softSkills.map((softskill, index) => (
                <li key={index}>{softskill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-400 pb-2 uppercase">
              Languages
            </h2>
            <ul className="list-disc list-inside marker:text-blue-800 space-y-2 text-gray-700 text-base">
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-400 pb-2 uppercase">
              Education
            </h2>
            <div className="text-gray-700 text-base grid grid-cols-1 md:grid-cols-2">
              {educations.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-800 pl-4 mb-6"
                >
                  <p className="font-semibold text-blue-800">{edu.year}</p>
                  <p>{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10 text-gray-800 text-lg leading-relaxed tracking-wide">
          <div>
            <p>
              Hello! I'm
              <span className="font-semibold text-blue-700">Theav LyLy</span>, a
              passionate developer from Cambodia with a keen interest in
              building modern, user-friendly web applications. I'm a fourth-year
              Computer Science student with hands-on experience in both
              front-end and back-end development.
            </p>
            <br />
            <p>
              I love crafting clean, interactive UIs using
              <span className="font-medium text-blue-600 ms-1">
                React.js
              </span>{" "}
              and
              <span className="font-medium text-blue-600 ms-1">
                Tailwind CSS
              </span>
              , and managing robust back-end logic with
              <span className="font-medium text-blue-600 ms-1">PHP</span> and
              <span className="font-medium text-blue-600 ms-1">Laravel</span>.
            </p>
            <br />
            <p>
              I'm currently learning on exciting projects like a full-stack
              e-commerce website, while also preparing for my{" "}
              <span className="font-medium text-blue-600">CCNA</span>
              certification to deepen my networking knowledge.
            </p>
            <br />
            <p>
              I'm always eager to explore new technologies and take on
              challenging problems to grow as a developer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-400 pb-2 uppercase">
              Career Objective
            </h2>
            <p>
              To become a versatile full-stack developer capable of designing,
              building, and maintaining innovative web solutions, while
              continuously improving my technical, problem-solving and communication skills.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-400 pb-2 uppercase">
              Projects
            </h2>
            <p className="text-2xl font-semibold animate-bounce text-red-600">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
