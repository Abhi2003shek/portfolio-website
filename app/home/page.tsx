import React from 'react'
import HeroSection from './HeroSection'
import DataCount from './DataCount'
import {Skills} from './Skills'

export default function index() {
  return (
    <div className="container  mx-auto px-10">
    <HeroSection />
    <DataCount />
    <Skills />
   </div>
  )
}
