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

      {/* <main className="flex flex-col overflow-hidden"> */}
      {/* <body
        className={` ${showPhotographyModal ? "overflow-hidden" : ""}
        }`}
      > */}
      <main className="flex flex-col">
        {/* <div className="fixed inset-0 bg-black/30" aria-hidden="true" /> */}
        {showPhotographyModal ? (
          <div className="fixed inset-0 bg-black/30">
            <PhotographyModal
              pageY={pageY}
              onClickFunction={handleModalClose}
              currentProject={currentProject}
              currentProjectId={currentProjectId}
            />
          </div>
        ) : (
          <>
            {" "}
            <Main />
            <Work />
            <About />
            <Contact />
          </>
        )}
      </main>
      {/* </body> */}
    </div>
  );
}
