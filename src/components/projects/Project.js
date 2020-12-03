import React from "react";
import { Card } from "react-bootstrap";
import "./Project.css"

const Project = () => {

    return(
        <Card id="ProjectCard">
            <Card.Body>
                <Card.Title>
                    BooksReader
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    A handy tool for book lovers to track all their readings
                </Card.Subtitle>
                <Card.Text>
                    This application helps the readers in tracking the books they are reading. It has the functionalities to add, delete, hide the books. You can filter the books based on the month
                </Card.Text>
                <Card.Link href="http://booksreaderr.herokuapp.com/" target="_blank">Link</Card.Link>
                <Card.Link href="https://github.com/ChaitanyaVSH/BooksReader" target="_blank">Github</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Project;
