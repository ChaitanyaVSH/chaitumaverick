import React from "react";
import "./Chips.css";

const Chips = ({logo, skillName}) => {
    return(
        <div className="chips">
            <img src={logo} alt="logo" className="Chipimg"/>
            {skillName}
        </div>
    );
}

export default Chips;
