import React from "react";
import Image from "next/image";

function Button(props) {
	return (
		<>
			<button
				className={`w-fit h-fit flex justify-between items-center gap-2 bg-transparent hover:bg-gray-700 rounded-lg text-xs sm:text-base cursor-pointer 
				${
					props.expand
						? "h-[12px] w-[12px] sm:h-[24px] sm:w-[24px] md:w-[32px] md:w-[32px]"
						: "w-fit h-fit"
				}			
				${props.border ? "border-primary border-2" : ""} 
							${!props.pCard ? "py-2 px-3 sm:px-4" : ""}
    						${
									(props.showWebProjects && props.name === "Web Development") ||
									(!props.showWebProjects && props.name === "Photography")
										? "bg-primary text-sky-900"
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
