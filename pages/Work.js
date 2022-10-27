import React, { useEffect, useState } from "react";
import Anchor from "../components/Anchor";
import { portfolioData } from "../components/Work/portfolioData.js";
import ProjectCard from "../components/Work/ProjectCard";
import Button from "../components/Button";
import ProjectDetailsModal from "../components/Work/Project Modal/ProjectDetailsModal";
import Photography from "../components/Work/Photography/Photography";

function Work() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const [currentProjectId, setCurrentProjectId] = useState("");
  const [displayProjectDetailsModal, setDisplayProjectDetailsModal] =
    useState(false);
  const [showWebProjects, setShowWebProjects] = useState(true);
  // const [portfolioData, setPortfolioData] = useState(projectPortfolioData);
  // const [projectData, setProjectData] = useState();
  // console.log(portfolioData);

  function setWorkDisplayed(e) {
    e.preventDefault();
    setShowWebProjects(prev => !prev);
  }
  console.log(showWebProjects);

  function handleDark(e) {
    e.preventDefault();
    setDarkMode(prev => !prev);
  }

  // const projectDataArray = projectPortfolioData.splice(
  //   //   currentProjectId,
  //   //   projectPortfolioData - 1
  //   // );

  async function handleModal(event, id) {
    event.stopPropagation();
    setCurrentProjectId(id);
    setCurrentProject(portfolioData.find(project => project.id === id));
    setDisplayProjectDetailsModal(true);
  }

  function handleModalClose() {
    setDisplayProjectDetailsModal(false);
    setCurrentProject("");
    setCurrentProjectId("");
  }

  // function toggleDisplayProjectDetails(e) {
  //   e.preventDefault();
  //   setDisplayProjectDetails(!displayProjectDetails);
  // }

  const portfolioArray = portfolioData.map(project => (
    <ProjectCard
      key={project.id}
      id={project.id}
      title={project.title}
      src={
        !darkMode && project.displayDarkModeToggle
          ? project.src.light
          : darkMode && project.displayDarkModeToggle
          ? project.src.dark
          : project.src
      }
      href={project.href}
      displayDarkModeToggle={project.displayDarkModeToggle}
      darkMode={darkMode}
      handleDark={handleDark}
      handleModal={handleModal}
    />
  ));
  console.log(currentProject);
  return (
    <>
      <div className="flex justify-center space-x-4 my-10 ">
        <Button
          name={"Web Development"}
          value={"Web Development"}
          border
          onClickFunction={setWorkDisplayed}
          showWebProjects={showWebProjects}
        />
        <Button
          name={"Photography"}
          value={"Photography"}
          border
          onClickFunction={setWorkDisplayed}
          showWebProjects={showWebProjects}
        />
        {/* <Anchor name={"Web Development"} value={"Web Development"} border />
        <Anchor name={"Photography"} value={"Photography"} border /> */}
      </div>
      {/* {displayProjectDetailsModal && currentProjectId === currentProject.id && ( */}
      {displayProjectDetailsModal && (
        <ProjectDetailsModal
          key={portfolioData.id}
          // resources={props.resources}
          // description={props.description}
          handleModal={handleModal}
          currentProjectId={currentProjectId}
          currentProject={currentProject}
          resources={currentProject.resources}
          description={currentProject.description}
          handleModalClose={handleModalClose}
          // portfolioData={portfolioData}
        />
      )}

      {showWebProjects ? (
        <>{portfolioArray}</>
      ) : (
        <>
          <Photography />
        </>
      )}
      {/* {portfolioArray} */}
    </>
  );
}

export default Work;
