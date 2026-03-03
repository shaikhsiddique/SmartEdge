import React from "react";
import TalkButton from "../Components/TalkButton";

function HeroPage() {
  return (
    <div className="h-screen w-full relative bg-black overflow-hidden">
      
      {/* Small Dot Grid */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(rgba(255,255,255,0.18)_0.6px,transparent_0.6px)]
        bg-[size:10px_10px]
        mx-24
        "
      />

      {/* Very Light Top Gradient */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]
        "
      />

      {/* Subtle Blue Glow */}
     

      {/* Content */}
      <div className="flex flex-col items-center justify-center absolute w-full top-[35%] px-4">
        
        {/* Badge */}
        <div className="flex items-center justify-center bg-black/70 border border-white/10 rounded-4xl pl-3 gap-2 backdrop-blur-md">
          <div className="h-4 w-4 rounded-full bg-green-400 flex items-center justify-center mb-1">
            <div className="bg-green-900 h-2 w-2 rounded-full"></div>
          </div>

          <div className="text-white text-lg pr-3 py-1">
            <h3>
              Scalable web, app, and software development for businesses that
              are ready to grow. 🚀
            </h3>
          </div>
        </div>

        {/* Heading */}
        <div className="text-white text-7xl text-center w-[60vw] my-12 leading-tight">
          <span>We Create </span>
          <span className="text-[#1D79D3]">Websites</span>
          <span> that Sell & </span>
          <span className="text-[#1D79D3]">Apps</span>
          <span> that Scale.</span>
        </div>

        {/* Subtext */}
        <div>
          <h4 className="text-white text-2xl opacity-60 text-center">
            Top-Tier Web Design & Digital Experiences for High-Impact Brands
          </h4>
        </div>

        {/* Button */}
        <div className="mt-8">
          <TalkButton />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;