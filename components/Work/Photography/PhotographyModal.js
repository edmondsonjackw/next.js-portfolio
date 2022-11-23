import React from "react";
import Image from "next/image";
import Button from "../../Button";
import closeIcon from "next/image";
import chevronLeft from "next/image";
import chevronRight from "next/image";
import { useModalContext } from "../../../Context/ModalContext";

const PhotographyModal = (props) => {
	const {
		currentProject,
		showPhotographyModal,
		handleModalClose,
		goBackPhotog,
		goForwardPhotog,
	} = useModalContext();

	if (!showPhotographyModal) return null;

	return (
		<div
			className={`fixed flex z-10 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-25 backdrop-blur-sm`}
			onClick={props.handleModalClose}>
			<div className="absolute top-0 right-0 m-4">
				<Button
					icon={closeIcon}
					name="close"
					src="/Icons/close-icon.svg"
					height="32"
					width="32"
					photoCloseButton
					onClickFunction={handleModalClose}
				/>
			</div>
			<div
				className={`flex justify-around items-center w-5/6 h-5/6 m-auto rounded-lg py-8 px-4 bg-black 900 bg-opacity-70`}>
				<Button
					onClickFunction={goBackPhotog}
					icon={chevronLeft}
					src="/Icons/chevron-left.svg"
					width="32"
					height="32"
				/>
				<div className="relative w-full h-full m-4 ">
					<Image
						src={currentProject.src}
						objectFit="contain"
						layout="fill"
						alt=""
					/>
				</div>
				<Button
					onClickFunction={goForwardPhotog}
					icon={chevronRight}
					src="/Icons/chevron-right.svg"
					width="32"
					height="32"
				/>
			</div>
		</div>
	);
};

export default PhotographyModal;
