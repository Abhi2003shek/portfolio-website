import React from 'react';
import { FaLinkedin, FaGithub, FaHackerrank, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content p-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          
          <a
            href="https://www.linkedin.com/in/abhishek2003sharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transform hover:scale-110 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          
          <a
            href="mailto:abhisheksharma080103@gmail.com"
            className="hover:text-primary transform hover:scale-110 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          
          <a
            href="https://github.com/Abhi2003shek"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transform hover:scale-110 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          
          <a
            href="https://www.hackerrank.com/profile/azrack11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transform hover:scale-110 transition duration-300"
            aria-label="HackerRank"
          >
            <FaHackerrank size={24} />
          </a>
        </div>

        <p className="text-sm text-center">
          Made by 😊 Abhishek Sharma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
