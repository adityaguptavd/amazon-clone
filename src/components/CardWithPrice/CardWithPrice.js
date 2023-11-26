import React from 'react'
import './CardWithPrice.css'
import PriceCard from './PriceCard/PriceCard'

export default function CardWithPrice(props) {
  return (
    <div className='outer-card-container'>
      <div className='outer-card-container2'>
        <div className='inner-price-card-container'>
          <div className='card-title'>
            <h2>{props.title}</h2>
            <a href='https://www.amazon.com/gp/goldbox/?ie=UTF8&deals-widget=%257B%2522presetId%2522%3A%2522deals-collection-lightning-deals%2522%257D&ref_=dlx_gate_sd_dcl_vai_dt_pd_gw_unk&pd_rd_w=T2JQq&content-id=amzn1.sym.2ed7d12d-4886-42ac-ae8f-d4dd936eb1e6&pf_rd_p=2ed7d12d-4886-42ac-ae8f-d4dd936eb1e6&pf_rd_r=WS970J2986YYT18CBTK9&pd_rd_wg=9U7qI&pd_rd_r=5993c70b-074a-4f20-8ce2-d86b73ccb0c5'>See all deals</a>
          </div>
          <div className='price-card-container scroll'>
            {props.data.map(each => {
              return <PriceCard key={each.key} data={each}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
