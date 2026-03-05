import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import gsap from "gsap";

const IMAGE_COUNT = 20;

export default function LandingPage() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const currentIndex = useRef(0);
  const lastMoveTime = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  const THROTTLE = 30;
  const MIN_DISTANCE = 70;

  cardsRef.current = [];

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.set(cards, {
      autoAlpha: 0,
      scale: 0.8,
    });

    const handleMove = (x, y) => {
      const now = Date.now();
      if (now - lastMoveTime.current < THROTTLE) return;
      lastMoveTime.current = now;

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

      gsap.timeline()
        .to(card, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.25,
          ease: "power3.out",
          delay: 0.05,
        })
        .to(card, {
          autoAlpha: 0,
          duration: 0.9,
          ease: "power2.out",
          delay: 0.2,
        });
    };

    const mouseMove = (e) => {
      handleMove(e.clientX, e.clientY);
    };

    const touchMove = (e) => {
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    };

    const container = containerRef.current;

    container.addEventListener("mousemove", mouseMove);
    container.addEventListener("touchmove", touchMove);

    return () => {
      container.removeEventListener("mousemove", mouseMove);
      container.removeEventListener("touchmove", touchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-hidden relative bg-black"
    >
      <Navbar />

      <div className="logo md:w-[70%] w-[105vw] flex absolute left-1/2 -translate-x-1/2 md:top-[10%] top-[25%]">
        <img src="./images/logo2.png" className="w-full h-auto" alt="" />
      </div>

      {[...Array(IMAGE_COUNT)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) cardsRef.current.push(el);
          }}
          className="md:h-[150px] h-[75px] md:w-[300px] w-[150px] absolute pointer-events-none rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url('/projectImages/p${i + 1}.png')`,
          }}
        />
      ))}

      <div className="landing-text1 text-white absolute md:bottom-14 bottom-20 left-1/2 -translate-x-1/2 text-lg text-center md:w-[30%] w-[50%]">
        <h3>
          Where Design and Innovation Come Together to Create Remarkable Digital Experiences.
        </h3>
      </div>
    </div>
  );
}