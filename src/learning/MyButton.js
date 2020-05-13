import React from 'react';

import './MyButton.css';



const MyButton = ({text, myClick}) => {
    // const { text } = props;
    return (
        <button onClick={myClick}>{ text }</button>
        );
  }


  

export default MyButton;