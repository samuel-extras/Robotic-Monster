import React from 'react';

import './card.style.css';



const Card = (props)=>(
    <div className ='card-container'>
     <img alt='monster' 
     src={`https://robohash.org/${props.robots.id}?set=set2&size=180x180`}/>
     <h2 >{props.robots.name} </h2>
     <p>{props.robots.email}</p>
    </div>
);
export default Card;