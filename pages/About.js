import React from "react";
import Image from "next/image";
import Skills from "../components/Skills";
import Anchor from "../components/Anchor";

const About = () => {
	return (
		<div
			id="about"
			className="min-h-screen grid grid-cols-10 mt-12 gap-4 space-y-4 mx-14 sm:mx-20 md:mx-22 lg:mx-24 xl:mx-28">
			<h2 className="col-span-10 place-self-center">ABOUT</h2>
			<div className="col-span-10 sm:col-span-6 flex flex-col justify-center items-center mx-auto gap-1 md-gap:2 lg:gap-3 xl:gap-4 sm:items-start text-center sm:text-left max-w-[440px] sm:max-w-none">
				<p>
					Hi, my name is Jack Edmondson, I&apos;m a front-end developer based in
					London.
				</p>
				<p>
					Having previously held management roles in different industries, I
					deep dived into the world of front-end development and discovered a
					new passion that I am now fully immersed in.
				</p>
				<p className="pb-1 md-pb:2 lg:pb-3 xl:pb-4">
					In my spare time you can find me watching Burnley FC, albeit often
					from afar, or if they&apos;re not playing, walking around taking
					pictures on my 35mm camera.
				</p>
				<Anchor value="CV" href="../jack-edmondson-cv.pdf" download border />
			</div>
			<div className="grid col-span-10 sm:col-span-4 place-self-center sm:place-self-end w-5/6 h-full">
				<Image
					src="/../public/self.png"
					width="100%"
					height="100%"
					objectFit="contain"
					layout="responsive"
					alt="self"
				/>
			</div>
			<h2 className="col-span-10 place-self-center">SKILLS</h2>
			<div className=" flex col-span-10 justify-center gap-2 sm:gap-4 flex-wrap">
				<Skills name="HTML5" value="HTML5" />
				<Skills name="CSS3" value="CSS3" />
				<Skills name="JavaScript" value="JavaScript" />
				<Skills name="React" value="React" />
				<Skills name="Next-JS" value="Next.JS" />
				<Skills name="TailwindCSS" value="TailwindCSS" />
				<Skills name="Firebase" value="Firebase" />
				<Skills name="Github" value="Github" />
				<Skills name="Figma" value="Figma" />
				<Skills name="Account-Management" value="Account Management" />
				<Skills name="Team-Management" value="Team Management" />
				<Skills name="Project-Management" value="Project Management" />
			</div>
		</div>
	);
};

export default About;
