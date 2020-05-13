import React from 'react';
import ColorCircles from './ColorCircles';


const CirclesList = ({ circles, selected }) => {
    const circlesComponent = circles.map((circleDetails, i) => {

        let radius = '50%';
        if (i === selected) {
            radius = '0%';
        }

        return (
            <ColorCircles key={i} id={circles[i].id} color={circles[i].color} radius={radius} /> 
        );
    });
    


    return (
        <div>
            {circlesComponent}
        </div>
    );
}

export default CirclesList;