import React from 'react'
import StarBackground from './Components/StarBackground'
import LandingPage from './Pages/LandingPage'
import HeroPage from './Pages/HeroPage'
import AboutPage from './Pages/AboutUs'
import Services from './Pages/Services'
import WhyUS from './Pages/WhyUS'
import Project from './Pages/Project'


function App() {
  return (
    <div className=" min-h-[200vh] w-screen overflow-x-hidden">
      <LandingPage/>
      <HeroPage/>
      <Services/>
      <WhyUS/>
      <Project/>
    </div>
  )
}

export default App