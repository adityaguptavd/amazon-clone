import React from 'react'
import './PriceCard.css'

export default function PriceCard(props) {
  return (
    <a className='card-container' href={props.data.href}>
      <img className='price-card-image' src={props.data.src} alt={props.data.alt} style={{width : props.data.width}} />
      <div className='discount-tag'>
        <span className='discount'>{props.data.discount}% off</span>
        <span className='discount-scheme'>{props.data.scheme}</span>
      </div>
      <div className='price-tag'>
        <span className='currency'>$</span>
        <span className='price'>{props.data.price}</span>
        <span className='list-price'>List Price:</span>
        <span className='original-price'>{props.data.listprice}</span>
      </div>
      <span className='price-card-footer'>{props.data.footer}</span>
    </a>
  )
}
