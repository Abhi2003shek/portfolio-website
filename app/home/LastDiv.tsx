"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

const LastDiv = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      viewport={{ once: true }}
      className="w-full py-5 flex flex-col items-center mb-10"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center">

        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }}
          className="flex flex-col items-center lg:w-1/2 p-6 mb-8 lg:mb-0"
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-2 flex justify-center items-center">
            <svg 
              className="w-[60px] h-[60px] text-gray-800 dark:text-white" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              width="50" 
              height="50" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                fillRule="evenodd" 
                d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" 
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="lg:text-3xl text-2xl font-semibold mb-4">Experience</h3>
          <TextAnimate animation="slideUp" by="word" className="text-center mb-6">
            Bringing expertise to drive innovation and success.
          </TextAnimate>
          <Link href="/experience" className="flex items-center text-info dark:text-lime-400 transform hover:scale-105 transition duration-300">
            View More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short ml-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
          </Link>
        </motion.div>

        <div className="divider lg:divider-horizontal text-gray-400"></div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }}
          className="flex flex-col items-center lg:w-1/2 p-6"
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-2 flex justify-center items-center">
            <svg
              className="w-[60px] h-[60px] text-gray-800 dark:text-white" 
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="50" 
              height="50" 
              fill="currentColor"
              viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M3 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3Zm4.293 5.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L9.586 12 7.293 9.707ZM13 14a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3 className="lg:text-3xl text-2xl font-semibold mb-4">Projects</h3>
          <TextAnimate animation="slideUp" by="word" className="text-center mb-6">Turning ideas into impactful projects with creativity and precision.</TextAnimate>
          <Link href="/projects" className="flex items-center text-info dark:text-lime-400 transform hover:scale-105 transition duration-300">
            View More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short ml-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LastDiv;
