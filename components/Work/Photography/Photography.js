import React from "react";
import Image from "next/image";
import { PhotographyData } from "../PhotographyData.js";
import { useModalContext } from "../../../Context/ModalContext";

const Photography = () => {
	const { handleModal } = useModalContext();

	const photographyArray = PhotographyData.map((photo) => (
		<div
			key={photo.id}
			id={photo.id}
			className="w-[100px] h-[100px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] grid hover:opacity-70 cursor-pointer"
			onClick={(event) => handleModal(event, photo.id)}>
			<Image
				key={photo.id}
				src={photo.src}
				width="100%"
				height="100%"
				objectFit="cover"
				layout="responsive"
				alt="photography"
			/>
		</div>
	));
	return (
		<section className="w-full flex flex-wrap justify-center relative">
			{photographyArray}
		</section>
	);
};

export default Photography;
