import React, { Component } from 'react';
import Particles from "react-particles-js";

export default class LineParticles extends Component {
    render() {
        return (
            <div>
                <Particles className="lineParticles" params={
                    {
	                    "particles": {
	                        "number": {
								"value": 50,
								"density": {
									"enable": true,
									"value_area": 1000
								}
	                        },
							"size": {
								"value": 50,
								"random": false,
								"anim": {
									"enable": true,
									"speed": 4,
									"size_min": 10,
									"sync": true
								}
							}
	                    },
	                    "interactivity": {
	                        "events": {
	                            "onhover": {
	                                "enable": true,
	                                "mode": "repulse"
	                            }
	                    }
	                    }
                    }
        }/>
        </div>
        )
    }
}
