"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Bachelor from "../components/assets/BE-CSE.png";
import APS from "../components/assets/APS.png";

const Education: React.FC = () => {
  return (
    <div className="mt-3 mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 text-2xl sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-center lg:text-left p-5 flex justify-center"
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col grid-cols-9 p-2 mx-auto md:grid"
      >
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex md:contents flex-row-reverse"
        >
          <div className="relative p-4 my-6 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto flex items-center flex-col md:flex-row">
            <Image src={Bachelor} alt="Education 1" className="w-20 h-15 mb-4 md:mb-0 md:mr-4" />
            <div>
              <h3 className="text-lg font-bold lg:text-xl text-gray-900 dark:text-white">Bachelor Of Engineering (CSE)</h3>
              <p className="mt-1 font-semibold leading-6 text-gray-700 dark:text-gray-400">MVJ College Of Engineering</p>
              <p className="mt-1 leading-6 text-gray-700 dark:text-gray-400">Grade : 9.42 CGPA</p>
              <span className="absolute text-sm -top-5 left-2 whitespace-nowrap text-gray-700 dark:text-gray-400">Bachelor</span>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-info dark:bg-lime-400 rounded-t-full"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-base-100 border-4 border-info dark:border-lime-400 rounded-full top-1/2"></div>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex md:contents"
        >
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-info dark:bg-lime-400 rounded-t-full bg-gradient-to-b from-info-focus to-info"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-base-100 border-4 border-info dark:border-lime-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-4 my-6 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 col-start-6 col-end-10 mr-auto flex items-center flex-col md:flex-row">
            <Image src={APS} alt="Education 1" className="w-20 h-15 mb-4 md:mb-0 md:mr-4" />
            <div>
              <h3 className="text-lg font-bold lg:text-xl text-gray-900 dark:text-white">12 th Standard</h3>
              <p className="mt-1 font-semibold leading-6 text-gray-700 dark:text-gray-400">Army Public School K Kamaraj Road</p>
              <p className="mt-1 leading-6 text-gray-700 dark:text-gray-400">Grade : 90.0 Percentage</p>
              <span className="absolute text-sm -top-5 left-2 whitespace-nowrap text-gray-700 dark:text-gray-400">High School</span>
            </div>
          </div>
        </motion.div>

        {/* Section 3 - 10th Standard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex md:contents flex-row-reverse"
        >
          <div className="relative p-4 my-6 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto flex items-center flex-col md:flex-row">
            <Image src={APS} alt="Education 1" className="w-20 h-15 mb-4 md:mb-0 md:mr-4" />
            <div>
              <h3 className="text-lg font-bold lg:text-xl text-gray-900 dark:text-white">10 th Standard</h3>
              <p className="mt-1 font-semibold leading-6 text-gray-700 dark:text-gray-400">Army Public School K Kamaraj Road</p>
              <p className="mt-1 leading-6 text-gray-700 dark:text-gray-400">Grade : 83.6 Percentage</p>
              <span className="absolute text-sm -top-5 left-2 whitespace-nowrap text-gray-700 dark:text-gray-400">Matric</span>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-info dark:bg-lime-400 rounded-t-full"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-base-100 border-4 border-info dark:border-lime-400 rounded-full top-1/2"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;