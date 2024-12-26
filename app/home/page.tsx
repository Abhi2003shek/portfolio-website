import React from 'react'
import HeroSection from './HeroSection'
import DataCount from './DataCount'
import {Skills} from './Skills'
import Education from './Education'
import Projects from './Projects'

export default function index() {
  return (
    <div className="container  mx-auto px-10">
    <HeroSection />
    <DataCount />
    <Education />
    <Skills />
    <Projects />
   </div>
  )
}
