import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-screen bg-black border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-10 py-14">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Logo + Message */}
          <div className="max-w-md">
            <img src="https://res.cloudinary.com/daai6xwtd/image/upload/v1772889109/logo3_wicn7r.png" className="h-14 mb-4" alt="logo" />

            <p className="text-gray-400 leading-relaxed mb-6">
              Building modern, high-performance websites and digital
              experiences. If you have a project idea or want to work
              together, feel free to reach out.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-gray-300">
              <p className="flex items-center gap-2">
                <i className="ri-phone-line text-[#1D79D3]"></i>
                +91 7498811073
              </p>

              <p className="flex items-center gap-2">
                <i className="ri-mail-line text-[#1D79D3]"></i>
                contact@smartedge.solutions
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-gray-400">
              <Link to='/' className="hover:text-[#1D79D3] transition">Home</Link>
              <Link to = "/about" className="hover:text-[#1D79D3] transition">About</Link>
              <Link to="/work" className="hover:text-[#1D79D3] transition">Work</Link>
              <Link to='/contact' className="hover:text-[#1D79D3] transition">Contact</Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>

            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/smartedge__/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white gap-2 bg-neutral-900 border border-white/10 px-4 py-2 rounded-lg hover:border-[#1D79D3] hover:text-[#1D79D3] transition"
              >
                <i className="ri-instagram-line"></i>
                Instagram
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917498811073?text=Hello%2C%20I%27d%20like%20to%20get%20in%20touch!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center gap-2 bg-neutral-900 border border-white/10 px-4 py-2 rounded-lg hover:border-[#1D79D3] hover:text-[#1D79D3] transition"
              >
                <i className="ri-whatsapp-line"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Siddique Shaikh. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed by <span className="text-[#1D79D3]">Siddique Shaikh</span>
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;