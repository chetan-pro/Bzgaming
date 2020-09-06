import React from 'react';


const Card = (props) => {
    return (
       
            <div className="Card">
                <div className="stat">
    <h1>{props.Num}</h1>
    <p>{props.Title}</p>
                </div>
                </div>
      
    )
}

export default Card;