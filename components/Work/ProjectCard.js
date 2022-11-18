import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Anchor from "../Anchor";
// import arrow from "next/image";
// import expand from "next/image";
// import lightModeIcon from "next/image";
// import darkModeIcon from "next/image";
// import chevronLeft from "next/image";
// import chevronRight from "next/image";
import ProjectDetailsModal from "./Project Modal/ProjectDetailsModal";
import { useModalContext } from "../../Context/ModalContext";
import { portfolioData } from "./portfolioData";

function ProjectCard(props) {
	const {
		currentIndex,
		handleModal,
		goForwardPicture,
		goBackPicture,
		goBackWeb,
		goForwardWeb,
		currentProjectId,
		portfolioDataArray,
	} = useModalContext();

	// const projectImages = portfolioDataArray.map((project) => (
	// 	<div>
	// 		<Image
	// 			src={project.src[0]}
	// 			alt=""
	// 			width="100%"
	// 			height="50%"
	// 			layout="responsive"
	// 			objectFit="contain"
	// 		/>
	// 	</div>
	// ));

	return (
		<div className="flex flex-col justify-between w-full ">
			<div className="w-full pt-24 px-3 sm:px-5 md:px-5 lg:px-6 flex justify-between items-center">
				<Anchor
					icon="arrow"
					href={props.href}
					name="projectLink"
					src="/project-arrow.svg"
					width="32"
					height="32"
					target="_blank"
					pCard
				/>
				<h3 className="">{props.title}</h3>
				<Button
					icon="expand"
					name="expand"
					src="/expand.svg"
					width="32"
					height="32"
					onClickFunction={(event) => handleModal(event, props.id)}
					// id={props.id}
					pCard
				/>
			</div>

			<div className="w-full flex justify-center mb-5">
				{props.displayDarkModeToggle && !props.darkMode ? (
					<Button
						icon="lightModeIcon"
						name="toggleDark"
						src="/light-mode.svg"
						width="32"
						height="32"
						// darkMode={props.darkMode}
						onClickFunction={props.handleDark}
					/>
				) : props.displayDarkModeToggle && props.darkMode ? (
					<Button
						icon="darkModeIcon"
						name="toggleDark"
						src="/dark-mode.svg"
						width="32"
						height="32"
						// darkMode={props.darkMode}
						onClickFunction={props.handleDark}
					/>
				) : null}
			</div>

			<div className="flex justify-center items-center gap-4">
				<Button
					onClickFunction={(event) =>
						goBackWeb(
							event,
							props.id,
							props.darkMode,
							props.displayDarkModeToggle
						)
					}
					icon="chevronLeft"
					src="/chevron-left.svg"
					width="32"
					height="32"
					id={props.id}
				/>
				<div className="w-full">
					<Image
						src={props.src}
						alt=""
						width="100%"
						height="50%"
						layout="responsive"
						objectFit="contain"
					/>
				</div>
				<Button
					onClickFunction={(event) =>
						goForwardWeb(
							event,
							props.id,
							props.darkMode,
							props.displayDarkModeToggle
						)
					}
					icon="chevronRight"
					src="/chevron-right.svg"
					width="32"
					height="32"
					id={props.id}
				/>
			</div>
		</div>
	);
}

export default ProjectCard;
