import IconCloud from "@/components/ui/icon-cloud";
import Image from "next/image";
import C from "../assets/skillLogo/c.png";
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
      <div className="flex items-center justify-center rounded-lg p-8 h-full w-full">
        <IconCloud iconSlugs={slugs} />
      </div>
      
      {/* Carousel Box */}
      <div className="flex flex-col rounded-lg p-8 h-full w-full items-center">
        <h1 className="mb-6 text-xl sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-center">
          Techinical Skills
        </h1>
        <div className="carousel rounded-box w-70 h-100 max-w-xs max-h-xs mx-auto">
          <div className="carousel-item w-full h-full p-2 flex justify-center">
            
        <div className="grid grid-rows-3 gap-4">
            <div className="flex items-center"><h1 className="mb-6 text-lg sm:text-sm lg:text-sm xl:text-xl font-extrabold text-center">Language</h1></div>
            <div className="flex justify-center">
                <Image
            src={C}
            alt="C image"
            className=""
            width={48}
            height={48}
          /> 
            </div>
                <div></div>
            </div>
          </div>
          <div className="carousel-item w-full h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="w-full h-full rounded-lg object-cover"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="w-full h-full rounded-lg object-cover"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="w-full h-full rounded-lg object-cover"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              className="w-full h-full rounded-lg object-cover"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="w-full h-full rounded-lg object-cover"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              className="w-full h-full rounded-lg object-cover"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
