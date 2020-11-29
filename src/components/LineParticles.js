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
	                            "value": 50
	                        },
	                    "size": {
	                        "value": 10
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
