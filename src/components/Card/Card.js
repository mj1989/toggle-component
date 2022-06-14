import React from 'react';
import './Card.css'

function CardItem(props){
    return(
        <>
        <hr/>
        <p>{props.itemDesc}</p>
        </>
    )
}

export default function Card(props) {
    const listDescription = props.cardDescription.map((itemDesc, index) => {
        return <CardItem key={index} itemDesc={itemDesc} />
    })
  return (
    <div className={'card '+props.cardClass}>
          <h2>
            {props.cardName}
          </h2>
          <h1>
            <span className='text-small'>$</span>{props.cardValue}
          </h1>
          {listDescription}
          <hr/>
          <button>Learn More</button>
    </div>
  )
}
