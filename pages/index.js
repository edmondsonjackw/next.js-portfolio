import Head from "next/head";
import Work from "./Work";
import Main from "./Main";
import Contact from "./Contact";
import About from "../components/About";
import PhotographyModal from "../components/Work/Photography/PhotographyModal";

export default function Home() {
	return (
		<>
			<Head>
				<title>Jack Edmondson Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"></meta>
			</Head>
			<main className="flex flex-col justify-center overflow-hidden mx-2 sm:mx-4 md:mx-8 lg:mx-10 xl:mx-14">
				<Main />
				<Work />
				<About />
				<Contact />
				<PhotographyModal />
			</main>
		</>
	);
}
