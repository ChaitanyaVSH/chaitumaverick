import React, { Component } from 'react';
import CountUp from 'react-countup';
import "../../App.css";

export default class Counter extends Component {
    render() {
        return (
            // <div className="counter">
            //     <h1>Lines of Code</h1>
            //     <div className="counterValue">
            //     <CountUp end={this.props.value} duration={8}/>
            //     </div>
            // </div>
            <div className="card">
                <div className="card-header">
                    <h1><CountUp end={this.props.value} duration={3}/></h1>
                </div>

                <div className="card-content">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
