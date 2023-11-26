import React from 'react'
import './ClientCardSection.css'
import Card from './Card/Card.js'

export default function ClientCardSection(props) {
  return (
    <div className='outer-card-container'>
      <div className='inner-card-container'>
        {props.data.map((each)=>{
          return <Card key = {each.key}
                  data = {each}
            /> 
        })}
      </div>
    </div>
  )
}
