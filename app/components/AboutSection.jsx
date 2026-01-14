"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>HTML + CSS</li>
        <li>React js</li>
        <li>Next js</li>
                <li>Tailwind CSS</li>

        <li>Express js</li>
        <li>PostgreSQL</li>
                <li>Postman</li>

        <li>Flutter</li>

        <li>Git + GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bechelor Degree - Al-Mamon University </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Developer - Aon</li>
                <li>Trainer Certificat - Nahthat Al-Iraq </li>
                        <li>IYELP</li>


      </ul>
    ),
  },
];



 const AboutSection = () => {
    
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();


const  handelTabChange = (id) => {
  startTransition(() => {
    setTab(id);
  })
    
}

  return (


    <section className="text-white " id="about" >

      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-1 xl:gap-0  sm:py-16 '>
<Image src="/images/pc.png" width={500} height={500} alt="" />


<div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-center">

  
   <h2 className="text-4xl font-bold text-white mb-4">
    About me
   </h2 >
       <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>

          <div className="flex flex-row justify-start mt-8 " >
            <TabButton 
            active={tab === "skills"}
            selectTab={() => handelTabChange("skills")}
            >
               {" "}  
              Skills{" "}
            
            </TabButton>
        <TabButton
          
              selectTab={() => handelTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
 <TabButton
              selectTab={() => handelTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
</div>
      </div>

    </section>
  )
}



export default AboutSection
