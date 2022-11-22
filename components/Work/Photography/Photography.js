import React from "react";
import { PhotographyData } from "../PhotographyData.js";
import Image from "next/image";
import { useModalContext } from "../../../Context/ModalContext";
function Photography(props) {
	const { handleModal } = useModalContext();

	const photographyArray = PhotographyData.map((photo) => (
		<div
			key={photo.id}
			id={photo.id}
			className="w-[100px] h-[100px] md:w-[350px] md:h-[350px] grid hover:opacity-70 cursor-pointer"
			onClick={(event) => handleModal(event, photo.id)}>
			<Image
				key={photo.id}
				src={photo.src}
				position={photo.position}
				// width={photo.position === "Horizontal" ? "1700" : "1024"}
				// height={photo.position === "Horizontal" ? "1024" : "1545"}
				width="100%"
				height="100%"
				objectFit="cover"
				layout="responsive"
				alt="photography"
			/>
		</div>
	));
	return (
		<div className="w-full flex flex-wrap justify-center relative">
			{photographyArray}
		</div>
	);
}

export default Photography;
