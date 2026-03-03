import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { Link } from "react-router-dom";

function AllProjects() {
  const projectData = [
    {
      id: 1,
      name: "E-commerce Website Solutions",
      type: "Catalog Website (MERN Stack)",
      image: "./projectImages/p16.png",
      url : "https://www.roupdarshan.com/"
    },
    {
      id: 2,
      name: "South Aroma Resturant",
      type: "Resturant Website",
      image: "./projectImages/p12.png",
      url: "https://southaroma.in/"
    },
    {
      id: 3,
      name: "Life Of Busker",
      type: "Personal Portfolio Website",
      image: "./projectImages/p9.png",
      url:"https://life-of-busker.vercel.app/"
    },
    
  ];

  return (
    <div className=" h-[60vh] w-screen bg-black">
      <div className="text-white flex items-center justify-between w-full p-12">
        <h1 className="text-3xl font-semibold">Our Projects</h1>
        <Link to="/projects" className="cursor-pointer opacity-70 text-sm hover:underline ">View All</Link>
      </div>
    <h4 className=" text-white px-36 text-xl project-type"></h4>
      <div className="flex justify-center gap-10">

        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      
      
    </div>
  );
}

export default AllProjects;