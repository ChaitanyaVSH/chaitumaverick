import React, { Component } from 'react';
import "../../App.css";
import Skill from './Skill';
import SkillSet from './SkillSet';

export class Skills extends Component {
    render() {
        return (
            <div className="skillsContainer">
               <Skill/>
               <SkillSet/>
            </div>
        )
    }
}

export default Skills
