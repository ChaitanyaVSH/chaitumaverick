import React, { Component } from 'react';
import emojify from "node-emojify";
import {Jumbotron, Button} from "react-bootstrap";
import LineParticles from './components/particleAnimations/LineParticles';
import ProjectContainer from './components/projects/ProjectsContainer';
import NavigationBar from './components/navibar/Navbar';
import EducationContainer from './components/education/EducationContainer';
//import Skills from './components/skill/Skills';
import "./App.css";
export default class App extends Component {
  render() {
    return (

      <div id="home">
        <NavigationBar/>
        <Jumbotron fluid id="temp">
        <h1 className="display-3">Hey, I'm Chaitu Maverick</h1>
        <p>Knock Knock</p>
        <p>You can always find me loving myself... {emojify(":heart:")}</p>
        <p>Life is never only about <code>ctrl C</code> and <code>ctrl V</code></p>
        <br/>
        <Button variant="outline-warning" href="https://github.com/ChaitanyaVSH" target="_blank" className="btnModified">Github</Button>
        <Button variant="outline-info" href="https://www.linkedin.com/in/kotipalli-chaitanya-977917150/" target="_blank" className="btnModified">LinkedIN</Button>
        <Button variant="outline-success" href="https://www.hackerrank.com/qwertyfellow" target="_blank" className="btnModified">Hackerrank</Button>
        <LineParticles/>
      </Jumbotron>
      <ProjectContainer/>
      <EducationContainer/>
      </div>

    )
  }
  /**
   * 1. Fix the CSS Bug for smaller screens. DONE
   * 2. Implement the favorite quotes component to be in the center of the screen.
   * 3. Explore Apple Desing system and pick the components styles/layouts.
   * 4. Use cards to design the projects worked so far. https://react-bootstrap.github.io/components/cards/ || https://react-bootstrap.github.io/components/cards/#title-text-and-links DONE
   * 5. Add Skills using Progress Bar plugins
   * 6. Add Education using Card components
   */
}
