import React from "react";
import Anchor from "../../Anchor";
import closeIcon from "next/image";
import Button from "../../Button";
import { useModalContext } from "../../../Context/ModalContext";

function ProjectDetailsModal(props) {
  const { handleModalClose } = useModalContext();
  return (
    <div className="w-auto border-2 border-primary rounded-lg py-4 px-6 flex flex-col ">
      <div className="flex ">
        <Button
          icon={closeIcon}
          name="close"
          src="/close-icon.svg"
          height="32"
          width="32"
          onClickFunction={handleModalClose}
          // handleCloseModal={props.handleCloseModal}
        />

      </div>
      <div className="space-y-10">
        <div className="w-fit">
          <p className="border-2 border-primary">{props.resources}</p>
        </div>

        <div className="">
          <p>{props.description}</p>
        </div>
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
