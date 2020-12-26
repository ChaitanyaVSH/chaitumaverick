import React from "react";
import "./Card.css";

const Card = (props) => {
    return(
        <div className="cardModified">
            <div className="cardImage">
                <img src={props.logo} alt="Logo"/>
            </div>
            <div className="cardInfo">
                <h4 className="H4 text-muted">{props.subtitle}</h4>
                <h1 className="h1Card">{props.title}</h1>
            </div>
            <div className="cardLink">
                <a href={props.link}>See Application</a> {" | "}
                <a href={props.github}>Github</a>
            </div>
        </div>
    );
}

export default Card;
