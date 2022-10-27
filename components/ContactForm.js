import Image from "next/image";
import React from "react";

function ContactForm() {
  return (
    <div className="text-primary space-y-4 my-auto">
      <form className="space-y-4 ">
        <div className="w-fit flex justify-between items-center space-5 bg-transparent hover:bg-gray-700 text-primary border-2 border-primary rounded-lg space-x-4 py-2 px-4 cursor-pointer">
          <Image
            src="/name-icon.svg"
            height="24"
            width="24"
            objectFit="contain"
          />
          <input
            className="bg-transparent placeholder-primary "
            placeholder="Name"
          ></input>
        </div>
        <div className="w-fit flex justify-between items-center space-5 bg-transparent hover:bg-gray-700 text-primary  border-2 border-primary rounded-lg space-x-4 py-2 px-4 cursor-pointer">
          <Image
            src="/email-icon.svg"
            height="24"
            width="24"
            objectFit="contain"
          />
          <input
            className="bg-transparent placeholder-primary "
            placeholder="Email"
          ></input>
        </div>

        <div className="w-full flex justify-between items-center space-5 bg-transparent hover:bg-gray-700 text-primary border-2 border-primary rounded-lg space-x-4 py-2 px-4 cursor-pointer">
          <textarea
            className="bg-transparent text-primary placeholder-primary min-w-full min-h-full "
            placeholder="Your message..."
            id="textarea"
          ></textarea>
        </div>
        <button className="min-w-full bg-primary hover:bg-gray-700 text-black border-2 border-primary rounded-lg space-x-4 py-2 px-4 cursor-pointer">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
