import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Project from "./Project";
import projects from "../../data/projects";


const ProjectContainer = () =>{

    return (
        <div id="projectsContainer">
        <div className="ProjectContainer">
            {projects.map((project)=>(
                <Project key={uuidv4()} title={project.title} subtitle={project.subtitle} description={project.description} link={project.link} github={project.github}/>
            ))}
        </div>
        </div>
    );
}

export default ProjectContainer;
