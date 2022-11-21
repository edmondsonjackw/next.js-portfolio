import React from "react";
import { portfolioData } from "../components/Work/portfolioData.js";
import ProjectCard from "../components/Work/ProjectCard";
import Button from "../components/Button";
import ProjectDetailsModal from "../components/Work/Project Modal/ProjectDetailsModal";
import Photography from "../components/Work/Photography/Photography";
import { useModalContext } from "../Context/ModalContext";

function Work() {
	const {
		displayProjectDetailsModal,
		showPhotographyModal,
		handleModal,
		handleModalClose,
		currentProject,
		currentProjectId,
		showWebProjects,
		setWorkDisplayed,
		darkMode,
		setDarkMode,
	} = useModalContext();

	function handleDark(e) {
		e.preventDefault();
		setDarkMode((prev) => !prev);
	}

	const portfolioArray = portfolioData.map((project) => (
		<ProjectCard
			key={project.id}
			id={project.id}
			title={project.title}
			src={
				!darkMode && project.displayDarkModeToggle
					? project.src.light[0]
					: darkMode && project.displayDarkModeToggle
					? project.src.dark[0]
					: project.src[0]
			}
			href={project.href}
			displayDarkModeToggle={project.displayDarkModeToggle}
			darkMode={darkMode}
			handleDark={handleDark}
		/>
	));
	return (
		<>
			<div
				id="work"
				className="flex justify-center space-x-4 my-2 sm:my-4 md:my-6 lg:my-8 xl:my-10 pt-4 ">
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
			</div>
			{displayProjectDetailsModal && (
				<ProjectDetailsModal
					key={portfolioData.id}
					handleModal={handleModal}
					currentProjectId={currentProjectId}
					currentProject={currentProject}
					title={currentProject.title}
					resources={currentProject.resources}
					description={currentProject.description}
					handleModalClose={handleModalClose}
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
					/>
				</>
			)}
		</>
	);
}

export default Work;
