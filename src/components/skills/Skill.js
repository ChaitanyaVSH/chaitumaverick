import React from "react";
import {Button} from "react-bootstrap";
import "./Skills.css";

const Skill = ({name, expertise, experience, logo}) => {
    return(
            <Button id="skillButton" variant="outline-success">{name} {<hr/>} {expertise} {<br/>} {experience}</Button>
    );
}

export default Skill;
