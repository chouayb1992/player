import React from 'react';
import {Card} from 'react-bootstrap/';
// import {players} from './players';



 export const Group =({player})=>{

 const {image, name, team, nationality, jerseyNumber, age} = player;
    
 return(

     <div style={{display : "flex" , justifyContent :"space-around"}}> 
       
              <Card  style={{ width: '18rem' }}>
              <Card.Img variant="top"  src={image}  alt={name} />
              <Card.Body>
              <p>Name:{name}</p> 
              <p>Team:{team} </p>
              <p>Nationality:{nationality} </p>
              <p>Number:{jerseyNumber} </p>
              <p>Age: {age}</p>
              </Card.Body>
            </Card>
      
    </div>
    
        
    )}

 export default Player;