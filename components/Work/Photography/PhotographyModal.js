import React from "react";
import Button from "../../Button";
import closeIcon from "next/image";
import Image from "next/image";

import { useModalContext } from "../../../Context/ModalContext";

function PhotographyModal(props) {
  const { closePhotogModal, pageY } = useModalContext;
  //   top-[${props.pageY}px]
  if (!props.showPhotographyModal) return null;
  const topPageY = props.pageY;

  const myStyle = {
    top: props.pageY,
  };

  return (
    <div
      style={myStyle}
      className={`fixed overflow-hidden inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center `}
      onClick={props.handleModalClose}
    >
      <div
        style={myStyle}
        className={`w-3/6 h-screen border-2 absolute flex flex-col `}
      >
        <Button
          icon={closeIcon}
          name="close"
          src="/close-icon.svg"
          height="32"
          width="32"
          photoCloseButton
          onClickFunction={props.onClickFunction}
        />
        <h1>HELLO</h1>
        <div className="">
          <Image
            src={props.currentProject.src}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default PhotographyModal;
