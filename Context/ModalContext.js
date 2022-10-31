import React, { createContext, useContext, useState } from "react";
import { portfolioData } from "../components/Work/portfolioData.js";
import { photographyData } from "../components/Work/Photography/PhotographyData";

const ModalContext = createContext();

export function useModalContext() {
  return useContext(ModalContext);
}

export default function ModalProvider({ children }) {
  const [displayProjectDetailsModal, setDisplayProjectDetailsModal] =
    useState(false);
  const [showPhotographyModal, setShowPhotographyModal] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const [currentProjectId, setCurrentProjectId] = useState("");
  const [pageX, setPageX] = useState("");
  const [pageY, setPageY] = useState("");
  const [showWebProjects, setShowWebProjects] = useState(true);

  function setWorkDisplayed(event) {
    event.preventDefault();
    setShowWebProjects(prev => !prev);
    handleModalClose();
    setCurrentProject("");
    setCurrentProjectId("");
  }
  console.log(pageY);

  async function handleModal(event, id) {
    event.stopPropagation();
    setCurrentProjectId(id);
    // ternary to differentiate between this or photography modals...
    // use state on buttons between web or photog
    setPageX(`${event.pageX}`);
    setPageY(`${event.pageY}px`);
    if (showWebProjects) {
      setCurrentProject(portfolioData.find(project => project.id === id));
      setDisplayProjectDetailsModal(true);
    } else {
      setCurrentProject(photographyData.find(photo => photo.id === id));
      setShowPhotographyModal(true);
    }
  }

  function handleModalClose() {
    if (showWebProjects) {
      setDisplayProjectDetailsModal(false);
    } else {
      setShowPhotographyModal(false);
    }
    setCurrentProject("");
    setCurrentProjectId("");
  }

  function closePhotogModal() {
    console.log("fucking shit");
    setShowPhotographyModal(false);
  }
  const value = {
    displayProjectDetailsModal,
    showPhotographyModal,
    setShowPhotographyModal,
    showWebProjects,
    setShowWebProjects,
    setWorkDisplayed,
    handleModal,
    handleModalClose,
    currentProject,
    setCurrentProject,
    currentProjectId,
    setCurrentProjectId,
    pageX,
    pageY,
    closePhotogModal,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
