import React from "react";
import { projectPortfolioData } from "./projectPortfolioData";

function ProjectResourcesCard(props) {
  // return <p className="">{props.value}</p>;
  // props.currentProject.splice(currentProjectId, projectPortfolioData - 1);

  // const resources = props.value.filter(resource => resource.length > 3);

  return (
    <p className="">
      {/* {projectPortfolioData[`${props.currentProjectId}`].resources} */}
      {/* {props.currentProject.resources} */}
      {/* {props.value} */}
      {/* {resources} */}
      {projectPortfolioData
        .filter(project => project.id === props.currentProjectId)
        .map(project => project.resources)}
    </p>
  );
}

export default ProjectResourcesCard;

// SET THE ARRAY TO A NEW ARRAY AND WHEN SHOW MORE IS CLICKED,
// SPLICE THE ARRAY FROM CURRENTPROJECTID TO NEW ARRAY SO THAT ONLY PROJECT IS SHOWN,
// WHEN ITS CLICKED ON A NEW PROJECT, ADD THIS TO THE ARRAY AND DISPLAY,
// IF CLOSE BUTTON IS CLICKED, POP IT FROM THE ARRAY
