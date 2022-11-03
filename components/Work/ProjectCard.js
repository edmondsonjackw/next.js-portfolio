import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Anchor from "../Anchor";
import arrow from "next/image";
import lightModeIcon from "next/image";
import darkModeIcon from "next/image";
import chevronLeft from "next/image";
import chevronRight from "next/image";
import ProjectDetailsModal from "./Project Modal/ProjectDetailsModal";
import { useModalContext } from "../../Context/ModalContext";

function ProjectCard(props) {
	const { handleModal } = useModalContext();
	// const [displayProjectDetails, setDisplayProjectDetails] = useState(false);

	// function toggleDisplayProjectDetails(e) {
	//   e.preventDefault();
	//   setDisplayProjectDetails(!displayProjectDetails);
	// }

	return (
		<div className="flex flex-col justify-between w-full ">
			<div className="mx-3 pt-24 flex justify-between items-center">
				<Anchor
					value=""
					icon={arrow}
					href={props.href}
					name="projectLink"
					src="/project-arrow.svg"
					width="24"
					height="24"
					target="_blank"
				/>
				<h3 className="">{props.title}</h3>
				<Button
					name="expand"
					value="●●●"
					onClickFunction={(event) => handleModal(event, props.id)}
					id={props.id}
				/>
			</div>

			<div className="w-full flex justify-center mb-5">
				{props.displayDarkModeToggle && !props.darkMode ? (
					<Button
						icon={lightModeIcon}
						name="toggleDark"
						src="/light-mode.svg"
						width="32"
						height="32"
						// darkMode={props.darkMode}
						onClickFunction={props.handleDark}
					/>
				) : props.displayDarkModeToggle && props.darkMode ? (
					<Button
						icon={darkModeIcon}
						name="toggleDark"
						src="/dark-mode.svg"
						width="32"
						height="32"
						// darkMode={props.darkMode}
						onClickFunction={props.handleDark}
					/>
				) : null}
			</div>

			<div className="flex justify-center">
				<Image src="/chevron-left.svg" width="32" height="32" />
				<div className="w-full">
					<Image
						src={props.src}
						alt=""
						width="100%"
						height="50%"
						layout="responsive"
						objectFit="contain"
					/>
					{/* {props.displayProjectDetailsModal && (
            // props.currentProjectId === props.currentProject.id && (

            <ProjectDetailsModal
            // resources={props.resources}
            // description={props.description}
            // handleModalClose={props.handleModalClose}
            // handleModal={props.handleModal}
            // currentProjectId={props.currentProjectId}
            // currentProject={props.currentProject}
            // portfolioData={props.portfolioData}
            />
          )} */}
				</div>
				<Image src="/chevron-right.svg" width="32" height="32" />
			</div>
		</div>
	);
}

export default ProjectCard;
