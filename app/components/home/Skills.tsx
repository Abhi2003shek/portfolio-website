import IconCloud from "@/components/ui/icon-cloud";
import Image from "next/image";
import C from "../assets/skillLogo/c.png";
import Java from "../assets/skillLogo/java.png";
import Python from "../assets/skillLogo/python.png";
import HTML from "../assets/skillLogo/html.png";
import CSS from "../assets/skillLogo/css.png";
import JavaScript from "../assets/skillLogo/javascript.png";
import ReactJS from "../assets/skillLogo/React.png";
import Tailwind from "../assets/skillLogo/tailwindcss.png";
import NextJS from "../assets/skillLogo/next.png";
import mongoDB from "../assets/skillLogo/mongodb.png";
import Firebase from "../assets/skillLogo/firebase.png";
import Linux from "../assets/skillLogo/linux.png";
import Spyder from "../assets/skillLogo/spyder.png";
import VScode from "../assets/skillLogo/vscode.png";
import GitHub from "../assets/skillLogo/GitHub.png";
import Eclipse from "../assets/skillLogo/eclipse.png";
import TypeScript from "../assets/skillLogo/Typescript.png";
import Figma from "../assets/skillLogo/figma.png";
import MySQL from "../assets/skillLogo/mysql.png";
import Bootstrap from "../assets/skillLogo/bootstrap.png";
import Node from "../assets/skillLogo/Node.png";
import AdobeXD from "../assets/skillLogo/adobexd.png";



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
  return (<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center px-4 sm:px-8">
    <div className="flex items-center justify-center rounded-lg p-8 w-full">
      <IconCloud iconSlugs={slugs} />
    </div>
  
    <div className="flex flex-col rounded-lg p-8 w-full items-center">
      <h1 className="mb-8 text-xl sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-center p-5">
        Technical Skills & Tools
      </h1>
  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full">
        <div className="flex flex-col items-center">
          <Image src={C} alt="C" width={48} height={48} />
          <p className="text-center mt-2">C</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Python} alt="Python" width={48} height={48} />
          <p className="text-center mt-2">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Java} alt="Java" width={40} height={40} />
          <p className="text-center mt-1">Java</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={HTML} alt="HTML" width={48} height={48} />
          <p className="text-center mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={CSS} alt="CSS" width={48} height={48} />
          <p className="text-center mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={JavaScript} alt="JavaScript" width={48} height={48} />
          <p className="text-center mt-2 pt-3">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={TypeScript} alt="TypeScript" width={48} height={48} />
          <p className="text-center mt-3">TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={ReactJS} alt="React" width={48} height={48} />
          <p className="text-center mt-2 pt-2">React.js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={NextJS} alt="Next.js" width={48} height={48} />
          <p className="text-center mt-3">Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Tailwind} alt="Tailwind CSS" width={48} height={48} />
          <p className="text-center mt-2 pt-2">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Bootstrap} alt="Tailwind CSS" width={50} height={50} />
          <p className="text-center mt-2 pt-3">BootStrap</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Node} alt="Tailwind CSS" width={55} height={55} />
          <p className="text-center mt-2 pt-4">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={mongoDB} alt="MongoDB" width={24} height={24} /> {/* Reduced size */}
          <p className="text-center mt-2">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={MySQL} alt="MySQL" width={48} height={48} />
          <p className="text-center mt-2">MySQL</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Firebase} alt="Firebase" width={48} height={48} />
          <p className="text-center mt-2">Firebase</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Figma} alt="Figma" width={36} height={36} />
          <p className="text-center mt-1">Figma</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={AdobeXD} alt="VScode" width={48} height={48} />
          <p className="text-center mt-3">AdobeXD</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={VScode} alt="VScode" width={48} height={48} />
          <p className="text-center mt-2">VScode</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Eclipse} alt="Eclipse" width={48} height={48} />
          <p className="text-center mt-3">Eclipse</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Spyder} alt="Spyder" width={48} height={48} />
          <p className="text-center mt-2">Spyder</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Linux} alt="Linux" width={48} height={48} />
          <p className="text-center mt-1">Linux</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={GitHub} alt="GitHub" width={100} height={100} /> {/* Increased size */}
          <p className="text-center mt-5">GitHub</p>
        </div>
      </div>
    </div>
  </div>
  
  );
}
