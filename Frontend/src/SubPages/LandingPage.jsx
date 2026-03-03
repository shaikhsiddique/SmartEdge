import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import gsap from "gsap";

const IMAGE_COUNT = 11;

export default function LandingPage() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const currentIndex = useRef(0);
  const lastMoveTime = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  const THROTTLE = 30;
  const MIN_DISTANCE = 70; // movement threshold

  cardsRef.current = [];

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.set(cards, {
      autoAlpha: 0,
      scale: 0.8,
    });

    const handleMove = (e) => {
      const now = Date.now();
      if (now - lastMoveTime.current < THROTTLE) return;
      lastMoveTime.current = now;

      const x = e.clientX;
      const y = e.clientY;

      // distance check
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MIN_DISTANCE) return;

      lastPos.current = { x, y };

      const index = currentIndex.current % cards.length;
      const card = cards[index];

      currentIndex.current++;

      if (!card) return;

      gsap.killTweensOf(card);

      gsap.set(card, {
        x: x - 150,
        y: y - 75,
        autoAlpha: 0,
        scale: 0.9,
        zIndex: 1000 + index,
      });

      // timeline with delays
      gsap.timeline()
        .to(card, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.25,
          ease: "power3.out",
          delay: 0.05, // show delay
        })
        .to(card, {
          autoAlpha: 0,
          duration: 0.9,
          ease: "power2.out",
          delay: 0.2, // delay before removing
        });
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMove);

    return () => {
      container.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-hidden relative bg-black"
    >
      <Navbar />

      <div className="logo w-[70%] flex absolute left-1/2 -translate-x-1/2 top-[10%]">
        <img src="./images/logo2.png" className="w-full h-auto" alt="" />
      </div>

      {[...Array(IMAGE_COUNT)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) cardsRef.current.push(el);
          }}
          className="h-[150px] w-[300px] absolute pointer-events-none rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url('/projectImages/p${i + 1}.png')`,
          }}
        />
      ))}

      <div className="landing-text1 text-white absolute bottom-14 left-1/2 -translate-x-1/2 text-lg text-center w-[30%]">
        <h3>
          Where Design and Innovation Come Together to Create Remarkable Digital Experiences.
        </h3>
      </div>
    </div>
  );
}