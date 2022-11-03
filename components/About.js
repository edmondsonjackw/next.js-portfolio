import Image from "next/image";
import React from "react";
import Skills from "./Skills";

function About() {
	return (
		<div className="min-h-screen grid grid-cols-2 mx-24 mt-12">
			<h3 className="col-span-2 place-self-center">ABOUT</h3>
			<div>
				<p className="">
					Hi, my name is Jack Edmondson, I'm a front-end developer based in
					London.
				</p>
				{/* Hi, I'm Jack Edmondson. I'm a Front-End Developer based in London and a passionate advocate for the web as a creative medium. */}
				<p>
					Having previously held management roles in different industries, I
					deep dived into the world of front-end development and discovered a
					new passion that I am now fully immersed in.
				</p>
				<p>
					In my spare time you can find me watching Burnley FC, albeit often
					from afar, or if they're not playing, walking around taking pictures
					on my 35mm camera.
				</p>
			</div>
			<div className="h-full w-full grid ">
				<Image
					src="/../public/Self.png"
					width="100%"
					height="100%"
					objectFit="contain"
				/>
			</div>
			<h3 className="col-span-2 place-self-center">SKILLS</h3>
			<div className=" flex col-span-2 justify-center gap-4 flex-wrap">
				<Skills name="" value="HTML" />
				<Skills name="" value="CSS" />
				<Skills name="" value="JS" />
				<Skills name="" value="ReactJS" />
				<Skills name="" value="NextJS" />
				<Skills name="" value="TailwindCSS" />
				<Skills name="" value="Firebase" />
				<Skills name="" value="Github" />
				<Skills name="" value="Figma" />
				<Skills name="" value="Account Management" />
				<Skills name="" value="Team Management" />
				<Skills name="" value="Project Management" />
			</div>
		</div>
	);
}

export default About;
