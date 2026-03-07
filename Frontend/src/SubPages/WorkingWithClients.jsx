import React, { useState, useEffect, useRef } from "react";

const clients = [
  { src: "/images/client1.jpeg", name: "Meraaj Palace",  tag: "Restaurant · Booking System", num: "01" },
  { src: "/images/client2.jpeg", name: "Swad Chinese",   tag: "F&B · Menu & Gallery",        num: "02" },
  { src: "/images/client3.jpeg", name: "South Aroma",    tag: "Cafe · Brand Website",         num: "03" },
  { src: "/images/client4.jpeg", name: "Roopdarshan",    tag: "Fashion · E-Commerce",         num: "04" },
];

const BLUE = "#1D79D3";

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function ClientCard({ client, index }) {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col gap-3 cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.65s ease ${index * 100}ms, transform 0.65s ease ${index * 100}ms`,
      }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden bg-neutral-900"
        style={{ aspectRatio: "3/4", borderRadius: 2 }}
      >
        <img
          src={client.src}
          alt={client.name}
          className="w-full h-full object-cover object-center"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />

        {/* Dark gradient — always present */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)" }}
        />

        {/* Blue hover tint */}
        

        {/* Index */}
        <span
          className="absolute top-3 right-3"
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 9,
            letterSpacing: "0.18em",
            color: BLUE,
            opacity: 0.85,
          }}
        >
          {client.num}
        </span>

        {/* Bottom blue bar slides in */}
        <div
          className="absolute bottom-0 left-0"
          style={{
            height: 2,
            background: BLUE,
            width: hovered ? "100%" : "0%",
            transition: "width 0.45s ease",
          }}
        />
      </div>

      {/* Caption */}
      <div className="flex items-start justify-between pt-0.5">
        <div>
          <p
            className="text-white font-light leading-snug"
            style={{ fontFamily: "'Georgia', serif", fontSize: "0.95rem", letterSpacing: "-0.01em" }}
          >
            {client.name}
          </p>
          <p
            className="text-neutral-500 mt-1 uppercase tracking-widest"
            style={{ fontFamily: "'Courier New', monospace", fontSize: 8 }}
          >
            {client.tag}
          </p>
        </div>
        <div
          className="mt-1.5 rounded-full flex-shrink-0"
          style={{
            width: 5, height: 5,
            background: BLUE,
            opacity: hovered ? 1 : 0.2,
            transition: "opacity 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function GlimpseOfWork() {
  const [headerRef, headerVisible] = useInView();

  return (
    <section className="w-full bg-black" style={{ padding: "96px 6vw 112px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div style={{ height: 1, width: 28, background: BLUE }} />
            <span
              className="text-neutral-500 uppercase tracking-widest"
              style={{ fontFamily: "'Courier New', monospace", fontSize: 9 }}
            >
              Selected Projects
            </span>
          </div>

          {/* Title row */}
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2
              className="text-white font-light leading-tight"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              A Glimpse of<br />
              <em style={{ color: BLUE, fontStyle: "italic" }}>Our Work</em>
            </h2>

            <p
              className="text-neutral-500 leading-relaxed"
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.67rem",
                maxWidth: 220,
                letterSpacing: "0.04em",
              }}
            >
              Every project is custom-built<br />
  around your needs — creative,<br />
  attractive, and affordable.
            </p>
           
          </div>
        </div>

        {/* Thin divider */}
        <div className="w-full mb-10" style={{ height: 1, background: "#1a1a1a" }} />

        {/* 4-col grid */}
        <div className="grid grid-cols-4 gap-7">
          {clients.map((c, i) => (
            <ClientCard key={c.num} client={c} index={i} />
          ))}
        </div>

        
      </div>
    </section>
  );
}