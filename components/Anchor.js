import React, { useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import Image from "next/image";
import landingImg from "next/image";
import arrow from "next/image";
import expand from "next/image";
import emailIcon from "next/image";
import linkedIn from "next/image";

function Anchor(props) {
	const [displayedWork, setDisplayedWork] = useState(true);

	function workSelector(e) {
		e.preventDefault();
		setDisplayedWork(!displayedWork);
	}

	return (
		<>
			<a
				className={`w-fit flex justify-between items-center gap-1 bg-transparent hover:bg-gray-700 rounded-lg text-xs sm:text-base cursor-pointer ${
					props.border ? "border-primary border-2" : ""
				} ${!props.pCard ? "py-2 px-3 sm:px-4" : ""}`}
				// onClick={props.onClick}
				name={props.name}
				disabled={props.disabled}
				href={props.href}
				target={props.target}
				// onClick={workSelector}
			>
				{props.icon && (
					<Image
						// className={props.iconClassName}
						name={props.name}
						// icon={props.icon}
						src={props.src}
						width={props.height}
						height={props.height}
						alt=""
						fill={props.fill}
					/>
				)}

				{props.value}
			</a>
		</>
	);
}

export default Anchor;
