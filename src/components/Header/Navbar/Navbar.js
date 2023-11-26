import React from 'react';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
    {/* Amazon logo */}
        <div className='navbar-amazon-logo border'>
          <img src={process.env.PUBLIC_URL + '/images/logo/amazon-logo.svg'} alt="Amazon Logo" className='navbar-amazon-logo-img' />
        </div>
        {/* Location */}
        <div className='navbar-location border'>
          <FmdGoodOutlinedIcon fontSize='small' sx={{color : 'white'}} className='navbar-location-logo'/>
          <div className='navbar-loaction-address'>
            <span className='navbar-location-firstSpan'>Deliver to</span>
            <span className='navbar-bold-text' style={{padding : 0}}>India</span>
          </div>
        </div>
        {/* Search-Box */}
        <div className='navbar-search'>
          <select className='navbar-search-category'>
            <option selected>All</option>
            <option >Arts & Crafts</option>
            <option >Automotive</option>
            <option >Baby</option>
            <option >Beauty & Personal Care</option>
            <option >Books</option>
            <option >Boys' Fashion</option>
            <option >Computers</option>
            <option >Deals</option>
            <option >Digital Music</option>
            <option >Electronics</option>
            <option >Girls' Fashion</option>
            <option >Health & Household</option>
            <option >Home & Kitchen</option>
            <option >Industrial & Scientific</option>
            <option >Kindle & Store</option>
            <option >Luggage</option>
            <option >Men's Fashion</option>
            <option >Movies & TV</option>
            <option >Music, CDs & Vinyl</option>
            <option >Pet Supplies</option>
            <option >Prime Video</option>
            <option >Software</option>
            <option >Sports & Outdoors</option>
            <option >Tools & Home Improvement</option>
            <option >Toys & Games</option>
            <option >Video Games</option>
            <option >Women's Fashion</option>
          </select>
          <input type='text' placeholder='Search Amazon' className='navbar-search-box'></input>
          <div className='navbar-search-icon'>
            <SearchOutlinedIcon sx={{fontSize : '30px'}}/>
          </div>
        </div>
        {/* Language selector */}
        <div className='navbar-language border'>
          <img src={process.env.PUBLIC_URL + '/images/logo/US_flag.svg'} alt="US English Language" className='navbar-US-flag-logo-img' />
          <select className='navbar-language-select'>
            <option>EN</option>
          </select>
        </div>
        {/* Sign In */}
        <div className='navbar-accounts border'>
          <span className='navbar-light-text'>Hello, sign in</span>
          <select className='navbar-accounts-select'>
            <option className='navbar-bold-text'>Accounts & Lists</option>
          </select>
        </div>
        {/* Orders */}
        <div className='navbar-orders border'>
          <span className='navbar-light-text'>Returns</span>
          <span className='navbar-bold-text'>& Orders</span>
        </div>
        {/* Cart */}
        <div className='navbar-cart border'>
          <ShoppingCartOutlinedIcon sx={{color : 'white', fontSize : '38px', padding : 0}}/>
          <span className='navbar-bold-text'>Cart</span>
        </div>
    </div>
  );
}
