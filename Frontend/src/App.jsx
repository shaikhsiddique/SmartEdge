import React from 'react'
import StarBackground from './Components/StarBackground'
import LandingPage from './Pages/LandingPage'
import HeroPage from './Pages/HeroPage'


function App() {
  return (
    <div className=" min-h-[200vh] w-screen overflow-x-hidden">
      <LandingPage/>
      <HeroPage/>
    </div>
  )
}

export default App