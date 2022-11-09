import React, { useState } from "react";
import { photographyData } from "./PhotographyData";
import Image from "next/image";
import PhotographyModal from "./PhotographyModal";
import { useModalContext } from "../../../Context/ModalContext";

function Photography(props) {
	const {
		handleModal,
		showPhotographyModal,
		goForwardPicture,
		goBackPicture,
		currentIndex,
	} = useModalContext();
	// function openModal(e) {
	//   e.preventDefault();
	//   setShowPhotographyModal(prev => !prev);
	// }
	const photographyArray = photographyData.map((photo) => (
		// <div className="w-full h-full max-w-sm hover:max-w-2xl transition-all duration-1000 border-2 rounded-lg border-primary space-x-10 space-y-4 px-4 m-4">
		<div
			key={photo.id}
			id={photo.id}
			className="w-[350px] h-[350px]  grid hover:opacity-70 cursor-pointer"
			onClick={(event) => handleModal(event, photo.id)}>
			<Image
				key={photo.id}
				src={photo.src}
				position={photo.position}
				width={photo.position === "Horizontal" ? "1700" : "1024"}
				height={photo.position === "Horizontal" ? "1024" : "1545"}
				// width="100%"
				// height="100%"
				// width={1024}
				// height={1545}
				objectFit="cover"
				layout="responsive"
			/>
		</div>
	));
	// .unshift(photo.position === "Horizontal");

	return (
		// <div className="min-w-screen grid grid-cols-5 gap-4">
		<div className="w-full flex flex-wrap justify-center relative">
			{photographyArray}
		</div>
	);
}

export default Photography;
