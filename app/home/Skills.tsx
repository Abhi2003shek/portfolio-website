"use client"
import React from "react";
import Image from "next/image";
import { IconCloud } from "@/components/ui/icon-cloud";
import C from "../components/assets/skillLogo/c.png";
import Java from "../components/assets/skillLogo/java.png";
import Python from "../components/assets/skillLogo/python.png";
import HTML from "../components/assets/skillLogo/html.png";
import CSS from "../components/assets/skillLogo/css.png";
import JavaScript from "../components/assets/skillLogo/javascript.png";
import ReactJS from "../components/assets/skillLogo/React.png";
import Tailwind from "../components/assets/skillLogo/tailwindcss.png";
import NextJS from "../components/assets/skillLogo/next.png";
import mongoDB from "../components/assets/skillLogo/mongodb.png";
import Firebase from "../components/assets/skillLogo/firebase.png";
import Linux from "../components/assets/skillLogo/linux.png";
import Spyder from "../components/assets/skillLogo/spyder.png";
import VScode from "../components/assets/skillLogo/vscode.png";
import GitHub from "../components/assets/skillLogo/GitHub.png";
import Eclipse from "../components/assets/skillLogo/eclipse.png";
import TypeScript from "../components/assets/skillLogo/Typescript.png";
import Figma from "../components/assets/skillLogo/figma.png";
import MySQL from "../components/assets/skillLogo/mysql.png";
import Bootstrap from "../components/assets/skillLogo/bootstrap.png";
import Node from "../components/assets/skillLogo/Node.png";
import AdobeXD from "../components/assets/skillLogo/adobexd.png";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "python",
  "c",
  "tensorflow",
  "mongodb",
];

export function Skills() {
  const [activeTab, setActiveTab] = React.useState("language");

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  return (
<>
  <h1 className="flex justify-center mt-5 text-2xl sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-center lg:text-left lg:mb-20">
    Technical Skills & Tools
  </h1>
  <div className="flex flex-col lg:flex-row px-4 sm:px-4">
    {/* Icon Cloud Section */}
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg ">
      <IconCloud images={images}/>
    </div>

    {/* Skills Tabs Section */}
    <div className="lg:w-1/2">

      <div className="lg:hidden mb-6 ">
        <select 
          className="select rounded-lg shadow dark:border-white flex justify-start min-w-full mb-10 mt-5" 
          value={activeTab} 
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option value="language">Languages</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="uiux">UI/UX</option>
          <option value="tools">Tools</option>
        </select>
      </div>

      {/* Tab buttons for larger screens */}
      <div className="tabs tabs-bordered lg:justify-between justify-around items-center px-4 mb-6 hidden lg:flex">
        <button 
          className={`tab tab-lg tab-lifted text-lg ${activeTab === "language" ? "tab-active" : ""}`} 
          onClick={() => setActiveTab("language")}
        >
          Languages
        </button>
        <button 
          className={`tab tab-lg tab-lifted text-lg ${activeTab === "frontend" ? "tab-active" : ""}`} 
          onClick={() => setActiveTab("frontend")}
        >
          Frontend
        </button>
        <button 
          className={`tab tab-lg tab-lifted text-lg ${activeTab === "backend" ? "tab-active" : ""}`} 
          onClick={() => setActiveTab("backend")}
        >
          Backend
        </button>
        <button 
          className={`tab tab-lg tab-lifted text-lg ${activeTab === "uiux" ? "tab-active" : ""}`} 
          onClick={() => setActiveTab("uiux")}
        >
          UI/UX
        </button>
        <button 
          className={`tab tab-lg tab-lifted text-lg ${activeTab === "tools" ? "tab-active" : ""}`} 
          onClick={() => setActiveTab("tools")}
        >
          Tools
        </button>
      </div>

      <div className="grid gap-6 w-full transition-all duration-300" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gridAutoRows: "140px", height: "auto" }}>
        {activeTab === "language" && (
          <>
            <div className="flex flex-col items-center">
              <Image src={C} alt="C" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">C</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Python} alt="Python" width={57} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Python</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Java} alt="Java" width={47} height={40} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Java</p>
            </div>
          </>
        )}

        {activeTab === "frontend" && (
          <>
            <div className="flex flex-col items-center">
              <Image src={HTML} alt="HTML" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={CSS} alt="CSS" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={JavaScript} alt="JavaScript" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={TypeScript} alt="TypeScript" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">TypeScript</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={ReactJS} alt="React.js" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">React.js</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={NextJS} alt="Next.js" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Next.js</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Tailwind} alt="Tailwind CSS" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Bootstrap} alt="Bootstrap" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Bootstrap</p>
            </div>
          </>
        )}

        {activeTab === "backend" && (
          <>
            <div className="flex flex-col items-center">
              <Image src={Node} alt="Node.js" width={85} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={mongoDB} alt="MongoDB" width={30} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={MySQL} alt="MySQL" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">MySQL</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Firebase} alt="Firebase" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Firebase</p>
            </div>
          </>
        )}

        {activeTab === "uiux" && (
          <>
            <div className="flex flex-col items-center">
              <Image src={Figma} alt="Figma" width={45} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Figma</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={AdobeXD} alt="Adobe XD" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Adobe XD</p>
            </div>
          </>
        )}

        {activeTab === "tools" && (
          <>
            <div className="flex flex-col items-center">
              <Image src={VScode} alt="VS Code" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">VS Code</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={GitHub} alt="GitHub" width={100} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">GitHub</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Linux} alt="Linux" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Linux</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Eclipse} alt="Eclipse" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Eclipse</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Spyder} alt="Spyder" width={60} height={60} className="custom-skill-image" />
              <p className="text-center mt-2 text-sm custom-skill-text">Spyder</p>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
</>

  );
}
