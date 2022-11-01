import React from "react";
import Button from "../../Button";
import closeIcon from "next/image";
import Image from "next/image";

import { useModalContext } from "../../../Context/ModalContext";

function PhotographyModal(props) {
  const { closePhotogModal, pageY } = useModalContext;
  if (!props.showPhotographyModal) return null;

  return (
    <div
      className={`fixed flex z-10 top-0 left-0 w-screen h-screen overflow: "auto", bg-black bg-opacity-25 backdrop-blur-sm`}
      onClick={props.handleModalClose}
    >
      <div
        className={`flex flex-col w-5/6 h-5/6 m-auto rounded-lg p-5  bg-black 900 bg-opacity-70`}
      >
        <div className="place-self-end">
          <Button
            icon={closeIcon}
            name="close"
            src="/close-icon.svg"
            height="32"
            width="32"
            photoCloseButton
            onClickFunction={props.onClickFunction}
          />
        </div>
        <div className="flex justify-center items-center w-[500px] h-[500px]">
          <Image
            src={props.currentProject.src}
            width="650px"
            height="650px"
            // width={
            //   props.currentProject.position === "Horizontal" ? "1700" : "1024"
            // }
            // height={
            //   props.currentProject.position === "Horizontal" ? "1024" : "1045"
            // }
            objectFit="cover"
            // layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default PhotographyModal;
