import React from "react";
import TalkButton from "../Components/TalkButton";

function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#0f0e0e] relative overflow-hidden">
      {/* Background pattern (same as hero) */}
      <div
        className="
        absolute w-full h-full
        backdrop-blur-[6px]
        bg-[radial-gradient(rgba(255,255,255,0.18)_0.5px,transparent_0.5px)]
        bg-[size:5px_5px]
        "
      />

      <div className="relative max-w-[1200px] mx-auto px-6 py-28">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-semibold text-white">
            About <span className="text-[#1D79D3]">Us</span>
          </h1>
          <p className="text-white/60 text-xl mt-6 max-w-[750px] mx-auto">
            We are a modern development agency helping businesses and students
            build powerful digital products that grow, scale, and convert.
          </p>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
          <div className="bg-black/60 border border-white/10 rounded-3xl p-8 backdrop-blur">
            <h2 className="text-3xl font-semibold mb-4">
              Who <span className="text-[#1D79D3]">We Are</span>
            </h2>
            <p className="text-white/70 leading-relaxed">
              We are an agency and service provider company specializing in
              website, application, and software development. Our goal is to
              help businesses grow online with high-quality digital solutions.
              We also support college projects and commercial work with
              professional development and management services.
            </p>
          </div>

          <div className="bg-black/60 border border-white/10 rounded-3xl p-8 backdrop-blur">
            <h2 className="text-3xl font-semibold mb-4">
              What <span className="text-[#1D79D3]">We Build</span>
            </h2>
            <ul className="space-y-3 text-white/70">
              <li>• Modern Websites</li>
              <li>• Mobile Applications</li>
              <li>• Custom Software</li>
              <li>• Startup MVP Development</li>
              <li>• College Project Development</li>
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="mb-24">
          <h2 className="text-4xl text-center font-semibold mb-14">
            Our <span className="text-[#1D79D3]">Services</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-[#1D79D3] transition-all">
              <h3 className="text-xl font-semibold mb-3">
                Website Development
              </h3>
              <p className="text-white/60">
                Highly attractive and conversion-focused websites designed to
                grow your business online.
              </p>
            </div>

            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-[#1D79D3] transition-all">
              <h3 className="text-xl font-semibold mb-3">App Development</h3>
              <p className="text-white/60">
                Scalable mobile and web applications built for performance and
                long-term growth.
              </p>
            </div>

            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-[#1D79D3] transition-all">
              <h3 className="text-xl font-semibold mb-3">Software Development</h3>
              <p className="text-white/60">
                Custom software solutions tailored for businesses, startups, and
                project needs.
              </p>
            </div>

            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-[#1D79D3] transition-all">
              <h3 className="text-xl font-semibold mb-3">
                Website Management
              </h3>
              <p className="text-white/60">
                We manage, maintain, and optimize your website to keep it fast,
                secure, and updated.
              </p>
            </div>

            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-[#1D79D3] transition-all">
              <h3 className="text-xl font-semibold mb-3">App Management</h3>
              <p className="text-white/60">
                Ongoing app support, updates, and performance improvements.
              </p>
            </div>

            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-[#1D79D3] transition-all">
              <h3 className="text-xl font-semibold mb-3">
                Software Maintenance
              </h3>
              <p className="text-white/60">
                Continuous monitoring, updates, and scaling for your systems.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-semibold mb-10">
            Why Choose <span className="text-[#1D79D3]">Us</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6">
              Attractive Design
            </div>
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6">
              High Converting Websites
            </div>
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6">
              Fully Responsive
            </div>
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6">
              Scalable & Stable Systems
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <h2 className="text-3xl font-semibold">
            Let's Build Something <span className="text-[#1D79D3]">Great</span>
          </h2>
          <p className="text-white/60 max-w-[600px]">
            Whether you're a business, startup, or student working on a project,
            we can help you build powerful digital products.
          </p>

          <TalkButton />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;