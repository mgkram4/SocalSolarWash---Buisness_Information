import Image from "next/image";
import Link from "next/link";
import Email from "./components/Email";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-center bg-cover bg-no-repeat bg-gray-400 rounded-xl bg-[url('https://t4.ftcdn.net/jpg/02/12/78/05/360_F_212780575_jCx2m2E7XMr1xUmaMMnb3hbVMqApo2PO.jpg')] bg-blend-multiply border-gray-500 border-2 shadow-xl">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 ">
          <h1 className="mb-4 py-2 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Specializing in Solar Panel Cleaning
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            At Socal Solar Wash, we are dedicated to delivering outstanding
            solar panel cleaning services, ensuring optimal energy production
            for your solar systems.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="/Quote"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              Get Quote
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="/Read"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white">
        <div className="py-8 mx-auto max-w-screen-xl ">
          <div className="bg-gray-50  border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-lg">
            <Link
              href="#"
              className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
            >
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18.75c-4.861 0-8.75-3.89-8.75-8.75S5.139 1.25 10 1.25 18.75 5.139 18.75 10 14.861 18.75 10 18.75z M10 3.75c-3.314 0-6.016 2.702-6.016 6.016S6.686 15.782 10 15.782 16.016 13.08 16.016 9.766 13.314 3.75 10 3.75zm0 10c-2.073 0-3.75-1.677-3.75-3.75S7.927 6.25 10 6.25s3.75 1.677 3.75 3.75-1.677 3.75-3.75 3.75z"></path>
              </svg>
              Optimization
            </Link>
            <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2">
              Enhance Your Investment
            </h1>
            <p className="text-lg font-normal text-gray-500  mb-6">
              Ensure the protection and longevity of your solar investment,
              while lowering monthly costs and maximizing output through our
              professional solar cleaning services.
            </p>
            <Link
              href="/Read"
              className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              Read more
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 shadow-lg">
              <Link
                href="#"
                className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
              >
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Cleanse
              </Link>
              <h1 className="text-gray-900 text-4xl font-extrabold mb-2">
                Purify Your Solar Efficiency
              </h1>
              <p className="text-lg font-normal text-gray-500  mb-4">
                Combat the impact of poor air quality in California by
                reclaiming up to 30% of lost solar system efficiency through our
                specialized cleaning services.
              </p>
              <a
                href="/Read"
                className="text-blue-600  hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  // aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="bg-gray-50  border border-gray-200  rounded-lg p-8 md:p-12 shadow-lg">
              <Link
                href="#"
                className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
              >
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.82L20.18 7 12 11.18 3.82 7 12 4.82zM4 9v6l8 4 8-4V9l-8-4-8 4z" />
                </svg>
                Lasting
              </Link>
              <h2 className="text-gray-900  text-3xl font-extrabold mb-2">
                Unlocking Success through Consistency
              </h2>
              <p className="text-lg font-normal text-gray-500  mb-4">
                With ongoing poor air quality, exacerbated by California Fires,
                we highly recommend regular solar panel cleanings 2-3 times a
                year.
              </p>

              <Link
                href="/Read"
                className="text-blue-600  hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  // aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* BREAK HERE */}

      <Pricing />

      <Email />

      <Footer />
    </div>
  );
}
