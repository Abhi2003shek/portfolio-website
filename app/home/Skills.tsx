import IconCloud from "@/components/ui/icon-cloud";
import Image from "next/image";
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center px-4 sm:px-8">
      <div className="flex items-center justify-center rounded-lg p-8 w-full">
        <IconCloud iconSlugs={slugs} />
      </div>

      <div className="flex flex-col rounded-lg p-8 w-full items-center">
        <h1 className="mb-8 text-xl sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-center p-5">
          Technical Skills & Tools
        </h1>

        <div
          role="tablist"
          className="tabs tabs-lifted w-full max-w-4xl table-fixed"
          style={{ minHeight: "500px" }}
        >
  
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab h-20"
            aria-label="Language"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">

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
            </div>
          </div>


          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab h-20"
            aria-label="Front-End"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
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
                <p className="text-center mt-2">JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={TypeScript} alt="TypeScript" width={48} height={48} />
                <p className="text-center mt-3">TypeScript</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={ReactJS} alt="React" width={48} height={48} />
                <p className="text-center mt-2">React.js</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={NextJS} alt="Next.js" width={48} height={48} />
                <p className="text-center mt-3">Next.js</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={Tailwind} alt="Tailwind CSS" width={48} height={48} />
                <p className="text-center mt-2">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={Bootstrap} alt="Bootstrap" width={50} height={50} />
                <p className="text-center mt-2">Bootstrap</p>
              </div>
            </div>
          </div>


          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab h-20"
            aria-label="Back-End & Database"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
              <div className="flex flex-col items-center">
                <Image src={Node} alt="Node.js" width={55} height={55} />
                <p className="text-center mt-2">Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={mongoDB} alt="MongoDB" width={24} height={24} />
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
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab h-20"
            aria-label="UI/UX Design"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
              <div className="flex flex-col items-center">
                <Image src={Figma} alt="Figma" width={36} height={36} />
                <p className="text-center mt-1">Figma</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={AdobeXD} alt="Adobe XD" width={48} height={48} />
                <p className="text-center mt-3">Adobe XD</p>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab h-20"
            aria-label="Tools"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
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
                <Image src={GitHub} alt="GitHub" width={100} height={100} />
                <p className="text-center mt-5">GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}