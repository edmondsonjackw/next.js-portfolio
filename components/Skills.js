import React from "react";

function Skills(props) {
	return (
		<>
			<h6
				className="w-fit h-fit flex items-center bg-transparent rounded-lg py-2 px-3 sm:px-4 text-center text-xs sm:text-base cursor-pointer
				border-primary border-2 hover:bg-gray-700"
				name={props.name}>
				{props.value}
			</h6>
		</>
	);
}

export default Skills;
