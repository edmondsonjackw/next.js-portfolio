import React from "react";
// import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Anchor from "../components/Anchor";
import emailIcon from "next/image";
import linkedIn from "next/image";

function Contact() {
	return (
		<div id="contact" className="flex flex-col items-center min-h-screen">
			<div className="flex flex-col justify-between items-center m-auto gap-4">
				<h3 className="italic">Reach out. </h3>
				<div className="flex gap-4 mt-4">
					<Anchor
						value=""
						href="mailto:edmondson.jackw@gmail.com"
						icon="emailIcon"
						src="/email-icon.svg"
						width="24"
						height="24"
						border
					/>
					<Anchor
						value={""}
						name="About"
						href="https://www.linkedin.com/in/jackedmondson/"
						icon="linkedIn"
						src={"/linkedin1-icon.svg"}
						width="24"
						height="24"
						fill="white"
						target="_blank"
						border
					/>
				</div>
			</div>
			<div className="place-self-center w-full">
				<Footer />
			</div>
		</div>
	);
}

export default Contact;
