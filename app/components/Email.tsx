"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

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
    <div className="flex flex-col py-8 mx-auto max-w-screen-xl lg:py-8">
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 shadow-lg dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Let's Connect!
        </h1>
        {isMessageSent && (
          <div className="mb-4 bg-green-600 text-white rounded-xl  font-3xl">
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
      </div>
    </div>
  );
};

export default Email;
