import React from "react";
import { PortfolioData } from "../components/Work/PortfolioData.js";
import ProjectCard from "../components/Work/ProjectCard";
import Button from "../components/Button";
import ProjectDetailsModal from "../components/Work/Project Modal/ProjectDetailsModal";
import Photography from "../components/Work/Photography/Photography";
import { useModalContext } from "../Context/ModalContext";

const Work = () => {
	const {
		displayProjectDetailsModal,
		showWebProjects,
		setWorkDisplayed,
		darkMode,
		setDarkMode,
	} = useModalContext();

	const handleDark = (e) => {
		e.preventDefault();
		setDarkMode((prev) => !prev);
	};

	const portfolioArray = PortfolioData.map((project) => (
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
			handleDark={handleDark}
		/>
	));
	return (
		<>
			<section
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
			</section>
			{displayProjectDetailsModal ? <ProjectDetailsModal /> : ""}
			{showWebProjects ? (
				<section>{portfolioArray}</section>
			) : (
				<section>
					<Photography />
				</section>
			)}
		</>
	);
};

export default Work;
