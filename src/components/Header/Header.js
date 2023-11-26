import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'

export default function Header() {
  return (
    <>
      <Navbar />
      <div className='sub-navbar'>
        <div className='sub-navbar-hamburger border'>
          <div className='sub-navbar-hamburger-icon'>
            <span className='hamburger-line'></span>
            <span className='hamburger-line'></span>
            <span className='hamburger-line'></span>
          </div>
          <span className='sub-navbar-bold-text'>All</span>
        </div>
        <span className='sub-navbar-light-text border'>Today's Deals</span>
        <span className='sub-navbar-light-text border'>Registry</span>
        <span className='sub-navbar-light-text border'>Customer Service</span>
        <span className='sub-navbar-light-text border'>Gift Cards</span>
        <span className='sub-navbar-light-text border'>Sell</span>
        <span className='sub-navbar-bold-text border' style={{marginLeft : 'auto', marginRight : '10px'}}>Shop Black Friday deals</span>
      </div>
    </>
  )
}
