import React, { useEffect, useRef } from "react";
import TalkButton from "../Components/TalkButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroPage() {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const elements = [badgeRef.current, headingRef.current, subtextRef.current, buttonRef.current];

    gsap.fromTo(elements,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="h-screen w-full relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.18)_0.6px,transparent_0.6px)] bg-[size:10px_10px] md:mx-24" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="flex flex-col items-center justify-center absolute w-full md:top-[35%] top-[5%] px-4">

        <div ref={badgeRef} className="flex items-center justify-center bg-black/70 border border-white/10 rounded-4xl pl-3 gap-2 backdrop-blur-md">
          <div className="h-4 md:w-4 w-8 rounded-full bg-green-400 flex items-center justify-center mb-1">
            <div className="bg-green-900 h-2 w-2 rounded-full"></div>
          </div>
          <div className="text-white md:text-lg text-sm pr-3 py-1">
            <h3>Scalable web, app, and software development for businesses that are ready to grow. 🚀</h3>
          </div>
        </div>

        <div ref={headingRef} className="text-white md:text-7xl text-4xl text-center md:w-[60vw] w-screen my-12 leading-tight">
          <span>We Create </span>
          <span className="text-[#1D79D3]">Websites</span>
          <span> that Sell & </span>
          <span className="text-[#1D79D3]">Apps</span>
          <span> that Scale.</span>
        </div>

        <div ref={subtextRef}>
          <h4 className="text-white md:text-2xl tet-xl opacity-60 text-center">
            Top-Tier Web Design & Digital Experiences for High-Impact Brands
          </h4>
        </div>

        <div ref={buttonRef} className="mt-8">
          <TalkButton />
        </div>

      </div>
    </div>
  );
}

export default HeroPage;