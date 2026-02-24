import React from "react";

function TalkButton() {
  return (
    <a
      href="/contact-us"
      className="relative inline-flex items-center px-6 py-3 rounded-lg  group overflow-hidden my-12"
    >
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-lg  opacity-30 blur-xl transition-opacity duration-300 group-hover:opacity-60"></span>

      {/* Stroke / border effect */}
      <span className="absolute inset-0 rounded-lg border border-[#1D79D3]  shadow "></span>

      {/* Button background */}
      <span className="relative text-white font-semibold z-10 flex items-center space-x-2">
        <span>Let's Talk</span>
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </span>
    </a>
  );
}

export default TalkButton;