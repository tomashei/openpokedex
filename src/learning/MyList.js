import React from 'react';
import MyRedCircle from './MyRedCircle';

const MyList = ({myRedClick, myRadius}) => {


    const testCompoenent = myRadius.map((myRadius, i) => {      
        return (
             <MyRedCircle key={i} id={i} myRedClick={myRedClick} myRadius={myRadius} text={myRadius} />
        );
    });


    

    return (
        <div>
           {testCompoenent}
        </div>

    );
}

export default MyList;
