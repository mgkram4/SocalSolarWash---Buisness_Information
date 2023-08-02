"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Pricing() {
  return (
    <section>
      <div className="min-h-screen bg-gray-50 border-gray-200 rounded-xl flex flex-col items-center justify-center shadow-xl p-4">
        <div className="text-5xl font-bold lg:mb-8 relative">
          <span className="text-gradient bg-gradient-to-r from-black to-gray-700 text-transparent bg-clip-text">
            Affordable Services
          </span>
          <div className="h-1 w-16 bg-gray-700 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
            <div style={{ width: "400px", height: "300px" }}>
              <Player
                autoplay
                loop
                src="/solarPricing.json"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
            <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg w-full h-full shadow-xl">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Single Story
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  250
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /10 panels
                </span>
              </div>
              <div className="flex items-baseline text-gray-900 dark:text-white mt-2">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  350
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /15 panels
                </span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    2 team members
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
            <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg sm:p-8 shadow-xl w-full">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Two Story
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  450
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /10 panels
                </span>
              </div>
              <div className="flex items-baseline text-gray-900 dark:text-white mt-2">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  650
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /15 panels
                </span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    2 team members
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
