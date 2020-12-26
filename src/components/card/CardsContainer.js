import React from "react";
import Projects from "../../data/projects";
import Card from "./Card";
import { v4 as uuidv4 } from 'uuid';

const CardsContainer = () => {
    console.log(Projects);
    return(
        <div id="projectsContainer">
            <div className="CardsContainer">
            {Projects.map((project)=>(
                <Card key={uuidv4()} title={project.title} subtitle={project.subtitle} link={project.link} github={project.github} logo={project.logo}/>
            ))}
            </div>
        </div>
    );
}

export default CardsContainer;
