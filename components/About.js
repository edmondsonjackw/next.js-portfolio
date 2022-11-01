import Image from "next/image";
import React from "react";
import Anchor from "./Anchor";

function About() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="">
        <h3 className="">ABOUT</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Image
        src="/../public/Self.png"
        width="100%"
        height="100%"
        objectFit="contain"
      />
      <div
        className="flex flex-col col-span-2
      "
      >
        <h3 className="place-self-center">SKILLS</h3>
        <div className="flex space-x-4">
          <Anchor name="" value="HTML" disabled border />
          <Anchor name="" value="CSS" disabled border />
          <Anchor name="" value="JS" disabled border />
          <Anchor name="" value="ReactJS" disabled border />
          <Anchor name="" value="NextJS" disabled border />
          <Anchor name="" value="TailwindCSS" disabled border />
          <Anchor name="" value="Firebase" disabled border />
          <Anchor name="" value="" disabled />
        </div>
      </div>
    </div>
  );
}

export default About;
