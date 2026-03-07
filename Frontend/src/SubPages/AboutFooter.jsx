import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AboutFooter() {
  const containerRef = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(text1Ref.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'top 30%',
          scrub: 1,
        },
        x: '-100vw',
        opacity: 0,
        ease: 'power2.out',
      })

      gsap.from(text2Ref.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'top 30%',
          scrub: 1,
        },
        x: '100vw',
        opacity: 0,
        ease: 'power2.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className='relative w-screen overflow-hidden' style={{ height: 'clamp(300px, 60vw, 110vh)' }}>
      <img
        src="./images/about.png"
        className='absolute inset-0 w-full h-full object-cover object-bottom'
        alt=""
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex md:flex-row flex-col md:gap-12 items-center justify-center z-10 px-4">
        <h3
          ref={text1Ref}
          className='text-white font-bold leading-none tracking-tight'
          style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)' }}
        >
          We Build
        </h3>
        <div
          ref={text2Ref}
          className='text-white font-bold leading-none tracking-tight'
          style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)' }}
        >
          You Grow
        </div>
      </div>
    </div>
  )
}

export default AboutFooter