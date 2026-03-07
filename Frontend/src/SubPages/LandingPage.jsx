import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import gsap from "gsap";

const IMAGE_COUNT = 20;

export default function LandingPage() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const logoRef = useRef(null);
  const currentIndex = useRef(0);
  const lastMoveTime = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const images = ['https://res.cloudinary.com/daai6xwtd/image/upload/v1772887995/p1_nvhluh.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772888000/p2_qj3cnx.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772887992/p3_q2ntsx.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772887997/p4_mbmmrr.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772888000/p5_joskbs.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772888000/p6_qngz5r.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772888003/p7_lapjen.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772888012/p8_hpwkyf.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772888018/p9_esjraj.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772888006/p10_nubglo.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772888007/p11_ikbehf.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772888000/p12_qb47rv.png',"https://res.cloudinary.com/daai6xwtd/image/upload/v1772888014/p13_yzrybs.png","https://res.cloudinary.com/daai6xwtd/image/upload/v1772887996/p14_olqnjy.png","https://res.cloudinary.com/daai6xwtd/image/upload/v1772888006/p15_ne7mrj.png","https://res.cloudinary.com/daai6xwtd/image/upload/v1772888010/p16_prim9a.png",'https://res.cloudinary.com/daai6xwtd/image/upload/v1772888014/p17_epgjbz.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772888008/p18_efgmrh.png','https://res.cloudinary.com/daai6xwtd/image/upload/v1772888010/p19_f1kls5.png',"https://res.cloudinary.com/daai6xwtd/image/upload/v1772888014/p20_nrgiks.png"]

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

  useEffect(() => {
    gsap.fromTo(logoRef.current,
      { autoAlpha: 0, scale: 0.8 },
      { autoAlpha: 1, scale: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-hidden relative bg-black"
    >
      <Navbar />

      <div ref={logoRef} className="logo md:w-[70%] w-[105vw] flex absolute left-1/2 -translate-x-1/2 md:top-[10%] top-[25%]">
        <img src="https://res.cloudinary.com/daai6xwtd/image/upload/v1772889112/logo2_pqktld.png" className="w-full h-auto" alt="" />
      </div>
      

      {[...Array(IMAGE_COUNT)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) cardsRef.current.push(el);
          }}
          className="md:h-[150px] h-[75px] md:w-[300px] w-[150px] absolute pointer-events-none rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[i]})`,
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