import React from "react";
import Button from "../../Button";
import closeIcon from "next/image";

function PhotographyModal(props) {
  return (
    <div className="flex flex-col p-10">
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
