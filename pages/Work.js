import React, { useState } from "react";
import Anchor from "../components/Anchor";
import { projectPortfolioData } from "../components/Work/projectPortfolioData.js";
import ProjectCard from "../components/Work/ProjectCard";
import Button from "../components/Button";

function Work() {
  const [displayedWork, setDisplayedWork] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState("");
  const [displayProjectDetailsModal, setDisplayProjectDetailsModal] =
    useState(false);

  function workSelector(e) {
    e.preventDefault();
    setDisplayedWork(!displayedWork);
  }

  function handleDark(e) {
    e.preventDefault();
    setDarkMode(prev => !prev);
    // localStorage.setItem("mode", toggleDarkMode ? "light" : "dark");
  }

  function findCurrentNote(id) {
    return (
      project.find(project => {
        return project.id === currentProjectId;
      }) || project[0]
    );
  }

  function handleModal(e, id) {
    e.preventDefault();
    setDisplayProjectDetailsModal(prev => !prev);
    findCurrentNote();
  }

  const portfolioArray = projectPortfolioData.map(project => (
    <ProjectCard
      key={project.id}
      title={project.title}
      resources={project.resources}
      src={
        !darkMode && project.displayDarkModeToggle
          ? project.src.light
          : darkMode && project.displayDarkModeToggle
          ? project.src.dark
          : project.src
      }
      displayDarkModeToggle={project.displayDarkModeToggle}
      href={project.href}
      darkMode={darkMode}
      handleDark={handleDark}
      handleModal={handleModal}

      // currentProjectId={findCurrentNote()}
    />
  ));
  console.log(currentProjectId);
  return (
    <>
      <div className="flex justify-center space-x-4 my-10 ">
        <Button name={"Web Development"} value={"Web Development"} border />
        <Button name={"Photography"} value={"Photography"} border />
        {/* <Anchor name={"Web Development"} value={"Web Development"} border />
        <Anchor name={"Photography"} value={"Photography"} border /> */}
      </div>
      {portfolioArray}
    </>
  );
}

export default Work;
