import React from "react";
import Projects from "../../data/projects";
import Card from "./Card";
import { v4 as uuidv4 } from 'uuid';
import "./Card.css";

const CardsContainer = () => {
    return(
        <div id="projectsContainer">
            <div className="sleeckCardsContainer">
            {Projects.map((project)=>(
                <Card key={uuidv4()} title={project.title} subtitle={project.subtitle} link={project.link} github={project.github} logo={project.logo} description={project.description}/>
            ))}
            </div>
        </div>
    );
}

export default CardsContainer;