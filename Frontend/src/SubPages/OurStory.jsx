import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function OurStory() {
  const containerRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headlineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(eyebrowRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from(headlineRef.current.children, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="md:min-h-[80vh] min-h-[60vh] w-full bg-white flex flex-col items-center justify-center px-4 sm:px-8 z-[9999]">

      <p ref={eyebrowRef} className="tracking-widest uppercase text-black text-sm sm:text-base lg:text-lg mb-12 sm:mb-20 lg:mb-28 font-light ourStory-text1 z-[9999]" style={{ letterSpacing: '0.22em' }}>
        Our Story
      </p>

      <h1
        ref={headlineRef}
        className="text-center font-light text-gray-900 leading-tight uppercase text-4xl sm:text-4xl md:text-5xl lg:text-6xl z-[9999]"
        style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.01em', maxWidth: '900px', fontWeight: 300 }}
      >
        <span className="inline">AT </span>
        <span className="inline" style={{ color: '#1D79D3' }}>SMARTEDGE, </span>
        <span className="inline">WE BUILD WEBSITES THAT </span>
        <span className="inline" style={{ color: '#1D79D3' }}>BRING BRANDS TO LIFE.</span>
      </h1>

    </div>
  )
}