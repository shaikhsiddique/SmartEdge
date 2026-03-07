import React from "react";

function TeamPage() {
  return (
    <div className="h-screen w-screen bg-[#060606] relative text-white">

      {/* Founder Image */}
      <div className="absolute left-4 md:left-[15%] top-[10%] md:top-[20%] flex flex-col items-center z-[999999]">
      <h4
        
        className='top-[50%]    right-[30%] md:right-[10%] visible md:hidden mb-4   z-[99] text-white md:text-8xl text-4xl pointer-events-none'
      >
        Who We Are
      </h4>
        <div className="h-[300px] w-[300px] rounded-full bg-pink-100 overflow-hidden">
          <img
            src="https://res.cloudinary.com/daai6xwtd/image/upload/v1772889071/siddique_hwpcgo.jpg"
            className="object-cover h-full w-full object-center"
            alt="Siddique Shaikh"
          />
        </div>

        {/* Name */}
        <h2 className="mt-6 text-2xl font-semibold">
          Siddique Shaikh
        </h2>

        {/* Role */}
        <p className="text-gray-400 text-sm mt-1">
          Founder & Lead Developer
        </p>

        {/* Description */}
        <p className="text-gray-500 text-sm text-center mt-3 max-w-[260px]">
I design and develop creative, affordable, and easy-to-use websites that help businesses build a strong and modern online presence.
</p>

      </div>

    </div>
  );
}

export default TeamPage;