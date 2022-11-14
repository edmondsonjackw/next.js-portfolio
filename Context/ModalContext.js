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
	const [currentProject, setCurrentProject] = useState("");
	const [currentProjectId, setCurrentProjectId] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showWebProjects, setShowWebProjects] = useState(true);

	useEffect(() => {
		setPortfolioDataArray(portfolioData);
	}, [portfolioDataArray]);

	function setWorkDisplayed(event) {
		event.preventDefault();
		setShowWebProjects((prev) => !prev);
		handleModalClose();
		setCurrentProject("");
		setCurrentProjectId("");
	}

	async function handleModal(event, id) {
		event.stopPropagation();
		setCurrentProjectId(id);
		// ternary to differentiate between this or photography modals...
		// use state on buttons between web or photog

		if (showWebProjects) {
			setCurrentProject(portfolioData.find((project) => project.id === id));
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
			// setCurrentIndex(currentProjectId);
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

	function goForwardWeb(event, id) {
		event.stopPropagation();
		// setCurrentProjectId(id);
		setCurrentProject(portfolioData.find((project) => project.id === id));
		// setCurrentIndex(currentIndex + 1);
		setCurrentIndex(
			portfolioDataArray.findIndex((project) => {
				return project.id === id;
			})
		);
		function sortData() {
			// 	// currentProject.src.push(currentProject.src[0]);
			// 	// currentProject.src.shift();
			// 	portfolioDataArray[currentIndex].src.push(currentProject.src[0]);
			// 	portfolioDataArray[currentIndex].src.shift();
			// }

			setPortfolioDataArray((prev) => {
				portfolioDataArray: [
					...prev,
					portfolioDataArray[currentIndex].src.push(currentProject.src[0]),
				];
			});
		}
		sortData();
		console.log(portfolioDataArray[currentIndex].src);

		// IF CURRENT ID !== NEW ID THEN SET CURRENT ID TO 0

		// currentProject.src.push(currentProject.src[0]);
		// currentProject.src.shift();
		// portfolioDataArray[currentIndex].src.push(currentProject.src[0]);
		// const currentProjectArray = portfolioDataArray[currentIndex];
		// portfolioDataArray[currentIndex].src.shift();
		// console.log(currentIndex);
		console.log(currentIndex);
		// currentProjectArray.src.push("hi");
		// portfolioDataArray[currentIndex].src.push(
		// 	portfolioDataArray[currentIndex].src[0]
		// );
		// portfolioDataArray[currentIndex].src.shift();
		// console.log(currentProjectArray);
	}
	// FIND WAY TO NOT CHANGE CURRENT INDEX AFTER FIRST CLICK
	// currentproject.push first in array then shift it
	// console.log(currentProject);
	// console.log(currentIndex);
	console.log(portfolioDataArray);

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
		goForwardWeb,
		portfolioDataArray,
	};
	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
}
