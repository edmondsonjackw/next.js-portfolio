import React from "react";
import Anchor from "./Anchor";
import Github from "next/image";

function Footer() {
	return (
		<nav className="py-6 flex justify-between border-t-2 border-primary min-w-full ">
			<div className="flex space-x-4">
				<Anchor value="About" name="About" href="#" border />
				<Anchor value="Work" name="About" href="#" border />
				<Anchor value="Contact" name="Work" href="#" border />
				<Anchor value="CV" name="Contact" href="#" border />
			</div>

			<Anchor
				value={""}
				name="About"
				href="https://github.com/Edmndsn"
				icon={Github}
				src={"/github-icon.svg"}
				width="24"
				height="24"
				fill="white"
				target="_blank"
			/>
		</nav>
	);
}

export default Footer;
