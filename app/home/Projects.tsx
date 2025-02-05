import React from "react";
import Image from "next/image";
import Project from "../components/assets/project.png";

export default function Projects() {
  return (
    <div className="mb-10">
      <h2 className="mb-8 text-2xl sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-center lg:text-left p-5 flex justify-center">
        Projects
      </h2>
      <div className="max-w-sm md:max-w-2xl mx-auto p-6 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 md:flex md:items-center">
        <div className="hidden md:block md:w-1/3">
          <Image
            src={Project}
            alt="Project Thumbnail"
            width={200}
            height={150}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:ml-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a
            href="/Projects"
            className="btn btn-primary inline-flex items-center"
          >
            View More
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
