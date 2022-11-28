import React, { useState } from "react";
import Image from "next/image";

const Anchor = (props) => {
	const [displayedWork, setDisplayedWork] = useState(true);

	return (
		<>
			<a
				className={`flex justify-between items-center gap-1 py-2 px-3 sm:px-4 bg-transparent hover:bg-gray-700 rounded-lg text-xs sm:text-base cursor-pointer transition ease-linear duration-300 ${
					props.border ? "border-primary border-2" : ""
				} 
				${props.pCard ? "px-0 py-0 sm:px-0 hover:bg-transparent" : ""}
				${
					props.responsive
						? "h-[12px] w-[12px] sm:h-[24px] sm:w-[24px] md:h-[32px] md:w-[32px]"
						: "w-fit h-fit"
				}	
				`}
				name={props.name}
				disabled={props.disabled}
				href={props.href}
				target={props.target}>
				{props.icon && (
					<Image
						name={props.name}
						src={props.src}
						width={props.height}
						height={props.height}
						alt=""
					/>
				)}
				{props.value}
			</a>
		</>
	);
};

export default Anchor;
