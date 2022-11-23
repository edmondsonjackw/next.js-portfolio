import React from "react";
import Image from "next/image";
import Button from "../Button";
import Anchor from "../Anchor";
import { useModalContext } from "../../Context/ModalContext";

const ProjectCard = (props) => {
	const { handleModal, darkMode, goBackWeb, goForwardWeb } = useModalContext();

	return (
		<div className="flex flex-col justify-between w-full ">
			<div className="w-full pt-6 sm:pt-10 md:pt-14 lg:pt-18 xl:pt-24 px-0 sm:px-0 md:px-0 lg:px-0 flex justify-between items-center">
				<Anchor
					icon="arrow"
					name="projectLink"
					src="/Icons/project-arrow.svg"
					href={props.href}
					target="_blank"
					width="32"
					height="32"
					pCard
					responsive
				/>
				<h3>{props.title}</h3>
				<Button
					icon="expand"
					name="expand"
					src="/Icons/expand.svg"
					width="32"
					height="32"
					onClickFunction={(event) => handleModal(event, props.id)}
					pCard
					responsive
				/>
			</div>

			{props.displayDarkModeToggle && !darkMode ? (
				<div className="w-full flex justify-center my-2">
					<Button
						icon="lightModeIcon"
						name="toggleDark"
						src="/Icons/light-mode.svg"
						width="32"
						height="32"
						onClickFunction={props.handleDark}
						pCard
						responsive
					/>
				</div>
			) : props.displayDarkModeToggle && darkMode ? (
				<div className="w-full flex justify-center my-2">
					<Button
						icon="darkModeIcon"
						name="toggleDark"
						src="/Icons/dark-mode.svg"
						width="32"
						height="32"
						onClickFunction={props.handleDark}
						pCard
						responsive
					/>
				</div>
			) : null}

			<div className="flex justify-center items-center gap-1 sm:gap-4">
				<Button
					onClickFunction={(event) =>
						goBackWeb(event, props.id, darkMode, props.displayDarkModeToggle)
					}
					icon="chevronLeft"
					src="/Icons/chevron-left.svg"
					width="32"
					height="32"
					pCard
					responsive
				/>
				{/* SORT HEIGHT HERE */}
				<div className="w-full">
					<Image
						src={props.src}
						alt="project"
						width="100%"
						height="50%"
						layout="responsive"
						objectFit="contain"
					/>
				</div>
				<Button
					onClickFunction={(event) =>
						goForwardWeb(event, props.id, darkMode, props.displayDarkModeToggle)
					}
					icon="chevronRight"
					src="/Icons/chevron-right.svg"
					width="32"
					height="32"
					pCard
					responsive
				/>
			</div>
		</div>
	);
};

export default ProjectCard;
