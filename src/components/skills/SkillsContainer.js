import React from "react";
import Skill from "./Skill";
import Skills from "../../data/skills";
import "./Skills.css";

const SkillsContainer = () => {
    console.log(Skills);
    return(
        <div id="skillsContainer">
            <hr/>
            <div className="SkillsContainer">
                {Skills.map((skill)=>(
                    <Skill name={skill.name} expertise={skill.expertise} experience={skill.experience} logo={skill.logo}/>
                ))}
            </div>
        </div>
    );
}

export default SkillsContainer;
