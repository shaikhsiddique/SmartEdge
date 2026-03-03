import React from 'react';
import 'remixicon/fonts/remixicon.css';

const WhyUS = () => {
  const features = [
    {
      title: 'Client-Friendly Support',
      description:
        'We provide 24/7 friendly support and explain everything in a simple way so clients easily understand the project process.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-[#1D79D3]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.136-.845-2.098-1.976-2.192a48.572 48.572 0 00-8.047 0c-1.13.094-1.976 1.056-1.976 2.192v4.286m0 0c0 .837.46 1.58 1.155 1.951m0 0l-3 3v-3.091c-.34-.02-.68-.045-1.02-.072-1.132-.094-1.98-1.057-1.98-2.193v-4.284c0-.97.616-1.813 1.5-2.097"
          />
        </svg>
      ),
    },
    {
      title: 'Creative & Custom Design',
      description:
        'We build unique, modern, and fully customized designs with flexibility for changes based on your expectations.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-[#1D79D3]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a2.25 2.25 0 00-3.184-3.185L14.35 6.795a15.995 15.995 0 00-4.649 4.764m0 0l-5.514 5.514"
          />
        </svg>
      ),
    },
    {
      title: 'Affordable & Reliable Development',
      description:
        'Get high-quality development at affordable pricing with clear timelines and long-term support.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-[#1D79D3]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center relative bg-black text-white overflow-x-hidden">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 text-[#e0e7ef] bg-[#1D79D3] px-4 py-2 rounded-full shadow-lg shadow-[#1D79D3]/20">
        <i className="ri-lightbulb-ai-line"></i>
        <span className="text-sm font-medium">Why us</span>
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-6xl max-w-3xl text-center leading-tight tracking-wide my-6 px-4">
        Unlock the Benefits of Our Expertise
      </h2>
      <p className="text-xl text-gray-400 text-center max-w-2xl mb-12 px-4">
        That helps businesses grow and achieve powerful results.
      </p>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-[#1D79D3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#1D79D3]/10"
            >
              {/* Grid Background Overlay (visible) */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-10 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #1D79D3 1px, transparent 1px),
                      linear-gradient(to bottom, #1D79D3 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Gradient Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1D79D3]/0 via-[#1D79D3]/0 to-[#1D79D3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon with SVG and soft shadow */}
              <div className="relative mb-8 flex justify-center md:justify-start">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#1D79D3]/10 backdrop-blur-sm border border-gray-700 group-hover:border-[#1D79D3]/30 transition-all shadow-lg shadow-black/50">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-4 text-center md:text-left">
                {item.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed text-center md:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUS;