import React from "react";
import Anchor from "./Anchor";

const Footer = () => {
	return (
		<footer className="py-6 flex justify-between border-t-2 border-primary min-w-full">
			<div className="flex space-x-4">
				<Anchor value="About" name="About" href="#about" border />
				<Anchor value="Work" name="About" href="#work" border />
				<Anchor
					value="CV"
					name="Contact"
					href="../jack-edmondson-cv.pdf"
					download
					border
				/>
			</div>
			<Anchor
				name="About"
				href="https://github.com/Edmndsn"
				icon="github"
				src="/Icons/github-icon.svg"
				width="24"
				height="24"
				target="_blank"
			/>
		</footer>
	);
};

export default Footer;
