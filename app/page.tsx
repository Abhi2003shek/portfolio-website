"use client"
import Navbar from "./components/Navbar";
import HeroSection from "./components/home/HeroSection";
import DataCount from "./components/home/DataCount";
import { Skills } from "./components/home/Skills";


export default function Home() {
  return (
    <>
    
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container  mx-auto px-10">
       <HeroSection />
       <DataCount />
       <Skills />
      </div>
    </main>
    </>
  );
}
