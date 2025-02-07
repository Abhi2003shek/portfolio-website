'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Gdsc from "../components/volunteer/gdsc-logo.png";
import Nic from "../components/volunteer/nic-logo.png";
import Sdc from "../components/volunteer/sdc-logo.png";
import Ncc from "../components/volunteer/ncc-logo.png";

const extracurricular = [
  {
    image: Gdsc,
    title: 'Google Developer Student Clubs',
    designation: 'Design Co-Lead',
    description: 'A community of developers and designers coming together to build innovative solutions.'
  },
  {
    image: Nic,
    title: 'Nova Innovative Compskey',
    designation: 'Design Lead',
    description: 'Contributed to fostering innovation and technical growth by organizing events that enhanced students skills and adaptability to emerging IT trends.'
  },
  {
    image: Sdc,
    title: 'Software Development Club',
    designation: 'Design/Social Team Member',
    description: 'Empowering aspiring developers through collaboration, learning, and innovation.'
  },
  {
    image: Ncc,
    title: 'National Cadet Corps',
    designation: 'Cadet',
    description: 'Instilling discipline and leadership qualities through rigorous training and activities.'
  }
];

export default function Extracurricular() {
  return (
    <section className="p-8 xl:mt-20">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold text-center mb-6"
      >
        Extracurricular Activities
      </motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {extracurricular.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative p-6 bg-white border border-gray-300 rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex flex-col sm:flex-row"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-full sm:w-1/4 h-40 sm:h-48 object-contain rounded-xl mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <h6 className="mb-1 text-lg font-semibold text-indigo-600 dark:text-lime-400">
                {item.designation}
              </h6>
              <p className="font-normal text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
