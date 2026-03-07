import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { Link } from "react-router-dom";

function AllProjects() {
  const projectData = [
    {
      id: 1,
      name: "RoopDarshan Rental Hub",
      type: "Catalog Website (MERN Stack)",
      image: "https://res.cloudinary.com/daai6xwtd/image/upload/v1772888010/p16_prim9a.png",
      url : "https://www.roupdarshan.com/"
    },
    {
      id: 2,
      name: "South Aroma Resturant",
      type: "Resturant Website",
      image: "https://res.cloudinary.com/daai6xwtd/image/upload/v1772888000/p12_qb47rv.png",
      url: "https://southaroma.in/"
    },
    {
      id: 3,
      name: "Life Of Busker",
      type: "Personal Portfolio Website",
      image: "https://res.cloudinary.com/daai6xwtd/image/upload/v1772888018/p9_esjraj.png",
      url:"https://life-of-busker.vercel.app/"
    },
    
  ];

  return (
    <div className=" min-h-[60vh] w-screen bg-black">
      <div className="text-white flex items-center justify-between w-full p-12">
        <h1 className="text-3xl font-semibold">Our Projects</h1>
        <Link to="/work" className="cursor-pointer opacity-70 text-sm hover:underline ">View All</Link>
      </div>
    <h4 className=" text-white px-36 text-xl project-type"></h4>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-10 md:px-20 px-4">

        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      
      
    </div>
  );
}

export default AllProjects;