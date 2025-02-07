"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Project1 from "../components/project/Project-1.png";
import Project2 from "../components/project/Project-2.png";
import Project3 from "../components/project/Project-3.png";
import Project4 from "../components/project/Project-4.png";
import Project5 from "../components/project/Project-5.jpg";
import Project6 from "../components/project/Project-6.png";

const projects = [
  { title: "Portfolio Website", img: Project1, desc: "A dynamic portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, and experiences.", link: "https://github.com/Abhi2003shek/portfolio-website" },
  { title: "Terrain Recognition Using ML", img: Project2, desc: "Built a terrain recognition system with a CNN in Python (96% accuracy) and a ReactJS web app with Flask backend for image classification.", link: "https://github.com/Abhi2003shek/Terrain-Recognition-using-ML-CNN"},
  { title: "Finance Management Web Application", img: Project3, desc: "Built a finance app with React.js and Firebase, offering user authentication and real-time CRUD operations.", link: "https://github.com/Abhi2003shek/finance-mangement" },
  { title: "Real-Time Group Chat Application", img: Project4, desc: "Built a cross-platform mobile app with React Native and Firebase, featuring login, signup, and real-time chat.", link: "https://github.com/Abhi2003shek/Chat-App-ReactNative" },
  { title: "QR Code Generator", img: Project5, desc: "QR code generator built with React.js.", link: "https://github.com/Abhi2003shek/QR-CodeGenerator" },
  { title: "ChatBot", img: Project6, desc: "Basic chatbot developed using C language for interactive text-based communication.", link: "https://github.com/Abhi2003shek/Chat-bot" }
];

export default function Content() {
  return (
    <div className="pb-10 flex flex-col items-center w-full font-caveat">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center"
      >
        <h2 className="mb-8 text-3xl xl:text-4xl font-extrabold text-center p-5">
          Projects
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="card bg-base-100 shadow-xl dark:bg-gray-800 dark:border-gray-700 w-80 mx-auto"
          >
            <figure className="relative w-full h-48">
              <Image src={project.img} alt={project.title} layout="fill" objectFit="cover" />
            </figure>
            <div className="card-body text-wrap">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p>{project.desc}</p>
              <div className="card-actions justify-end">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary flex items-center gap-1">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
