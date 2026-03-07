import React, { useEffect, useRef, useState } from 'react'
import AboutLandingPage from '../SubPages/AboutLandingPage'
import OurStory from '../SubPages/OurStory'
import TeamPage from '../SubPages/TeamPage'
import OurVision from '../SubPages/OurVision'
import AboutFooter from '../SubPages/AboutFooter'
import WorkingWithClients from '../SubPages/WorkingWithClients'

function About() {
  const [opacity, setOpacity] = useState(0)
  const teamRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!teamRef.current) return

      const teamRect = teamRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // TeamPage top position relative to viewport
      const teamTop = teamRect.top
      const teamHeight = teamRect.height

      // Phase 1: Fade IN — as TeamPage enters the viewport from bottom
      // Starts fading in when TeamPage top hits bottom of screen
      // Fully visible when TeamPage top reaches center of screen
      const fadeInStart = viewportHeight        // TeamPage just entering
      const fadeInEnd = viewportHeight * 1    // TeamPage top at 30% from top

      // Phase 2: Fade OUT — as TeamPage is half scrolled
      // Starts fading out when TeamPage is 50% scrolled past
      const fadeOutStart = -teamHeight * -0.5    // 20% of TeamPage scrolled past
      const fadeOutEnd = -teamHeight * 0.4      // 50% of TeamPage scrolled past

      let newOpacity = 0

      if (teamTop <= fadeInStart && teamTop >= fadeInEnd) {
        // Fading in
        newOpacity = 1 - (teamTop - fadeInEnd) / (fadeInStart - fadeInEnd)
      } else if (teamTop < fadeInEnd && teamTop >= fadeOutStart) {
        // Fully visible
        newOpacity = 1
      } else if (teamTop < fadeOutStart && teamTop >= fadeOutEnd) {
        // Fading out
        newOpacity = 1 - (fadeOutStart - teamTop) / (fadeOutStart - fadeOutEnd)
      } else {
        newOpacity = 0
      }

      setOpacity(Math.min(1, Math.max(0, newOpacity)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='min-h-screen w-screen bg-white overflow-y-auto overflow-x-hidden'>
      <AboutLandingPage />
      <OurStory />

      <h3
        style={{
          opacity,
          transition: 'opacity 0.15s ease-out',
        }}
        className='fixed top-[50%] invisible md:visible  right-[30%] md:right-[10%]   z-[99] text-white md:text-8xl text-4xl pointer-events-none'
      >
        Who We Are
      </h3>

      <div ref={teamRef}>
        <TeamPage />
      </div>
      <OurVision/>
      <WorkingWithClients/>
      <AboutFooter/>
      
    </div>
  )
}

export default About