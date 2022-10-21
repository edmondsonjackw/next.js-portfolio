import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Anchor from "../Anchor";
import arrow from "next/image";
import lightModeIcon from "next/image";
import darkModeIcon from "next/image";

function WorkCard(props) {
  // const [toggleDarkMode, setToggleDarkMode] = useState(false);

  // function handleDark(e) {
  //   setToggleDarkMode(prev => !prev);
  //   // localStorage.setItem("mode", toggleDarkMode ? "light" : "dark");
  //   e.preventDefault();
  //   // if (toggleDarkMode) {
  //   //   return <Image src="/light-mode.svg" width="24" height="24" />
  //   // } else {
  //   //   <Image src="/dark-mode.svg" width="24" height="24" />
  //   // }
  // }

  return (
    <div className="flex flex-col justify-between w-full ">
      <div className="m-3 flex justify-between items-center">
        <Anchor
          value=""
          icon={arrow}
          href={props.href}
          name="projectLink"
          src="/project-arrow.svg"
          width="65"
          height="65"
          target="_blank"
        />
        <h3 className="py-5">{props.title}</h3>

        {/* <Image src="/project-arrow.svg" width="65" height="65" /> */}
        <Button name="expand" value="●●●" />
      </div>
      {props.displayDarkModeToggle && !props.darkMode ? (
        <Button
          icon={lightModeIcon}
          name="toggleDark"
          src="/light-mode.svg"
          width="24"
          height="24"
          onClick={props.handleDark}
        />
      ) : props.displayDarkModeToggle && props.darkMode ? (
        <Button
          icon={darkModeIcon}
          name="toggleDark"
          src="/dark-mode.svg"
          width="24"
          height="24"
          onClick={props.handleDark}
        />
      ) : (
        ""
      )}

      <div className="">
        <Image
          src={props.src}
          alt=""
          width="100%"
          height="50%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default WorkCard;