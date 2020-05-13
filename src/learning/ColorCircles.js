import React from 'react';
import './ColorCircles.css';


const ColorCircles = (props) => {
    const { id, color, radius } = props;
    const myStyle = {
        backgroundColor: color,
        borderRadius: radius,
      };
    return (

        <div className='ColorCircles' style={myStyle}>{color}</div>

    )

}

export default ColorCircles;