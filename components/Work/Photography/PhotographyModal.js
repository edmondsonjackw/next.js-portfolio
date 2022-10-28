import React from "react";
import Button from "../../Button";
import closeIcon from "next/image";

function PhotographyModal(props) {
  console.log(props.pageY);
  //   top-[${props.pageY}px]
  return (
    <div
      //   style={{ top: `${props.pageY}` }}
      // className={`absolute top-[${props.pageY}] w-[750px] h-[200px] border-2 flex flex-col p-10`}
      className={`fixed top-[${props.pageY}] w-screen h-full border-2 flex flex-col p-10`}
    >
      <Button
        icon={closeIcon}
        name="close"
        src="/close-icon.svg"
        height="32"
        width="32"
        photoCloseButton
        onClickFunction={props.handleModalClose}
      />
      <h1>HELLO</h1>
    </div>
  );
}

export default PhotographyModal;
