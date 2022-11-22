import Head from "next/head";
import Work from "./Work";
import Main from "./Main";
import Contact from "./Contact";
import About from "../components/About";
import Image from "next/image";
import { useModalContext } from "../Context/ModalContext";
import PhotographyModal from "../components/Work/Photography/PhotographyModal";

export default function Home() {
	const {
		currentProject,
		showPhotographyModal,
		goForwardPhotog,
		goBackPhotog,
	} = useModalContext();

	return (
		<>
			<Head>
				<title>Jack Edmondson Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"></meta>
			</Head>
			<main className="flex flex-col justify-center overflow-hidden mx-2 sm:mx-4 xl:mx-14 lg:mx-10 md:mx-8 sm:mx-8 ">
				<Main />
				<Work />
				<About />
				<Contact />
				<PhotographyModal
					// currentProject={currentProject}
					showPhotographyModal={showPhotographyModal}
					// goBackPhotog={goBackPhotog}
					// onClickFunction={handleModalClose}
					// currentIndex={currentIndex}
				/>
			</main>
		</>
	);
}
