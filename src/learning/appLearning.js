import React, { Component } from 'react';
import CirclesList from './CirclesList';
import MyButton from './MyButton';
import './appLearning.css';

import {circles} from './circles';


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

class AppLearning extends Component {
    constructor() {
        super()
        this.state = {
            selected: selectedCircle,
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

    render() {
        const mySelection = this.state.selected;

        return (
            <div>
            <h1>This is my Button Test:</h1>

                <CirclesList circles={circles} selected={mySelection} />

                <br></br>

                <MyButton text='<<<' myClick={this.onMyClickL} /> <MyButton text='>>>' myClick={this.onMyClickR} />


            </div>
        )
    }
  }

export default AppLearning;