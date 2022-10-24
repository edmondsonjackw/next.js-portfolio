import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Anchor from "../Anchor";
import arrow from "next/image";
import lightModeIcon from "next/image";
import darkModeIcon from "next/image";
import ProjectDetailsModal from "./ProjectDetailsModal";

function ProjectCard(props) {
  const [displayProjectDetails, setDisplayProjectDetails] = useState(false);

  function toggleDisplayProjectDetails(e) {
    e.preventDefault();
    setDisplayProjectDetails(!displayProjectDetails);
  }

  return (
    <div className="flex flex-col justify-between w-full ">
      <div className="m-3 flex justify-between items-center">
        <Anchor
          value=""
          icon={arrow}
          href={props.href}
          name="projectLink"
          src="/project-arrow.svg"
          width="24"
          height="24"
          target="_blank"
        />
        <h3 className="py-5">{props.title}</h3>

        {/* <Image src="/project-arrow.svg" width="65" height="65" /> */}
        <Button
          name="expand"
          value="●●●"
          handleModal={props.handleModal}
          id={props.id}
        />
      </div>

      <div className="w-full flex justify-center mb-5">
        {props.displayDarkModeToggle && !props.darkMode ? (
          <Button
            icon={lightModeIcon}
            name="toggleDark"
            src="/light-mode.svg"
            width="32"
            height="32"
            handleDark={props.handleDark}
          />
        ) : props.displayDarkModeToggle && props.darkMode ? (
          <Button
            icon={darkModeIcon}
            name="toggleDark"
            src="/dark-mode.svg"
            width="32"
            height="32"
            handleDark={props.handleDark}
          />
        ) : (
          ""
        )}
      </div>

      <div className="">
        <ProjectDetailsModal
          description={props.description}
          resources={props.resources}
        />
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

export default ProjectCard;
