import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Anchor from "../Anchor";
import arrow from "next/image";
import expand from "next/image";
import lightModeIcon from "next/image";
import darkModeIcon from "next/image";
import chevronLeft from "next/image";
import chevronRight from "next/image";
import ProjectDetailsModal from "./Project Modal/ProjectDetailsModal";
import { useModalContext } from "../../Context/ModalContext";

function ProjectCard(props) {
	const {
		currentIndex,
		handleModal,
		goForwardPicture,
		goBackPicture,
		goForwardWeb,
	} = useModalContext();
	// const [displayProjectDetails, setDisplayProjectDetails] = useState(false);

	// function toggleDisplayProjectDetails(e) {
	//   e.preventDefault();
	//   setDisplayProjectDetails(!displayProjectDetails);
	// }

	return (
		<div className="flex flex-col justify-between w-full ">
			<div className="w-full pt-24 flex justify-between items-center">
				<Anchor
					icon={arrow}
					href={props.href}
					name="projectLink"
					src="/project-arrow.svg"
					width="24"
					height="24"
					target="_blank"
					pCard
				/>
				<h3 className="">{props.title}</h3>
				<Button
					icon={expand}
					name="expand"
					src="/expand.svg"
					width="24"
					height="24"
					onClickFunction={(event) => handleModal(event, props.id)}
					id={props.id}
					pCard
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
				<Button
					onClickFunction={goForwardWeb}
					icon={chevronLeft}
					src="/chevron-left.svg"
					width="32"
					height="32"
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
					onClickFunction={(event) => goForwardWeb(event, props.id)}
					icon={chevronRight}
					src="/chevron-right.svg"
					width="32"
					height="32"
				/>
			</div>
		</div>
	);
}

export default ProjectCard;
