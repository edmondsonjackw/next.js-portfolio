import React from "react";

function Skills(props) {
	return (
		<>
			<h6
				className="w-fit h-fit flex justify-between items-center bg-transparent rounded-lg py-2 px-4 cursor-pointer
				border-primary border-2 hover:bg-gray-700"
				name={props.name}>
				{props.value}
			</h6>
		</>
	);
}

export default Skills;
