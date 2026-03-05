import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    const overlay = overlayRef.current;

    const enterAnimation = () => {
      gsap.to(card, { y: -10, duration: 0.4, ease: 'power3.out' });
      gsap.to(image, { scale: 1.05, duration: 0.7, ease: 'power3.out' });
      gsap.to(overlay, { opacity: 1, duration: 0.4, ease: 'power2.out' });
      gsap.to(text, { y: -4, duration: 0.4, ease: 'power2.out' });
    };

    const leaveAnimation = () => {
      gsap.to(card, { y: 0, duration: 0.4, ease: 'power3.out' });
      gsap.to(image, { scale: 1, duration: 0.7, ease: 'power3.out' });
      gsap.to(overlay, { opacity: 0, duration: 0.4 });
      gsap.to(text, { y: 0, duration: 0.4 });
    };

    card.addEventListener('mouseenter', enterAnimation);
    card.addEventListener('mouseleave', leaveAnimation);

    return () => {
      card.removeEventListener('mouseenter', enterAnimation);
      card.removeEventListener('mouseleave', leaveAnimation);
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={project.url}
      target="_blank"                // Optional: open in new tab
      rel="noopener noreferrer"       // Security for target="_blank"
      className="block text-white cursor-pointer group"
    >
      {/* Image container with fixed aspect ratio – no fixed heights */}
      <div className="w-full aspect-video overflow-hidden rounded-xl relative">
        <img
          ref={imageRef}
          src={project.image}
          className="w-full h-full object-cover object-center"
          alt={project.name}
        />
        {/* Gradient overlay – hidden by default, shown on hover via GSAP */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 pointer-events-none"
        />
      </div>

      {/* Text section – responsive padding */}
      <div ref={textRef} className="p-3 sm:p-4">
        <div className="text-lg sm:text-xl md:text-2xl font-semibold capitalize leading-tight">
          {project.name}
        </div>
        <div className="opacity-60 text-xs sm:text-sm mt-1">
          {project.type}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;