import React from "react";
import Button from "../../Button";
import { useModalContext } from "../../../Context/ModalContext";

function ProjectDetailsModal(props) {
	const { handleModalClose } = useModalContext();

	return (
		// <div className="w-auto border-2 border-primary rounded-lg py-4 px-6 flex flex-col ">
		<div
			className={`fixed flex z-10 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-25 backdrop-blur-sm`}>
			<div
				className={`flex flex-col w-3/6 h-fit m-auto rounded-lg py-8 px-4 bg-black 900 bg-opacity-70`}>
				<div className="place-self-end ">
					<Button
						icon="closeIcon"
						name="close"
						src="/Icons/close-icon.svg"
						height="32"
						width="32"
						onClickFunction={handleModalClose}
					/>
				</div>
				<div className="space-y-10">
					<div className="w-full">
						<h3 className="text-center">{props.title}</h3>
						<p className="border-2 border-primary">{props.resources}</p>
					</div>
					<div className="">
						<p className="whitespace-pre-wrap">{props.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetailsModal;
