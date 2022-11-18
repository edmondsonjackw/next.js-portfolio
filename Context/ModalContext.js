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
	const [currentProjectId, setCurrentProjectId] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showWebProjects, setShowWebProjects] = useState(true);
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		setPortfolioDataArray(portfolioData);
	}, [portfolioDataArray]);

	function setWorkDisplayed(event) {
		event.preventDefault();
		setShowWebProjects((prev) => !prev);
		handleModalClose();
		setCurrentProject("");
		setCurrentProjectId(0);
		setCurrentIndex(0);
	}

	function handleModal(event, id) {
		event.stopPropagation();
		if (showWebProjects) {
			setCurrentProject(
				portfolioDataArray.find((project) => project.id === id)
			);
			setCurrentIndex(
				portfolioDataArray.findIndex((project) => {
					return project.id === id;
				})
			);
			setDisplayProjectDetailsModal(true);
		} else {
			setCurrentProject(photographyData.find((photo) => photo.id === id));
			setCurrentIndex(
				photographyData.findIndex((project) => {
					return project.id === id;
				})
			);
			setShowPhotographyModal(true);
		}
		setCurrentProjectId(id);
	}

	function handleModalClose() {
		if (showWebProjects) {
			setDisplayProjectDetailsModal(false);
		} else {
			setShowPhotographyModal(false);
		}
		setCurrentProject("");
		setCurrentProjectId(0);
		setCurrentIndex(0);
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

	// function goBackWeb(event, id) {
	// 	event.stopPropagation();
	// 	const index = id;
	// 	const newArr = portfolioDataArray[index].src.unshift(
	// 		portfolioDataArray[index].src.pop()
	// 	);
	// 	setPortfolioDataArray(newArr);
	// }

	function goBackWeb(event, id, darkMode, displayDarkModeToggle) {
		event.stopPropagation();
		const index = id;
		if (!darkMode && displayDarkModeToggle) {
			const newArr = portfolioDataArray[index].src.light.unshift(
				portfolioDataArray[index].src.light.pop()
			);
			setPortfolioDataArray(newArr);
		} else if (darkMode && displayDarkModeToggle) {
			const newArr = portfolioDataArray[index].src.dark.unshift(
				portfolioDataArray[index].src.dark.pop()
			);
			setPortfolioDataArray(newArr);
		} else {
			const newArr = portfolioDataArray[index].src.unshift(
				portfolioDataArray[index].src.pop()
			);
			setPortfolioDataArray(newArr);
		}
	}

	function goForwardWeb(event, id, darkMode, displayDarkModeToggle) {
		event.stopPropagation();
		const index = id;
		if (!darkMode && displayDarkModeToggle) {
			const newArr = portfolioDataArray[index].src.light.push(
				portfolioDataArray[index].src.light.shift()
			);
			setPortfolioDataArray(newArr);
		} else if (darkMode && displayDarkModeToggle) {
			const newArr = portfolioDataArray[index].src.dark.push(
				portfolioDataArray[index].src.dark.shift()
			);
			setPortfolioDataArray(newArr);
		} else {
			const newArr = portfolioDataArray[index].src.push(
				portfolioDataArray[index].src.shift()
			);
			setPortfolioDataArray(newArr);
		}
	}

	// console.log(portfolioDataArray);
	// console.log(portfolioDataArray[currentIndex]);
	// console.log(currentProject);
	// console.log(currentProjectId);
	// console.log(currentIndex);

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
		darkMode,
		setDarkMode,
	};
	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
}
