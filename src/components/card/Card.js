import React from "react";
import "./Card.css";

const Card = ({title, subtitle, logo, link, github}) => {
    return(
        <div className="cardModified">
            <div className="cardImage">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="cardInfo">
                <h4 className="H4 text-muted">{subtitle}</h4>
                <h1 className="h1Card">{title}</h1>
            </div>
            <div className="cardLink">
                <a href={link}>See Application</a> {" | "}
                <a href={github}>Github</a>
            </div>
        </div>
    );
}

export default Card;
