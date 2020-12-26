import React from "react";
import "./Card.css";

const Card = ({title, subtitle, description, link, github,}) => {

    return(
        <div className="sleeckCard">
            <p id="cardParaGraph">{subtitle}</p>
            <h2 id="cardHeadingTwo">{title}</h2>
            <p id="cardParaGraph">{description}</p>
            <div id="cardBottomDiv">
                <a href={link}>See Application</a>{' || '}
                <a href={github}>Github</a>
            </div>
        </div>
    );
}

export default Card;
