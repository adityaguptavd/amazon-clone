import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div className='card'>
        <h2 className='card-title'>{props.data.title}</h2>
        <a  className='card-image-a' href={props.data.href}><img src={props.data.src} alt={props.data.alt} className='card-image'/></a>
        <a className='card-footer' href={props.data.href}>{props.data.footer}</a>
    </div>
  )
}
