import React from "react";
import Button from "../../Button";
import closeIcon from "next/image";
import Image from "next/image";
import chevronLeft from "next/image";
import chevronRight from "next/image";

import { useModalContext } from "../../../Context/ModalContext";

function PhotographyModal(props) {
	const {
		// closePhotogModal,
		handleModalClose,
		pageY,
		setCurrentIndex,
		goBackPicture,
		goForwardPicture,
		currentIndex,
		setCurrentProject,
	} = useModalContext();
	if (!props.showPhotographyModal) return null;

	return (
		<div
			className={`fixed flex z-10 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-25 backdrop-blur-sm`}
			onClick={props.handleModalClose}>
			<div className="absolute top-0 right-0">
				<Button
					icon={closeIcon}
					name="close"
					src="/close-icon.svg"
					height="32"
					width="32"
					photoCloseButton
					onClickFunction={handleModalClose}
				/>
			</div>
			<div
				className={`flex justify-around items-center w-5/6 h-5/6 m-auto rounded-lg py-8 px-4  bg-black 900 bg-opacity-70`}>
				{/* // className={`grid grid-cols-[65px_minmax(100px,_1fr)_65px]  place-items-center w-5/6 h-5/6 m-auto rounded-lg py-8 px-4  bg-black 900 bg-opacity-70`}> */}
				<Button
					onClickFunction={goBackPicture}
					icon={chevronLeft}
					src="/chevron-left.svg"
					width="32"
					height="32"
				/>

				<div className="relative w-full h-full m-4 ">
					<Image
						src={props.currentProject.src}
						// width={
						// 	props.currentProject.position === "Horizontal" ? "1700" : "1024"
						// }
						// height={
						// 	props.currentProject.position === "Horizontal" ? "1024" : "1045"
						// }
						// height={1024}
						// width={1045}
						objectFit="contain"
						layout="fill"
						alt=""
					/>
				</div>
				<Button
					onClickFunction={goForwardPicture}
					icon={chevronRight}
					src="/chevron-right.svg"
					width="32"
					height="32"
				/>
				{/* </div> */}
			</div>
		</div>
	);
}

export default PhotographyModal;
