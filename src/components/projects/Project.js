import React from "react";
import {Card } from "react-bootstrap";
import "./Projects.css"

const Project = ({title, subtitle, description, link, github}) => {

    return(
        <Card id="ProjectCard">
            <Card.Body>
                <Card.Title style={{fontSize:"22px"}}>
                    {title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {subtitle}
                </Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Link href={link} target="_blank">See Application</Card.Link>
                <Card.Link href={github} target="_blank">Github</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Project;
