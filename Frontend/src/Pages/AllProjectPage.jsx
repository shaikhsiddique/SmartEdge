import React from 'react'
import ProjectCard from "../Components/ProjectCard";

function AllProjectPage() {
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
    <div className=' h-screen w-screen'>
        <div className="flex justify-center gap-10">

{projectData.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}
</div>
    </div>
  )
}

export default AllProjectPage