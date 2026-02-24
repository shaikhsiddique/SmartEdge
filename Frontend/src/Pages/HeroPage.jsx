import React from "react";
import TalkButton from "../Components/TalkButton";

function HeroPage() {
  return (
    <div className="h-screen w-full bg-[#0f0e0e] relative">
      <div
        className="
         absolute
        w-full h-full
        backdrop-blur-[6px]
        bg-[radial-gradient(rgba(255,255,255,0.18)_0.5px,transparent_0.5px)]
        bg-[size:5px_5px]
        "
      />
      <div className="containt flex flex-col items-center justify-center absolute w-full top-[35%]">
            <div className=" flex items-center justify-center  hero-text1 bg-black rounded-4xl pl-3 gap-2 ">
                <div className="circle h-4 w-4 rounded-full bg-green-400 flex items-center justify-center mb-1 ">
                    <div className="innercircle bg-green-900   h-2 w-2 rounded-full">

                    </div>
                </div>
                <div className="text  text-white text-lg pr-3 py-1 ">
                    <h3>Scalable web, app, and software development for businesses that are ready to grow.  🚀

</h3>
                </div>
                <div className="">

                </div>
            </div>

            <div className="content hero-text2 text-white text-7xl text-center w-[60vw] my-12">
           <span> We Create</span> <span className="text-[#1D79D3]">Websites</span><span> that Sell &</span> <span className="text-[#1D79D3]">Apps</span> <span>that Scale.</span>
            </div>
            <div className="content hero-text1">
                <h4 className=" text-white text-2xl opacity-55">Top-Tier Web Design & Digital Experiences for High-Impact Brands</h4>
            </div>
            <TalkButton/>
      </div>
    </div>
  );
}

export default HeroPage;