import React from "react";
import Image from "next/image";
import Button from "../Button";
import Anchor from "../Anchor";
import { useModalContext } from "../../Context/ModalContext";

function ProjectCard(props) {
	const { handleModal, goBackWeb, goForwardWeb } = useModalContext();

	return (
		<div className="flex flex-col justify-between w-full ">
			<div className="w-full pt-24 px-3 sm:px-5 md:px-5 lg:px-6 flex justify-between items-center">
				<Anchor
					icon="arrow"
					name="projectLink"
					src="/Icons/project-arrow.svg"
					href={props.href}
					target="_blank"
					width="32"
					height="32"
					pCard
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
				/>
			</div>

			<div className="w-full flex justify-center mb-5">
				{props.displayDarkModeToggle && !props.darkMode ? (
					<Button
						icon="lightModeIcon"
						name="toggleDark"
						src="/Icons/light-mode.svg"
						width="32"
						height="32"
						onClickFunction={props.handleDark}
					/>
				) : props.displayDarkModeToggle && props.darkMode ? (
					<Button
						icon="darkModeIcon"
						name="toggleDark"
						src="/Icons/dark-mode.svg"
						width="32"
						height="32"
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
					src="/Icons/chevron-left.svg"
					width="32"
					height="32"
				/>
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
						goForwardWeb(
							event,
							props.id,
							props.darkMode,
							props.displayDarkModeToggle
						)
					}
					icon="chevronRight"
					src="/Icons/chevron-right.svg"
					width="32"
					height="32"
				/>
			</div>
		</div>
	);
}

export default ProjectCard;
