import React from "react";
import Anchor from "./Anchor";
import Github from "next/image";
import linkedIn from "next/image";

function Footer() {
  return (
    <nav className="py-6 mb-10 flex justify-between border-t-2 border-b-white min-w-full ">
      <div className="flex space-x-4">
        <Anchor value="About" name="About" href="#" />
        <Anchor value="Work" name="About" href="#" />
        <Anchor value="Contact" name="Work" href="#" />
        <Anchor value="CV" name="Contact" href="#" />
      </div>
      <div className="flex space-x-4">
        <Anchor
          value={""}
          name="About"
          href="https://github.com/Edmndsn"
          icon={Github}
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
    </nav>
  );
}

export default Footer;
