import React from "react";
import Image from "next/image";
import { PhotographyData } from "../../../Data/PhotographyData.js";
import { useModalContext } from "../../../Context/ModalContext";

const Photography = () => {
	const { handleModal } = useModalContext();

	const photographyArray = PhotographyData.map((photo) => (
		<div
			key={photo.id}
			id={photo.id}
			className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] grid hover:opacity-70 cursor-pointer transition ease-linear duration-300"
			onClick={(event) => handleModal(event, photo.id)}>
			<Image
				key={photo.id}
				src={photo.src}
				width="1000"
				height="1000"
				// layout="responsive"
				alt="photography"
				className="w-full h-full object-cover overflow-hidden"
			/>
		</div>
	));
	return (
		<section className="w-full flex flex-wrap justify-center relative pt-6 sm:pt-10 md:pt-14 lg:pt-18 xl:pt-24 ">
			{photographyArray}
		</section>
	);
};

export default Photography;
