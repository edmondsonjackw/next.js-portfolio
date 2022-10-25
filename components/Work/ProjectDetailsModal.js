import React from "react";
import Anchor from "../Anchor";
import ProjectResourcesCard from "./ProjectResourcesCard";
import { projectPortfolioData } from "./projectPortfolioData";
import ProjectDescriptionCard from "./ProjectDescriptionCard";

function ProjectDetailsModal(props) {
  //   const resourcesArray = projectPortfolioData.map(resource => (
  //     <ProjectResourcesCard key={resource.id} value={resource.resources} />
  //   ));

  return (
    <div className="border-2 flex flex-col ">
      <div className="w-full">
        <ProjectResourcesCard
          key={props.id}
          value={props.resources}
          currentProjectId={props.currentProjectId}
          currentProject={props.currentProject}
        />
      </div>
      <div className="">
        <ProjectDescriptionCard
          value={props.description}
          currentProjectId={props.currentProjectId}
          currentProject={props.currentProject}
        />
      </div>
    </div>
  );
}

export default ProjectDetailsModal;

// const projectResourcesArray = () =>
// props.currentProject.map(project => (
//   <ProjectResourcesCard
//     key={props.id}
//     value={props.resources}
//     currentProjectId={props.currentProjectId}
//     currentProject={props.currentProject}
//   />
// ));

// const projectDescriptionArray = () =>
// props.currentProject.map(project => (
//   <ProjectDescriptionCard
//     value={props.description}
//     currentProjectId={props.currentProjectId}
//     currentProject={props.currentProject}
//   />
// ));

// return (
// <div className="border-2 flex flex-col ">
//   <div className="w-full">{projectResourcesArray}</div>
//   <div className="w-full">{projectDescriptionArray}</div>
// </div>
// );
