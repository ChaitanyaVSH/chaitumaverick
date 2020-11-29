import React, { Component } from 'react';
import emojify from "node-emojify";
import {Jumbotron} from "react-bootstrap";
import {Button} from "react-bootstrap";
import ParticlesJS from "./components/Particles";
import "./App.css";
import LineParticles from './components/LineParticles';

export default class App extends Component {
  render() {
    return (

      <div>
        <Jumbotron fluid id="temp">
        <h1 className="display-3">Hey, I'm Chaitu Maverick</h1>
        <p>Knock Knock</p>
        <p>You can always find me loving myself... {emojify(":heart:")}</p>
        <p>Life is never only about <code>ctrl C</code> and <code>ctrl V</code></p>
        <br/>
        <Button variant="secondary" href="https://github.com/ChaitanyaVSH" target="_blank" className="btnModified">Github</Button>
        <Button variant="info" href="https://www.linkedin.com/in/kotipalli-chaitanya-977917150/" target="_blank" className="btnModified">LinkedIN</Button>
        <Button variant="success" href="https://www.hackerrank.com/qwertyfellow" target="_blank" className="btnModified">Hackerrank</Button>
        <LineParticles/>
      </Jumbotron>
      <ParticlesJS/>
      </div>

    )
  }
  /**
   * 1. Fix the CSS Bug for smaller screens.
   * 2. Implement the favorite quotes component to be in the center of the screen.
   * 3. Explore Apple Desing system and pick the components styles/layouts.
   */
}
