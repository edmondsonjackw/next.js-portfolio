import React, { useEffect, useState } from "react";
import Anchor from "../components/Anchor";
import { projectPortfolioData } from "../components/Work/projectPortfolioData.js";
import ProjectCard from "../components/Work/ProjectCard";
import Button from "../components/Button";

function Work() {
  // const [displayedWork, setDisplayedWork] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const [currentProjectId, setCurrentProjectId] = useState("");
  const [displayProjectDetailsModal, setDisplayProjectDetailsModal] =
    useState(false);
  const [portfolioData, setPortfolioData] = useState(projectPortfolioData);
  // const [projectData, setProjectData] = useState();
  console.log(portfolioData);
  // useEffect(() => {
  //   const projectDataArray = projectPortfolioData.splice(
  //     currentProjectId,
  //     projectPortfolioData - 1
  //   );
  //   setProjectData(projectDataArray);
  // }, [currentProjectId]);

  // projectPortfolioData.splice(
  //   currentProjectId,
  //   projectPortfolioData.length - 1
  // );

  // function workSelector(e) {
  //   e.preventDefault();
  //   setDisplayedWork(!displayedWork);
  // }

  function handleDark(e) {
    e.preventDefault();
    setDarkMode(prev => !prev);
    // localStorage.setItem("mode", toggleDarkMode ? "light" : "dark");
  }

  function findCurrentNote(id, project) {
    return (
      project.find(project => {
        return project.id === currentProjectId;
      }) || project[0]
    );
  }

  // function handleModal(e, id) {
  //   e.preventDefault();
  //   setDisplayProjectDetailsModal(prev => !prev);
  //   findCurrentNote();
  // }
  // console.log(currentProject)

  async function edit(event, id) {
    event.stopPropagation();
    // ON CLICK DISPLAY THE PROJECTDETAILSMODAL TO THE INDEX OF CURRENT ID - 1
    setCurrentProjectId(id);
    setCurrentProject(portfolioData.find(project => project.id === id));
    // const projectDataArray = projectPortfolioData.splice // const projectDataArray = projectPortfolioData.splice(
    //   currentProjectId,
    //   projectPortfolioData - 1
    // );
    handleCreateExpenseModalOpen();
  }

  function handleCreateExpenseModalOpen() {
    setDisplayProjectDetailsModal(true);
  }

  function handleCreateExpenseModalClose() {
    setDisplayProjectDetailsModal(false);
    setCurrentProject("");
    setCurrentProjectId("");
  }

  console.log(currentProjectId);

  const portfolioArray = projectPortfolioData.map(project => (
    <ProjectCard
      key={project.id}
      id={project.id}
      title={project.title}
      // resources={project.resources}
      // description={project.description}
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
      handleModal={edit}
      displayProjectDetailsModal={displayProjectDetailsModal}
      currentProjectId={currentProjectId}
      currentProject={currentProject}
      portfolioData={portfolioData}
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
      {/* <p>
        {" "}
        {projectPortfolioData
          .filter(project => project.id === currentProjectId)
          .map(project => project.resources)}
      </p> */}
    </>
  );
}

export default Work;
