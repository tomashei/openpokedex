import React, { Component } from 'react';
import CirclesList from './CirclesList';
import MyButton from './MyButton';
import './appLearning.css';

import {circles} from './circles';


import MyList from './MyList';


const arrayLenght = circles.length;
let selectedCircle = parseInt(arrayLenght / 2);

const checkSelection = (state, direction) => {
    if (state + direction < 0) {
        return arrayLenght - 1;

    } else if (state + direction >= arrayLenght ) {
        return 0;
    } else {
        return state + direction;
    }
};


let redCircleRadius = [1, 2, 3, 4, 5, 6];

class AppLearning extends Component {
    constructor() {
        super()
        this.state = {
            selected: selectedCircle,
            redRadius: redCircleRadius.map(num => 50),
        }
    }


    

    onMyClickL = (event) => {
        this.setState({selected: checkSelection(this.state.selected, -1) });
        console.log('L', this.state.selected);
    }

    onMyClickR = (event) => {
        this.setState({selected: checkSelection(this.state.selected, +1) });
        console.log('R', this.state.selected);
    }



    onRedClick = (event) => {
        this.state.redRadius[event] = this.state.redRadius[event] + 10;
        this.setState({redRadius: this.state.redRadius});
        console.log('test', this.state.redRadius);
    }

    render() {
        const mySelection = this.state.selected;

        return (
            <div>
            <h1>This is my Button Test:</h1>

                <CirclesList circles={circles} selected={mySelection} />

                <br></br>

                <MyButton text='<<<' myClick={this.onMyClickL} /> <MyButton text='>>>' myClick={this.onMyClickR} />


                <MyList myRedClick={this.onRedClick} myRadius={this.state.redRadius} />




            </div>
        )
    }
  }

export default AppLearning;