import React from 'react';
import image from "../../assets/flame-new-year-party-2022.png";
import Confetti from 'react-confetti'
import "./confetti.css"

const ConfettiComponent = () => {
    return (
        <div className="confettiContainer">
            <Confetti
                width={1200}
                height={1200}
            />
            <div className="wishingMessage">
                <img src={image} alt="2022"/>
                <div className="wishesContent">
                    <h1>Happy new year</h1>
                    <h5>Let this year bring you only happiness...</h5>
                    <h5>Let this year you network more and more...</h5>
                    <h5>Let this year bring you more launch parties...</h5>
                    <h5>Let this year bring you less SEV 2s...</h5>
                </div>
            </div>
        </div>
    )
}

export default ConfettiComponent;
