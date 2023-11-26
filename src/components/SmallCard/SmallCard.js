import React from 'react'
import './SmallCard.css'

export default function SmallCard(props) {
  return (
    <div className='outer-card-container'>
      <div className='outer-card-container2'>
        <div className='inner-circular-card-container'>
          <h2 className='circular-cards-title'>{props.title}</h2>
          <div className='circular-cards-images scroll'>
            {props.data.map((each)=>{
              return <a href={each.href} key={each.key}><img src={each.src} alt={each.alt} /></a>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
