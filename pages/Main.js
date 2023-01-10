import React from "react";
import Navbar from "../components/Navbar";
import Anchor from "../components/Anchor";

const Main = () => {
	return (
		<section
			id="main"
			className="min-h-screen flex flex-col items-center justify-between px-24 py-10 gap-4">
			<div className="flex space-x-4 w-full justify-center sm:justify-end">
				<Anchor
					name="github"
					href="https://github.com/edmondsonjackw"
					icon="github"
					src={"/Icons/github-icon.svg"}
					width="24"
					height="24"
					target="_blank"
				/>
				<Anchor
					name="linkedin"
					href="https://www.linkedin.com/in/jackedmondson/"
					icon="linkedIn"
					src="/Icons/linkedin1-icon.svg"
					width="24"
					height="24"
					target="_blank"
				/>
			</div>
			<div className="flex flex-col items-center justify-center space-y-10 min-w-fit">
				<h1 className="tracking-tighter lg:tracking-wide xs:tracking-tighter">
					JACK WILLIAM
				</h1>
				<h1 className="tracking-normal lg:tracking-widest xs:tracking-normal">
					EDMONDSON
				</h1>
				<h2 className="italic tracking-tighter text-center max-w-2xl">
					Front-end developer
				</h2>
			</div>
			<div className="w-full flex justify-center mb-10">
				<Navbar />
			</div>
		</section>
	);
};

export default Main;
