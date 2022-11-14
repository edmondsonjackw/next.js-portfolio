import Head from "next/head";
import Image from "next/image";
import landingImg from "next/image";
import Work from "./Work";
import Main from "./Main";
import Contact from "./Contact";
import About from "../components/About";
import { useModalContext } from "../Context/ModalContext";
import PhotographyModal from "../components/Work/Photography/PhotographyModal";

export default function Home() {
	const {
		showPhotographyModal,
		handleModalClose,
		pageX,
		pageY,
		currentProject,
		currentProjectId,
		goForwardPicture,
		goBackPicture,
		currentIndex,
	} = useModalContext();

	return (
		<>
			<Head>
				<title>Jack Edmondson Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"></meta>{" "}
			</Head>
			<main className="flex flex-col justify-center overflow-hidden mx-4 xl:mx-14 lg:mx-10 md:mx-8 sm:mx-8 ">
				<Main />
				<Work />
				<About />
				<Contact />

				<PhotographyModal
					pageX={pageX}
					pageY={pageY}
					onClickFunction={handleModalClose}
					currentProject={currentProject}
					currentProjectId={currentProjectId}
					showPhotographyModal={showPhotographyModal}
					goForwardPicture={goForwardPicture}
					goBackPicture={goBackPicture}
					currentIndex={currentIndex}
				/>
			</main>
		</>
	);
}
