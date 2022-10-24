import React from "react";
import Anchor from "../Anchor";
import ProjectResourcesCard from "./ProjectResourcesCard";
import { projectPortfolioData } from "./projectPortfolioData";

function ProjectDetailsModal(props) {
  //   const resourcesArray = projectPortfolioData.map(resource => (
  //     <ProjectResourcesCard key={resource.id} value={resource.resources} />
  //   ));

  return (
    <div>
      <ProjectResourcesCard key={props.id} value={props.resources} />
    </div>
  );
}

export default ProjectDetailsModal;
