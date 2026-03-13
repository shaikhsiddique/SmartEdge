import React, { useEffect, useRef } from "react";
import ProjectCard from "../Components/ProjectCard";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AllProjects() {
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const projectData = [
    {
      id: 1,
      name: "RoopDarshan Rental Hub",
      type: "Catalog Website (MERN Stack)",
      image: "https://res.cloudinary.com/daai6xwtd/image/upload/v1772888010/p16_prim9a.png",
      url: "https://www.roupdarshan.com/"
    },
    {
      id: 2,
      name: "South Aroma Restaurant",
      type: "Restaurant Website",
      image: "https://res.cloudinary.com/daai6xwtd/image/upload/v1772888000/p12_qb47rv.png",
      url: "https://southaroma.in/"
    },
    {
      id: 3,
      name: "Life Of Busker",
      type: "Personal Portfolio Website",
      image: "https://res.cloudinary.com/daai6xwtd/image/upload/v1772888018/p9_esjraj.png",
      url: "https://life-of-busker.vercel.app/"
    },
  ];

  useEffect(() => {
    // Heading fade in
    gsap.fromTo(headingRef.current,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );

    // Cards stagger up
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-[60vh] w-screen bg-black">
      <div ref={headingRef} className="text-white flex items-center justify-between w-full p-12">
        <h1 className="text-3xl font-semibold">Our Projects</h1>
        <Link to="/work" className="cursor-pointer opacity-70 text-sm hover:underline">View All</Link>
      </div>

      <h4 className="text-white px-36 text-xl project-type"></h4>

      <div ref={cardsRef} className="flex flex-wrap md:flex-nowrap justify-center gap-10 md:px-20 px-4">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default AllProjects;