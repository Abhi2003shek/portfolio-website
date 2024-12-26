"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Bachelor from "../components/assets/BE-CSE.png";
import APS from "../components/assets/APS.png";

const Education: React.FC = () => {
  return (
    <div className="mt-3 mb-10">
      <h2 className="mb-8 text-xl sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-center lg:text-left p-5 flex justify-center">
        Education
      </h2>
      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        {/* Section 1 */}
        <div className="flex md:contents flex-row-reverse">
          <div
            className="relative p-4 my-6 bg-blue-500 text-white dark:bg-lime-400 dark:text-black rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto flex items-center shadow-md"
          >
            <Image
              src={Bachelor}
              alt="Education 1"
              className="w-20 h-15 mr-4"
            />
            <div>
              <h3 className="text-lg font-bold lg:text-xl">Bachelor Of Engineering (CSE)</h3>
              <p className="mt-1 font-semibold leading-6">MVJ College Of Engineering</p>
              <p className="mt-1 leading-6">Grade : 9.42 CGPA</p>
              <span className="absolute text-sm -top-5 left-2 whitespace-nowrap  text-black dark:text-white">Bachelor</span>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-info dark:bg-lime-400 rounded-t-full "></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-base-100 border-4 border-info dark:border-lime-400 rounded-full top-1/2"></div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-info dark:bg-lime-400 rounded-t-full bg-gradient-to-b from-info-focus to-info"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-base-100 border-4 border-info dark:border-lime-400 rounded-full top-1/2"></div>
          </div>
          <div
            className="relative p-4 my-6 bg-blue-500 text-white dark:bg-lime-400 dark:text-black rounded-xl col-start-6 col-end-10 mr-auto flex items-center shadow-md"
          >
            <Image
              src={APS}
              alt="Education 1"
              className="w-20 h-15 mr-4"
            />
            <div>
              <h3 className="text-lg font-bold lg:text-xl">12 th Standard</h3>
              <p className="mt-1 font-semibold leading-6">Army Public School K Kamaraj Road</p>
              <p className="mt-1 leading-6">Grade : 90.0 Percentage</p>
              <span className="absolute text-sm -top-5 left-2 whitespace-nowrap  text-black dark:text-white">High School</span>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex md:contents flex-row-reverse">
          <div
            className="relative p-4 my-6 bg-blue-500 text-white dark:bg-lime-400 dark:text-black rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto flex items-center shadow-md"
          >
            <Image
              src={APS}
              alt="Education 1"
              className="w-20 h-15 mr-4"
            />
            <div>
              <h3 className="text-lg font-bold lg:text-xl">10 th Standard</h3>
              <p className="mt-1 font-semibold leading-6">Army Public School K Kamaraj Road</p>
              <p className="mt-1 leading-6">Grade : 83.6 Percentage</p>
              <span className="absolute text-sm -top-5 left-2 whitespace-nowrap text-black dark:text-white">Matric</span>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-info dark:bg-lime-400 rounded-t-full bg-gradient-to-b from-info-focus to-info"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-base-100 border-4 border-info dark:border-lime-400 rounded-full top-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
