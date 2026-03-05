import React from "react";

function Navbar() {
  return (
    <div className="w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] h-14 md:h-16 bg-black flex items-center justify-between px-4 sm:px-6 md:px-10 absolute top-5 left-1/2 -translate-x-1/2 rounded-full shadow-[#1D79D3] shadow-sm z-[999999]">
      
      {/* Logo */}
      <div className="logo flex-shrink-0">
        <img src="./images/logo3.png" className="h-8 sm:h-10 md:h-12" alt="" />
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 sm:gap-5 md:gap-6 text-white text-xs sm:text-sm md:text-lg">
        <h3 className="text-[#1D79D3] cursor-pointer">Home</h3>
        <h3 className="cursor-pointer">About</h3>
        <h3 className="cursor-pointer">Work</h3>
        <h3 className="cursor-pointer">Contact</h3>
      </div>

      {/* Button */}
      <div className="flex-shrink-0">
        <button className="text-white border border-[#1D79D3] px-2 sm:px-3 md:px-4 py-1 rounded-full text-xs sm:text-sm md:text-base hover:bg-[#1D79D3] transition">
          Lets Connect
        </button>
      </div>

    </div>
  );
}

export default Navbar;