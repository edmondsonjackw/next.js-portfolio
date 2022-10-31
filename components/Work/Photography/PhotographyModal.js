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

  const modalStyle = {
    display: "block",
    position: "fixed",
    zIndex: "1",
    paddingTop: "100px",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgb(0,0,0)",
    backgroundColor: "rgba(0,0,0,0.9)",
  };

  const modal2Style = {
    backgroundColor: "#fefefe",
    margin: "auto",
    padding: "20px",
    border: "1px solid #888",
    width: "80%",
    // position: "fixed",
    // top: topPageY,
  };

  return (
    <div
      className={`fixed block z-10 pt-64 top-0 left-0 w-full h-full overflow: "auto", bg-black bg-opacity-25 backdrop-blur-sm`}
      onClick={props.handleModalClose}
      id="modal"
    >
      

      <div
        // style={modal2Style}
        className={`w-5/6 m-auto border-2 p-5`}
        id="modal-content"
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
        <div className="flex justify-center items-center">
          <Image
            src={props.currentProject.src}
            width="600px"
            height="600px"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default PhotographyModal;
