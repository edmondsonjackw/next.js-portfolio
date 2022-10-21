import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Anchor from "../components/Anchor";
import github from "next/image";
import linkedIn from "next/image";

function Main() {
  return (
    // <section className="flex justify-between items-center space-x-10 min-h-screen ">
    // <section className="grid grid-cols-2 gap-0 min-h-screen">
    <section className="min-h-screen flex flex-col justify-between px-24 py-10">
      <div className="flex space-x-4 justify-end">
        <Anchor
          value={""}
          name="About"
          href="https://github.com/Edmndsn"
          icon={github}
          src={"/github-icon.svg"}
          width="24"
          height="24"
          fill="white"
          target="_blank"
        />
        <Anchor
          value={""}
          name="About"
          href="https://www.linkedin.com/in/jackedmondson/"
          icon={linkedIn}
          src={"/linkedin1-icon.svg"}
          width="24"
          height="24"
          fill="white"
          target="_blank"
        />
      </div>

      <div className="flex flex-col items-center space-y-10 ">
        {/* <div className="text-center flex flex-col items-center"> */}
        <h1 className="  tracking-wide ">JACK WILLIAM</h1>
        <h1 className=" tracking-widest">EDMONDSON</h1>

        <h2 className="italic tracking-tighter text-center max-w-2xl">Front-end developer</h2>
      </div>
      {/* </div> */}

      <div className="w-full flex justify-center mb-10">
        <Navbar />
        {/* </div> */}
      </div>
      {/* <Navbar /> */}

      {/* <Image
            src="/landing-image.svg"
            width="500"
            height="780"
            objectFit="cover"
          /> */}
    </section>
  );
}

export default Main;
