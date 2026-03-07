import React from 'react'
import Navbar from '../Components/Navbar'

function AboutLandingPage() {
  return ( 
    <div className="landingPage relative h-[80vh] mb-12 md:mb-0 w-screen overflow-hidden z-[9999]">
      <Navbar/>
      <video 
        src="./video/v1.mp4" 
        autoPlay 
        muted 
        loop 
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover'
      />
      <h3 className='text-[25vw] sm:text-[15vw] text-[#1D79D3] absolute left-1/2 -translate-x-1/2 md:top-[20%] top-[50%] z-[99999] about-text1 whitespace-nowrap'>
        ABOUT
      </h3>
    </div>
  )
}

export default AboutLandingPage