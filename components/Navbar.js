import React from "react";
import Anchor from "./Anchor";

function Navbar() {
	return (
		<nav className="w-fit flex justify-center items-center border-2 border-primary rounded-lg p-1 m-1">
			{/* <h2 className="text-2xl font-bold">jwedmondson</h2> */}
			<div className="flex space-x-4 justify-between ">
				<Anchor value="Work" name="Work" href="#" border />
				<Anchor value="About" name="About" href="#" border />
				<Anchor value="Contact" name="Contact" href="#" border />
			</div>
		</nav>
	);
}

export default Navbar;
