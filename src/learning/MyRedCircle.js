import React from 'react';
import './MyRedCircle.css';

const MyRedCircle = ({id, myRedClick, myRadius, text}) => {
    const myStyle = {
        width: myRadius + 'px',
        height: myRadius + 'px',
    }
    
    // {console.log('EvenOnt:', id)};
    return (


            <div className="redCirce" onClick={() => myRedClick(id)} style={myStyle}>{text}</div>




    );
 }

 export default MyRedCircle;