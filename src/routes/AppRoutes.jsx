import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import ScrollToTop from "../components/ScrollToTop";

function AppRoutes() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
