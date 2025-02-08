import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Content from './Content'
import Link from 'next/link'

export default function page() {
  return (
    <>
      <main className='flex min-h-screen flex-col '>
        <Navbar/>
        <Content />
        <div className='overflow-hidden'>
        <Link href="/" className=" flex justify-center font-caveat text-sm pt-5 pb-5 transform hover:scale-105 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 1-.5-.5H4.707l3.146-3.146a.5.5 0 1 1-.708-.708l-4 4a.5.5 0 0 1 0 .708l4 4a.5.5 0 1 1 .708-.708L4.707 8.5h6.293a.5.5 0 0 1 .5-.5z"/>
        </svg>
          Back to About Me
      </Link>
      </div>
      </main>
    <Footer/>
    </> 
  )
}
