import Head from "next/head";
import Image from "next/image";
import landingImg from "next/image";
import Work from "./Work";
import Main from "./Main";
import Contact from "./Contact";
import About from "../components/About";
import { useModalContext } from "../Context/ModalContext";
import PhotographyModal from "../components/Work/Photography/PhotographyModal";
import { Fragment } from "react";

export default function Home() {
  const {
    showPhotographyModal,
    handleModalClose,
    pageX,
    pageY,
    currentProject,
    currentProjectId,
  } = useModalContext();

  return (
    <div>
      <Head>
        <title>Jack Edmondson Portfolio</title>
        <link rel="icon" href="/favicon.ico" />{" "}
      </Head>
      <Fragment>
   
        <main className="flex flex-col">
          <Main />
          <Work />
          <About />
          <Contact />
        </main>
        <PhotographyModal
          pageX={pageX}
          pageY={pageY}
          onClickFunction={handleModalClose}
          currentProject={currentProject}
          currentProjectId={currentProjectId}
          showPhotographyModal={showPhotographyModal}
        />
      </Fragment>
    </div>
  );
}
