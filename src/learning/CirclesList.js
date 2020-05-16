import React from 'react';
import ColorCircles from './ColorCircles';


const CirclesList = ({ circles, selected }) => {
    const circlesComponent = circles.map((circleDetails, i) => {

        let radius = '50%';
        let animal = circles[i].animal;
        if (i === selected) {
            radius = '0%';
            animal = '✔';
        }

        return (
            <ColorCircles key={i} id={circles[i].id} color={circles[i].color} radius={radius} animal={animal} /> 
        );
    });
    


    return (
        <div>
            {circlesComponent}
        </div>
    );
}

export default CirclesList;