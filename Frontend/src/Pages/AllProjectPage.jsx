
import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function AllProjectPage() {
  const EcommerceProjectData = [
    {
      id: 1,
      name: "RoupDarshan Rental Hub",
      type: "Catalog Website (MERN Stack)",
      image: "./projectImages/p16.png",
      url : "https://www.roupdarshan.com/"
    },
    {
      id: 2,
      name: "Trade Fit Fittness",
      type: "Catalog Website",
      image: "./projectImages/p11.png",
      url: "https://www.tradefitfitness.com/"
    },
    {
      id: 3,
      name: "SHOOPER",
      type: "Personal Portfolio Website",
      image: "./projectImages/p15.png",
      url:"https://react-ecommerce-mu-fawn.vercel.app/"
    },
    
  ];

  const ResturantProjectData = [
    {
      id: 1,
      name: "Meraaj Palace Resturant",
      type: "Resturant Website",
      image: "./projectImages/p1.png",
      url : "https://www.meraajpalacerestaurant.com/"
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
      name: "Swad Chinese Resturant",
      type: "Resturant Website",
      image: "./projectImages/p2.png",
      url:"https://www.swadrestaurant.in/"
    },
    
    
  ];

  const ProtfolioProjectData = [
   
    {
      id: 3,
      name: "Siddique (Web Developer)",
      type: "Portfolio Website",
      image: "./projectImages/p17.png",
      url:"https://life-of-busker.vercel.app/"
    },
    {
      id: 3,
      name: "lliv",
      type: "Portfolio Website",
      image: "./projectImages/p13.png",
      url:"https://lliv.vercel.app/"
    },
    
  ];
  const AcademicProjectData = [
   
    {
      id: 1,
      name: "Task Tracker",
      type: "Academic Web Application",
      image: "./projectImages/p18.png",
      url:"https://task-tracker-cyan-alpha.vercel.app/"
    },
    {
      id: 2,
      name: "Soul Space",
      type: "Academic Web Application",
      image: "./projectImages/p19.png",
      url:"https://soul-space-nu.vercel.app/"
    },
    {
      id: 3,
      name: "Melody Hub",
      type: "Academic Web Application",
      image: "./projectImages/p20.png",
      url:"https://melody-hub-bice.vercel.app/"
    },
    
  ];

  return (
    // Use w-full instead of w-screen to avoid horizontal scroll; overflow-x-hidden is kept as safety
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      <Navbar />

      {/* E-commerce Section */}
      <div className="pt-[20vh] md:pt-[25vh] lg:pt-[35vh] text-white">
        <h3 className="text-2xl sm:text-3xl md:text-4xl p-4 sm:p-6 md:p-8 lg:p-12 project-type">
          E-commerce Website Solutions
        </h3>
        {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-36">
          {EcommerceProjectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Restaurant Section */}
      <div className="pt-[10vh] md:pt-[12vh] lg:pt-[15vh] text-white">
        <h3 className="text-2xl sm:text-3xl md:text-4xl p-4 sm:p-6 md:p-8 lg:p-12 project-type">
          Restaurant Website
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-36">
          {ResturantProjectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="pt-[10vh] md:pt-[12vh] lg:pt-[15vh] text-white">
        <h3 className="text-2xl sm:text-3xl md:text-4xl p-4 sm:p-6 md:p-8 lg:p-12 project-type">
          Portfolio Websites
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-36">
          {ProtfolioProjectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Academic Section */}
      <div className="py-[10vh] md:py-[12vh] lg:py-[15vh] text-white">
        <h3 className="text-2xl sm:text-3xl md:text-4xl p-4 sm:p-6 md:p-8 lg:p-12 project-type">
          Academic Web Application
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-36">
          {AcademicProjectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AllProjectPage;