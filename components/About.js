import Image from "next/image";
import React from "react";
import Button from "./Button";
import Skills from "./Skills";

function About() {
	return (
		<div className="min-h-screen grid grid-cols-2 mt-12 gap-4">
			<h2 className="col-span-2 place-self-center">About</h2>
			<div className="col-span-2 sm:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
				<p className="">
					Hi, my name is Jack Edmondson, I'm a front-end developer based in
					London.
				</p>
				{/* Hi, I'm Jack Edmondson. I'm a Front-End Developer based in London and a passionate advocate for the web as a creative medium. */}
				<p className="">
					Having previously held management roles in different industries, I
					deep dived into the world of front-end development and discovered a
					new passion that I am now fully immersed in.
				</p>
				<p className="pb-4">
					In my spare time you can find me watching Burnley FC, albeit often
					from afar, or if they're not playing, walking around taking pictures
					on my 35mm camera.
				</p>
				<Button value="CV" border />
			</div>

			<div className="grid col-span-2 sm:col-span-1 place-self-center w-5/6 h-full">
				<Image
					src="/../public/self.jpg"
					width="100%"
					height="100%"
					objectFit="contain"
					layout="responsive"
				/>
			</div>
			<h2 className="col-span-2 place-self-center">Skills</h2>
			<div className=" flex col-span-2 justify-center gap-2 sm:gap-4 flex-wrap">
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
