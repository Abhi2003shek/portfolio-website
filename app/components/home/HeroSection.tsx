"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import profile from '../assets/profile.png';


const HeroSection = () => {
  return (
    <section className="lg:py-8">

      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start space-y-6 px-py-pd-8"
        >
        <h1 className="mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl lg:leading-normal font-extrabold pb-5 leading-relaxed">
  <span>
    Hello, I&apos;m 
  </span><br/>
  <span> 
    Abhishek Sharma{" "}<br/>
  </span>
  <TypeAnimation
    sequence={[
      "Software Engineer",
      500,
      "Web Developer",
      500,
      "UI/UX Designer",
      500,
      "Application Developer",
      500,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h1>

          <p className="text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div className="space-x-4">
            <Link href="/#contact">
              <button className="btn btn-ghost">Hire Me</button>
            </Link>
            <Link href="/">
              <button className="btn btn-outline btn-primary">Download CV</button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 p-10"
        >
        <div className="rounded-full bg-amber-400 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src={profile}
            alt="hero image"
            className="rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto h-auto"
            width={300}
            height={300}
            layout="intrinsic"
          />
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
