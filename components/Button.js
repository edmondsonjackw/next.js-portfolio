import React from "react";
import Image from "next/image";

function Button(props) {
	return (
		<>
			<button
				className={`flex justify-between items-center gap-2 py-2 px-3 sm:px-4 bg-transparent hover:bg-gray-700 hover:text-primary rounded-lg text-xs sm:text-base cursor-pointer 
				${
					props.responsive
						? "h-[12px] w-[12px] sm:h-[24px] sm:w-[24px] md:w-[32px] md:w-[32px]"
						: "w-fit h-fit"
				}			
				${props.border ? "border-primary border-2" : ""} 
							${
								props.pCard
									? "px-0 py-0 sm:px-0 hover:bg-transparent hover:text-primary"
									: ""
							}
    						${
									(props.showWebProjects && props.name === "Web Development") ||
									(!props.showWebProjects && props.name === "Photography")
										? "bg-primary text-cyan-900"
										: ""
								}
         				 `}
				onClick={props.onClickFunction}
				name={props.name}
				id={props.id}
				disabled={props.disabled}>
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
			</button>
		</>
	);
}

export default Button;
