import React from "react";
import './card-list.style.css';
import Card  from '../card/card.component';

const CardList = props =>(
    
     <div className='card-list'> 
      {
        props.robots.map(robot =>( 
         <Card key = {robot.id} robots={robot }/>))
       }
     </div>
);
export default CardList;
