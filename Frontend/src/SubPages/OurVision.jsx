import React, { useEffect, useRef } from "react";
import TalkButton from "../Components/TalkButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OurVision() {
  const containerRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(eyebrowRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(headlineRef.current.children, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.7,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-[90vh] w-full bg-black flex flex-col items-center justify-center px-4 sm:px-8">

      <p ref={eyebrowRef} className="tracking-widest uppercase text-white text-sm sm:text-base lg:text-lg my-12 sm:my-16 lg:my-20 font-light" style={{ letterSpacing: "0.22em" }}>
        Our Vision
      </p>

      <h1
        ref={headlineRef}
        className="text-center font-light text-white leading-tight uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.01em", maxWidth: "900px", fontWeight: 300 }}
      >
        <span className="inline">WE AIM TO MAKE </span>
        <span className="inline" style={{ color: "#1D79D3" }}>MODERN WEBSITES </span>
        <span className="inline">MORE </span>
        <span className="inline" style={{ color: "#1D79D3" }}>ACCESSIBLE </span>
        <span className="inline">FOR BUSINESSES THAT WANT TO GROW.</span>
      </h1>

      <div ref={ctaRef} className="mt-12 sm:mt-16 flex flex-col items-center gap-2">
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
          Have a project in mind?
        </p>
        <TalkButton />
      </div>

    </div>
  );
}

export default OurVision;