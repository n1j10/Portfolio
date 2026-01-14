"use client"
import React from 'react'
import ProjectTag from './projectTag'
import { useState } from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Todo App",
    description: "Project 1 ",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/n1j10",
    previewUrl: "https://rad-medovik-a095b4.netlify.app",
  },
  {
    id: 2,
    title: "Potography Cards ",
    description: "Project 2",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/n1j10",
    previewUrl: "https://subs10.netlify.app",
  },
  {
    id: 3,
    title: "Cards",
    description: "Project 3",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/n1j10",
    previewUrl: "https://card-map10.netlify.app/",
  },
  {
    id: 4,
    title: "Bitcoin Converter",
    description: "Project 4",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/n1j10",
    previewUrl: "https://bitcoin-rami.netlify.app",
  },
  {
    id: 5,
    title: "Search for food",
    description: "Project 6",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/n1j10",
    previewUrl: "https://search-btn-rami.netlify.app/",
  },
  {
    id: 6,
    title: "Opreating System",
    description: "Project 6 ",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/n1j10",
    previewUrl: "https://oracle2.netlify.app/",
  },
];
 const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref);

 const handelTagChange = (newTag) => {
    setTag(newTag);
 }
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

    const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };


  return (
    <section id="projects">
        <h2 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-900 to-red-600 mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>

<div className='text-white flex flex-row justify-center gap-2 py-6'>
    <ProjectTag
    name="All"
    onClick={handelTagChange}
    isSelected={tag === "All"}
    />
       <ProjectTag
    name="Web"
    onClick={handelTagChange}
    isSelected={tag === "Web"}
    />
       <ProjectTag
          onClick={handelTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />

</div>

<ul ref={ref} className="grid  md:grid-cols-3 gap-8 md:gap-12">
{
filteredProjects.map((project,index)=>(
   <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >



       <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
             </motion.li>
))
}

</ul>

    </section>
  )


}



export default ProjectsSection
