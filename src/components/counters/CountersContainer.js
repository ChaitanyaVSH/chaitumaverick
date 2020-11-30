import React, { Component } from 'react';
import Counter from "./Counter";

export default class CountersContainer extends Component {
    render() {
        return (
            <div className="countersContainer">
                <Counter value={98452} description="Lines Of Code"/>
                <Counter value={24} description="Projects finished"/>
                <Counter value={5942} description="Coffees drunk"/>
                <Counter value={433} description="Sleepless nights"/>
            </div>
        )
    }
}
