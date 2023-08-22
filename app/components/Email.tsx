"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Player } from "@lottiefiles/react-lottie-player";

const Email = () => {
  const [isMessageSent, setMessageSent] = useState(false);

  const triggerEmail = async (data: any) => {
    await emailjs
      .send("service_wg5jhtp", "template_qe04irp", data, "EhkxCmc4ojfBZLfjR")
      .then((success) => {
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
        }, 5000); // Display the message for 5 seconds
      });
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      address: e.target[2].value,
      message: e.target[3].value,
    };
    triggerEmail(data);
  };

  return (
    <div className="">
      <div className="flex h-screen justify-center py-8 mx-auto max-w-screen-xl ">
        <div className="bg-gray-50   border border-gray-200 shadow-lg  rounded-lg p-8  mb-8 items-center justify-center">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2  text-center">
            Connect to Receive a Quote
          </h1>
          <h1 className="p-4 m-2 text-center  text-gray-600 md:text-3xl lg:text-3xl">
            Expect a response within 24-48 Hrs. Thank you for your patience!
          </h1>
          {isMessageSent && (
            <div className="mb-4 bg-green-600 text-white rounded-xl font-3xl">
              Message sent!
            </div>
          )}
          <form onSubmit={onFormSubmit} className="flex flex-col" action="#">
            <input
              className="mb-4 p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Enter Name"
              required
            />
            <input
              className="mb-4 p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Enter Email"
              required
            />
            <input
              className="mb-4 p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Enter Address"
              required
            />
            <textarea
              className="mb-4 p-2 border border-gray-300 rounded"
              placeholder="Enter Message"
              required
            />
            <input
              className="p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
              type="submit"
              value="Submit"
            />
          </form>
          <div style={{ width: "300px", height: "300px", margin: "auto" }}>
            <Player
              autoplay
              loop
              src="/solarContact.json"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
