'use client'
import React from 'react';
import { motion } from "framer-motion";

export default function Professional() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="w-full flex justify-center"
      >
        <h2 className="mt-3 mb-2 text-3xl  font-extrabold text-center p-5">
          Professional Experience
        </h2>
      </motion.div>
      <div className="max-w-3xl mx-auto p-5 lg:p-10 md:border-0 sm:border-0 md:shadow-none sm:shadow-none md:dark:bg-transparent sm:dark:bg-transparent lg:border lg:border-gray-300 lg:rounded-xl lg:shadow-2xl lg:dark:bg-gray-800 lg:dark:border-gray-700">
        {[{
          title: "Software Engineer Intern",
          company: "LRDE Defence Research and Development Organisation, Bengaluru, India",
          date: "Jul 2023",
          description: "Optimized C codebase with CUDA for GPU acceleration, achieving a 60% reduction in execution time for airborne clutter simulation."
        }, {
          title: "Application Developer Intern",
          company: "Helpy Moto (Remote), India",
          date: "Dec, 2022",
          description: "Designed, developed, and optimized iOS/Android mobile applications using React Native for a seamless user experience."
        }, {
          title: "UI/UX Designer Intern",
          company: "Helpy Moto (Remote), India",
          date: "Oct, 2022",
          description: "Spearheaded UI/UX improvements using Figma, leveraging wireframing and prototyping to enhance design consistency by 30%."
        }, {
          title: "Graphic Designer Intern",
          company: "Asiana Times (Remote), India",
          date: "May, 2021",
          description: "Leveraged Figma and Canva to craft visually compelling, trend-driven designs, improving social media engagement."
        }].map(({ title, company, date, description }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 sm:pl-32 py-6 group"
          >
            <div className="font-caveat font-medium text-2xl text-indigo-500  dark:text-lime-400 mb-1 sm:mb-0">{title}</div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 dark:after:bg-emerald-300 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 dark:text-indigo-600 dark:bg-indigo-100 rounded-full">{date}</time>
              <div className="text-xl font-bold text-slate-900 dark:text-white">{company}</div>
            </div>
            <div className="text-slate-500 dark:text-gray-300">{description}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
