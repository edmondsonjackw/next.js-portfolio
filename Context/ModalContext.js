import React, { createContext, useContext, useEffect, useState } from "react";
import { portfolioData } from "../components/Work/portfolioData.js";
import { PhotographyData } from "../components/Work/PhotographyData";

const ModalContext = createContext();

export function useModalContext() {
	return useContext(ModalContext);
}

export default function ModalProvider({ children }) {
	const [portfolioDataArray, setPortfolioDataArray] = useState([]);
	const [currentProject, setCurrentProject] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showWebProjects, setShowWebProjects] = useState(true);
	const [darkMode, setDarkMode] = useState(false);
	const [displayProjectDetailsModal, setDisplayProjectDetailsModal] =
		useState(false);
	const [showPhotographyModal, setShowPhotographyModal] = useState(false);

	useEffect(() => {
		setPortfolioDataArray(portfolioData);
	}, [portfolioDataArray]);

	function setWorkDisplayed(event) {
		event.preventDefault();
		setShowWebProjects((prev) => !prev);
		handleModalClose();
		setCurrentProject("");
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
			setCurrentProject(PhotographyData.find((photo) => photo.id === id));
			setCurrentIndex(
				PhotographyData.findIndex((project) => {
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
		}
		setCurrentProject("");
		setCurrentIndex(0);
	}

	function goForwardPhotog() {
		if (currentIndex === PhotographyData.length - 1) {
			setCurrentIndex(0);
			setCurrentProject(PhotographyData[0]);
		} else {
			setCurrentIndex(currentIndex + 1);
			setCurrentProject(PhotographyData[currentIndex + 1]);
		}
	}

	function goBackPhotog() {
		if (currentIndex === 0) {
			setCurrentIndex(PhotographyData.length - 1);
			setCurrentProject(PhotographyData[PhotographyData.length - 1]);
		} else {
			setCurrentIndex(currentIndex - 1);
			setCurrentProject(PhotographyData[currentIndex - 1]);
		}
	}

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
		setCurrentProject,
		goBackPhotog,
		goForwardPhotog,
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
