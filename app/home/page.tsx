'use client';
import React from 'react';
import HeroSection from './HeroSection';
import DataCount from './DataCount';
import { Skills } from './Skills';
import Education from './Education';
import LastDiv from './LastDiv';
import Link from 'next/link';

export default function Index() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container mx-auto px-10 font-caveat">
      <HeroSection />
      <DataCount />
      <Education />
      <Skills />
      <LastDiv />
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setTimeout(scrollToTop, 300);  // Delay for smooth scroll effect
        }}
        className="font-caveat flex items-center justify-center text-sm pt-5 pb-5 transform hover:scale-105 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left rotate-90"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.5 8a.5.5 0 0 1-.5-.5H4.707l3.146-3.146a.5.5 0 1 1-.708-.708l-4 4a.5.5 0 0 1 0 .708l4 4a.5.5 0 1 1 .708-.708L4.707 8.5h6.293a.5.5 0 0 1 .5-.5z"
          />
        </svg>
         Scroll To Top
      </Link>
    </div>
  );
}
