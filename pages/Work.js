import React, { useState } from "react";
import Anchor from "../components/Anchor";
import { workPortfolioData } from "../components/Work/WorkPortfolioData.js";
import ProjectCard from "../components/Work/ProjectCard";

function Work() {
  const [displayedWork, setDisplayedWork] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  function workSelector(e) {
    e.preventDefault();
    setDisplayedWork(!displayedWork);
  }

  function handleDark(e) {
    e.preventDefault();
    setDarkMode(prev => !prev);
    // localStorage.setItem("mode", toggleDarkMode ? "light" : "dark");
  }

  const portfolioArray = workPortfolioData.map(project => (
    <ProjectCard
      title={project.title}
      src={!darkMode ? project.src[1] : project.src[0]}
      // src={project.src}
      key={project.id}
      displayDarkModeToggle={project.displayDarkModeToggle}
      href={project.href}
      darkMode={darkMode}
      handleDark={handleDark}
    />
  ));

  return (
    <>
      <div className="flex justify-center space-x-4 my-10 ">
        <Anchor name={"Web Development"} value={"Web Development"} border />
        <Anchor name={"Photography"} value={"Photography"} border />
      </div>
      {portfolioArray}
    </>
  );
}

export default Work;
