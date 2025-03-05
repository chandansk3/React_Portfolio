import React from "react";
import "../styles/Projects.css";

const projects = [

  {
    id: 1,
    title: "NOTEPULSE - Music Streaming Website",
    description: " Designed  and  developed  a responsive  music  streaming  platform using   HTML, CSS and JavaScript.",
    link: "https://chandansk3.github.io/Notepulse/"
  },
  {
    id: 2,
    title: "RICE GRAIN QUALITY DETECTION AND CLASSIFICATION USING AI",
    description: "  Implemented  a  CNN-based  system to  automate  rice  grain classification  and quality detection, reducing manual effort  and ensuring accurate quality assessment. ",
    link: " https://github.com/chandansk3/Rice-Grain-Quality-Detection"
  },
  {
    id: 3,
    title: "CLUELESS KID PORTAL",
    description: "A full-stack MERN e-commerce website with authentication and payments.",
    link: "https://github.com/chandansk3/Clueless-kid-portal"
  },
 

  {
    id: 4,
    title: "HEYSMOODH",
    description: "    Project  for  ByteWEB:  a   vibrant  marketing   website   spotlighting   smoodh   tetra    pack! Convenience,  freshness,  eco friendliness  using  HTML, CSS  and  JavaScript.",
    link: " https://chandansk3.github.io/HEYSMOODH/"
  }
];

const Project = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
