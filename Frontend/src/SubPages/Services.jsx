import React from "react";
import TalkButton from "../Components/TalkButton";

function Services() {
  return (
    <div className="min-h-[100vh] w-full bg-black text-white relative overflow-hidden px-6 py-38">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#1D79D3]/10 to-transparent blur-[120px] rounded-full" />

      <div className="relative max-w-[1200px] mx-auto">
        <h2 className="text-5xl text-center font-semibold mb-16">
          Our <span className="text-[#1D79D3]">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Website */}
          <div className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-7 hover:border-[#1D79D3] hover:shadow-[0_0_25px_rgba(29,121,211,0.3)] transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-3">
              Website Development & Management
            </h3>
            <p className="text-white/60">
              We design and develop highly attractive, modern, and
              conversion-focused websites. We also provide ongoing website
              management, updates, performance optimization, and maintenance.
            </p>
          </div>

          {/* App */}
          <div className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-7 hover:border-[#1D79D3] hover:shadow-[0_0_25px_rgba(29,121,211,0.3)] transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-3">
              App Development & Management
            </h3>
            <p className="text-white/60">
              We build scalable and high-performance mobile and web
              applications. Our team also handles app updates, improvements,
              monitoring, and long-term support.
            </p>
          </div>

          {/* Software */}
          <div className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-7 hover:border-[#1D79D3] hover:shadow-[0_0_25px_rgba(29,121,211,0.3)] transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-3">
              Software Development & Maintenance
            </h3>
            <p className="text-white/60">
              Custom software solutions for businesses, startups, and
              organizations. We ensure stability, scalability, updates, and
              long-term maintenance.
            </p>
          </div>

          {/* Business */}
          <div className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-7 hover:border-[#1D79D3] hover:shadow-[0_0_25px_rgba(29,121,211,0.3)] transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-3">
              Business Digital Solutions
            </h3>
            <p className="text-white/60">
              We help businesses grow with powerful digital systems, automation,
              dashboards, and scalable platforms built for real-world use.
            </p>
          </div>

          {/* College */}
          <div className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-7 hover:border-[#1D79D3] hover:shadow-[0_0_25px_rgba(29,121,211,0.3)] transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-3">
              College Project Development
            </h3>
            <p className="text-white/60">
              We assist students in building real-world level college projects
              including websites, apps, and software systems with modern
              technologies.
            </p>
          </div>

          {/* UI UX */}
          <div className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-7 hover:border-[#1D79D3] hover:shadow-[0_0_25px_rgba(29,121,211,0.3)] transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-3">
              UI / UX & Conversion Design
            </h3>
            <p className="text-white/60">
              We create visually attractive, responsive, and user-focused
              designs that improve engagement and increase conversions.
            </p>
          </div>

        </div>
      </div>
      <div className="full flex items-center justify-center ">
      <TalkButton/>
      </div>
    </div>
  );
}

export default Services;