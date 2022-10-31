import React, { useEffect, useState } from "react";
import Anchor from "../components/Anchor";
import { portfolioData } from "../components/Work/portfolioData.js";
import ProjectCard from "../components/Work/ProjectCard";
import Button from "../components/Button";
import ProjectDetailsModal from "../components/Work/Project Modal/ProjectDetailsModal";
import Photography from "../components/Work/Photography/Photography";
import { photographyData } from "../components/Work/Photography/PhotographyData";
import { useModalContext } from "../Context/ModalContext";

function Work() {
  const {
    displayProjectDetailsModal,
    showPhotographyModal,
    handleModal,
    handleModalClose,
    currentProject,
    setCurrentProject,
    currentProjectId,
    setCurrentProjectId,
    showWebProjects,
    setShowWebProjects,
    setWorkDisplayed,
  } = useModalContext();
  // -----------------------------------------------------

  const [darkMode, setDarkMode] = useState(false);
  // const [currentProject, setCurrentProject] = useState("");
  // const [currentProjectId, setCurrentProjectId] = useState("");
  // const [displayProjectDetailsModal, setDisplayProjectDetailsModal] =
  //   useState(false);
  // const [showPhotographyModal, setShowPhotographyModal] = useState(false);
  // const [showWebProjects, setShowWebProjects] = useState(true);
  // const [pageX, setPageX] = useState("");
  // const [pageY, setPageY] = useState("");

  function handleDark(e) {
    e.preventDefault();
    setDarkMode(prev => !prev);
  }

  // async function handleModal(event, id) {
  //   event.stopPropagation();
  //   setCurrentProjectId(id);
  //   // ternary to differentiate between this or photography modals...
  //   // use state on buttons between web or photog
  //   setPageX(`${event.pageX}px`);
  //   setPageY(`${event.pageY}px`);
  //   if (showWebProjects) {
  //     setCurrentProject(portfolioData.find(project => project.id === id));
  //     setDisplayProjectDetailsModal(true);
  //   } else {
  //     setCurrentProject(photographyData.find(photo => photo.id === id));
  //     setShowPhotographyModal(true);
  //   }
  // }

  // function handleModalClose() {
  //   if (showWebProjects) {
  //     setDisplayProjectDetailsModal(false);
  //   } else {
  //     setShowPhotographyModal(false);
  //   }
  //   setCurrentProject("");
  //   setCurrentProjectId("");
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
          <Photography
            currentProject={currentProject}
            currentProjectId={currentProjectId}
            handleModal={handleModal}
            handleModalClose={handleModalClose}
            showPhotographyModal={showPhotographyModal}
            // pageX={pageX}
            // pageY={pageY}
          />
        </>
      )}
      {/* {portfolioArray} */}
    </>
  );
}

export default Work;
