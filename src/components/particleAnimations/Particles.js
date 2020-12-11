import React, { Component } from 'react';
import Particles from "react-particles-js";

export default class ParticlesJS extends Component {
    render() {
        return (
            <div>
                <Particles className="particleModified"
    params={{
	    "particles": {
	        "number": {
	            "value": 30,
	            "density": {
	                "enable": true,
	                "value_area": 500
	            }
            },
	        "move": {
	            "speed": 5,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	            ],
	            "image": [
	                {
	                    "src": "https://cdn.worldvectorlogo.com/logos/react.svg",
	                    "height": 20,
	                    "width": 23
	                },
	                {
	                    "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
	                    "height": 20,
	                    "width": 20
	                },
	                {
	                    "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
	                    "height": 20,
	                    "width": 20
                  },
                  {
                    "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png",
                    "height": 20,
                    "width": 23
                  },
                  {
                    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
                    "height": 25,
                    "width": 35
                  },
                  {
                    "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
                    "height": 20,
                    "width": 20
                  },
                  {
                    "src": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
                    "height": 20,
                    "width": 23
                  },
                  {
                    "src": "https://montykamath.files.wordpress.com/2018/02/graphql.png",
                    "height": 20,
                    "width": 23
                  },
	            ]
	        },
	        "color": {
	            "value": "#ccc"
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
	    "retina_detect": false
	}} />
            </div>
        )
    }
}
