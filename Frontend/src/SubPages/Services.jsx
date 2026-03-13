import React from "react";
import TalkButton from "../Components/TalkButton";

const services = [
  {
    title: "Website Development & Management",
    desc: "We design and develop highly attractive, modern, and conversion-focused websites. We also provide ongoing website management, updates, performance optimization, and maintenance.",
    icon: "🌐",
  },
  {
    title: "App Development & Management",
    desc: "We build scalable and high-performance mobile and web applications. Our team also handles app updates, improvements, monitoring, and long-term support.",
    icon: "📱",
  },
  {
    title: "Software Development & Maintenance",
    desc: "Custom software solutions for businesses, startups, and organizations. We ensure stability, scalability, updates, and long-term maintenance.",
    icon: "💻",
  },
  {
    title: "Business Digital Solutions",
    desc: "We help businesses grow with powerful digital systems, automation, dashboards, and scalable platforms built for real-world use.",
    icon: "🚀",
  },
  {
    title: "Final Year & Academic Projects",
    desc: "From concept to deployment — we build impressive, modern projects that stand out in academic submissions, competitions, and final year presentations.",
    icon: "🎓",
  },
  {
    title: "UI / UX & Conversion Design",
    desc: "We create visually attractive, responsive, and user-focused designs that improve engagement and increase conversions.",
    icon: "🎨",
  },
];

function Services() {
  return (
    <div className="min-h-[100vh] w-full bg-black text-white relative overflow-hidden px-6 py-38">

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#1D79D3]/10 to-transparent blur-[120px] rounded-full" />

      <div className="relative max-w-[1200px] mx-auto">

        {/* Heading */}
        <h2 className="text-5xl text-center font-semibold mb-16">
          Our <span className="text-[#1D79D3]">Services</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-7 hover:border-[#1D79D3] hover:shadow-[0_0_25px_rgba(29,121,211,0.3)] transition-all duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#1D79D3] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

     
      </div>

      {/* CTA Button */}
      <div className="w-full flex flex-col items-center justify-center gap-4">
  <TalkButton />
  <p className="text-white/70 text-sm text-center -mt-12">
    Every project is unique — reach out and we'll send you a custom quote within 24 hours.
  </p>
</div>

    </div>
  );
}

export default Services;