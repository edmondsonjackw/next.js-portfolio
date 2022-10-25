import React, { useState } from "react";
import Image from "next/image";

function Button(props) {
  return (
    <>
      <button
        className={`w-fit flex justify-between items-center space-5 bg-transparent hover:bg-gray-700 rounded-lg py-2 px-4 cursor-pointer ${
          props.border ? "border-primary border-2" : ""
        }`}
        onClick={
          props.darkMode
            ? props.handleDark
            : props.handleModal
            ? event => props.handleModal(event, props.id)
            : ""
        }
        name={props.name}
        disabled={props.disabled}
      >
        {props.icon && (
          <Image
            name={props.name}
            icon={props.icon}
            src={props.src}
            width={props.height}
            height={props.height}
            alt=""
            fill={props.fill}
          />
        )}

        {props.value}
      </button>
    </>
  );
}

export default Button;
