import React from 'react';
import './ColorCircles.css';


const ColorCircles = (props) => {
    const { color, radius, animal } = props;
    const myStyle = {
        backgroundColor: color,
        borderRadius: radius,
      };
    return (

        <div className='ColorCircles' style={myStyle}>{animal}</div>

    )

}

export default ColorCircles;