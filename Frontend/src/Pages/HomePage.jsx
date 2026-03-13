import React from 'react'
import LandingPage from '../SubPages/LandingPage'
import HeroPage from '../SubPages/HeroPage'
import Services from '../SubPages/Services'
import WhyUS from '../SubPages/WhyUS'
import Project from '../SubPages/Project'
import AllProjects from '../SubPages/AllProjects'
import Review from '../SubPages/Review'
import ContactNow from '../SubPages/ContactNow'
import Footer from '../Components/Footer'
import WhatsAppButton from '../Components/WhatsAppButton'

function HomePage() {
  return (
    <div className=" min-h-[200vh] w-screen overflow-x-hidden bg-black">
      <WhatsAppButton/>
      <LandingPage/>
      <HeroPage/>
      <Services/>
      <WhyUS/>
      <Project/>
     <AllProjects/>
     <Review/>
     <ContactNow/>
     <Footer/>
    </div>
  )
}

export default HomePage