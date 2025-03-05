import React from "react";
import "../styles/Skills.css";

const skills = [
  { name: "HTML", level: "Advanced", ProgressEvent:"90%"},
  { name: "CSS", level: "Advanced" , ProgressEvent:"90%" },
  { name: "Bootstrap", level: "Advanced" , ProgressEvent:"90%" },
  { name: "JavaScript", level: "Advanced" , ProgressEvent:"80%" },
  { name: "React.js", level: "Intermediate" , ProgressEvent:"75%" },
  { name: "MySql", level: "Intermediate" , ProgressEvent:"75%" },
  { name: "java", level: "Intermediate" , ProgressEvent:"75%" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
            <span className="skill-level">{skill.ProgressEvent}</span>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
