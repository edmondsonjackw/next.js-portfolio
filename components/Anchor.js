import React, { useState } from "react";
import Image from "next/image";

function Anchor(props) {
	const [displayedWork, setDisplayedWork] = useState(true);

	function workSelector(event) {
		event.preventDefault();
		setDisplayedWork(!displayedWork);
	}

	return (
		<>
			<a
				className={`w-fit flex justify-between items-center gap-1 bg-transparent hover:bg-gray-700 rounded-lg text-xs sm:text-base cursor-pointer ${
					props.border ? "border-primary border-2" : ""
				} ${!props.pCard ? "py-2 px-3 sm:px-4" : ""}`}
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
}

export default Anchor;
