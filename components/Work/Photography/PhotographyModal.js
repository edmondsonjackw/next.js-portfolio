import React from "react";
import Button from "../../Button";
import closeIcon from "next/image";
import Image from "next/image";

import { useModalContext } from "../../../Context/ModalContext";

function PhotographyModal(props) {
  const { closePhotogModal, pageY, pageX } = useModalContext;
  //   top-[${props.pageY}px]

  // return (
  //   <div
  //     //   style={{ top: `${props.pageY}` }}
  //     // className={`absolute top-[${props.pageY}] w-[750px] h-[200px] border-2 flex flex-col p-10`}
  //     className={`border-2 flex flex-col p-10`}
  //   >
  //     {/* <Button
  //       icon={closeIcon}
  //       name="close"
  //       src="/close-icon.svg"
  //       height="32"
  //       width="32"
  //       photoCloseButton
  //       onClickFunction={closePhotogModal}
  //     /> */}
  //     <button onClick={closePhotogModal}>fuck</button>
  //   </div>
  // );

  return (
    // <div className="fixed block z-10 left-0 top-0 w-full h-full overflow-auto border-2">
    // <div className="border-2 fixed z-10 pt-20 left-0 top-0 w-full h-full overflow-auto">
    <div
      // className={`fixed border-2 m-auto w-5/6 block top-[${pageY}] left-{${pageX}}`}
      className={`w-screen h-screen relative z-50`}
    >
      <div
        className={`w-full h-full rounded bg-blue-400 flex flex-col justify-center`}
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
        <div className="w-full h-full">
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
