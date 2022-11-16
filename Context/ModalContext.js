import React, { createContext, useContext, useEffect, useState } from "react";
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
	const [portfolioDataArray, setPortfolioDataArray] = useState([]);
	const [currentProject, setCurrentProject] = useState({});
	const [currentProjectId, setCurrentProjectId] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showWebProjects, setShowWebProjects] = useState(true);

	// useEffect(() => {
	// 	setPortfolioDataArray(portfolioData);
	// }, [portfolioDataArray]);

	function setWorkDisplayed(event) {
		event.preventDefault();
		setShowWebProjects((prev) => !prev);
		handleModalClose();
		setCurrentProject("");
		setCurrentProjectId("");
	}

	function handleModal(event, id) {
		event.preventDefault();
		setCurrentProjectId(id);
		if (showWebProjects) {
			const newProject = portfolioDataArray.find(
				(project) => project.id === id
			);
			setCurrentProject(newProject);
			// setCurrentProjectId(id);
			setDisplayProjectDetailsModal(true);
		} else {
			setCurrentProject(photographyData.find((photo) => photo.id === id));
			// setCurrentProjectId(id);
			setCurrentIndex(
				photographyData.findIndex((project) => {
					return project.id === id;
				})
			);
			setShowPhotographyModal(true);
		}
	}

	function handleModalClose() {
		if (showWebProjects) {
			setDisplayProjectDetailsModal(false);
		} else {
			setShowPhotographyModal(false);
			setCurrentProject("");
			setCurrentProjectId(0);
			setCurrentIndex(0);
		}
	}

	function goForwardPicture() {
		if (currentIndex === photographyData.length - 1) {
			setCurrentIndex(0);
			setCurrentProject(photographyData[0]);
		} else {
			setCurrentIndex(currentIndex + 1);
			setCurrentProject(photographyData[currentIndex + 1]);
		}
	}

	function goBackPicture() {
		if (currentIndex === 0) {
			setCurrentIndex(photographyData.length - 1);
			setCurrentProject(photographyData[photographyData.length - 1]);
		} else {
			setCurrentIndex(currentIndex - 1);
			setCurrentProject(photographyData[currentIndex - 1]);
		}
	}

	function goBackWeb(event, id) {
		event.stopPropagation();
		setCurrentProjectId(id);
		setCurrentIndex(
			portfolioDataArray.findIndex((project) => {
				return project.id === id;
			})
		);
		setCurrentProject(portfolioDataArray.find((project) => project.id === id));
		// console.log(currentProject.src);
		// portfolioDataArray[currentIndex].src.push(currentProject.src.indexOf(0));
		portfolioDataArray[currentIndex].src.unshift(
			portfolioDataArray[currentIndex].src.pop()
		);
		// setPortfolioDataArray(updatedPortfolioDataArray);
		// portfolioDataArray[currentIndex].src.shift();
		console.log(portfolioDataArray[currentIndex].src);
		console.log(currentProject);
		console.log(currentProjectId);
		console.log(currentIndex);
	}

	function goForwardWeb(event, id) {
		event.stopPropagation();
		setCurrentProjectId(id);
		// setCurrentProject(portfolioDataArray.find((project) => project.id === id));

		setCurrentIndex(
			portfolioDataArray.findIndex((project) => {
				return project.id === id;
			})
		);
		console.log(currentProject);
		console.log(currentProjectId);
		console.log(currentIndex);

		// portfolioDataArray[currentIndex].src.push(
		// 	portfolioDataArray[currentIndex].src.shift()
		// );
		// const currentProjectSrc = currentProject.src.slice(0, -1);

		// console.log(currentProjectSrc);

		// portfolioDataArray[currentIndex].src.slice(0, -1);
		// const newArray = portfolioDataArray[currentIndex].src.slice(0, -1);
		// const newArray = [...portfolioDataArray, currentProjectSrc];
		// portfolioDataArray[currentIndex].src.push(
		// 	portfolioDataArray[currentIndex].src.shift()
		// );

		// console.log(newArray);

		// console.log(portfolioDataArray[currentIndex].src);
		// console.log(portfolioDataArray[currentIndex]);
		// setPortfolioDataArray(updatedPortfolioDataArray);
		// portfolioDataArray[currentIndex].src.shift();
		// console.log(portfolioDataArray[currentIndex].src);
		// console.log(currentIndex);
		// console.log(currentProjectId);
	}

	// console.log(currentProjectId);
	// console.log(currentProject);
	// console.log(currentIndex);
	// console.log(portfolioDataArray);

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
		setCurrentProject,
		// closePhotogModal,
		goForwardPicture,
		goBackPicture,
		goBackWeb,
		goForwardWeb,
		portfolioDataArray,
	};
	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
}
