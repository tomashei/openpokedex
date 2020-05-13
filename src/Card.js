import React from 'react';

const Card = (props) => {  //can also work as: const Card = ({ name, email, id }) => { 
    const { name, email, id } = props; //allow not to use props.name, props.email, props.id
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='card' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;