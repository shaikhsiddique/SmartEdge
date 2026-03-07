import React, { useEffect, useRef } from 'react'
import Navbar from '../Components/Navbar'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      })

      gsap.from(rightRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className='min-h-screen w-screen bg-black'>
      <Navbar />

      <div className="w-full max-w-7xl mx-auto mt-[10vh] md:mt-[20vh] flex flex-col lg:flex-row gap-10 lg:gap-16 px-4 sm:px-8 lg:px-10 pt-24 sm:pt-28 pb-16">

        {/* LEFT SIDE */}
        <div ref={leftRef} className="flex-1 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-[#e0e7ef] bg-[#1D79D3] px-4 py-2 rounded-full shadow-lg shadow-[#1D79D3]/20 mb-6 w-fit">
            <i className="ri-send-plane-line"></i>
            <span className="text-sm font-medium">Contact Now</span>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Let's Build <br /> Something Great Together
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Have a project in mind or need help with development?
            Send a message and I'll get back to you as soon as possible.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <div className="h-9 w-9 rounded-full bg-[#1D79D3]/10 border border-[#1D79D3]/20 flex items-center justify-center">
                <i className="ri-mail-line text-[#1D79D3]"></i>
              </div>
              <span>smartedge@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <div className="h-9 w-9 rounded-full bg-[#1D79D3]/10 border border-[#1D79D3]/20 flex items-center justify-center">
                <i className="ri-phone-line text-[#1D79D3]"></i>
              </div>
              <span>+91 00000 00000</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <div className="h-9 w-9 rounded-full bg-[#1D79D3]/10 border border-[#1D79D3]/20 flex items-center justify-center">
                <i className="ri-map-pin-line text-[#1D79D3]"></i>
              </div>
              <span>India</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div ref={rightRef} className="w-full lg:w-[580px] bg-neutral-900/40 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-6">
            Send a Message
          </h3>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#1D79D3] transition w-full"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#1D79D3] transition w-full"
            />

            <input
              type="tel"
              placeholder="Contact Number"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#1D79D3] transition w-full"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#1D79D3] transition resize-none w-full"
            ></textarea>

            <button
              type="button"
              className="mt-2 bg-[#1D79D3] hover:bg-[#1763ad] transition rounded-lg py-3 text-sm font-medium text-white shadow-lg shadow-[#1D79D3]/30 w-full"
            >
              Send Message
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact