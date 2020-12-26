import React from "react";
import Chips from "./Chips";
import Skills from "../../data/skills";

const ChipsContainer = () => {
    return (
        <div className="chipsContainer">
            <div className="ChipsContainer">
                {Skills.map((skill)=>(
                    <Chips logo={skill.logo} skillName={skill.name}/>
                ))}
            </div>
        </div>
    );
}

export default ChipsContainer;
