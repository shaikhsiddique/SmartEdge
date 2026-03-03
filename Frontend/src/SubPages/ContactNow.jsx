import React from "react";

function ContactNow() {
  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center px-10">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 text-[#e0e7ef] bg-[#1D79D3] px-4 py-2 rounded-full shadow-lg shadow-[#1D79D3]/20 mb-6">
            <i className="ri-send-plane-line"></i>
            <span className="text-sm font-medium">Contact Now</span>
          </div>

          <h2 className="text-white text-5xl font-semibold leading-tight mb-6">
            Let’s Build <br /> Something Great Together
          </h2>

          <p className="text-gray-400 max-w-xl">
            Have a project in mind or need help with development?
            Send a message and I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full lg:w-[700px] bg-neutral-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-white text-xl font-semibold mb-6">
            Send a Message
          </h3>

          <form className="flex flex-col gap-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#1D79D3] transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#1D79D3] transition"
            />

            {/* Contact Number */}
            <input
              type="tel"
              placeholder="Contact Number"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#1D79D3] transition"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#1D79D3] transition resize-none"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 bg-[#1D79D3] hover:bg-[#1763ad] transition rounded-lg py-3 text-sm font-medium text-white shadow-lg shadow-[#1D79D3]/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactNow;