import React from "react";
import Button from "../../Button";
import { useModalContext } from "../../../Context/ModalContext";
import Skills from "../../Skills";

function ProjectDetailsModal(props) {
	const { handleModalClose, currentProject } = useModalContext();
	const resourcesArray = currentProject.resources.map((project) => (
		<Skills value={project} />
	));
	return (
		// <div className="w-auto border-2 border-primary rounded-lg py-4 px-6 flex flex-col ">
		<div
			className={`fixed p-8 flex z-10 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-25 backdrop-blur-sm`}>
			<div className="absolute top-0 right-0 m-4">
				<Button
					icon="closeIcon"
					name="close"
					src="/Icons/close-icon.svg"
					height="32"
					width="32"
					onClickFunction={handleModalClose}
				/>
			</div>
			<div
				className={`flex flex-col w-5/6 sm:w-4/6 h-fit m-auto rounded-lg py-3 sm:py-4 px-4 bg-black 900 bg-opacity-70`}>
				<div className="flex flex-col items-center sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
					<div className="w-full ">
						<h3 className="text-center">{props.title}</h3>
					</div>
					<div className="space-y-4">
						<p className="whitespace-pre-wrap">{props.description}</p>
						<div className="flex flex-wrap  gap-1 sm:gap-2 md:gap-3 lg:gap-4 w-full">
							{resourcesArray}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetailsModal;
