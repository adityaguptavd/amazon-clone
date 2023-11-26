import React from 'react'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import './Footer.css'

export default function Footer() {

    function handleCLick(){
        document.getElementById('top').scrollIntoView();
    }

  return (
    <div className='footer'>
      <div className='footer-sign-in'>
        <span className='footer-sign-in-span1'>See personalized recommendations</span>
        <a href='https://www.amazon.com/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Drhf_sign_in&openid.assoc_handle=usflex&openid.pape.max_auth_age=0'><button className='footer-sign-in-btn'>Sign in</button></a>
        <span className='footer-sign-in-span2'>New customer?<a href='https://www.amazon.com/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Drhf_sign_in&openid.assoc_handle=usflex'>Start here</a></span>
      </div>
      <button className='back-to-top-btn' onClick={handleCLick}>Back to top</button>
      <div className='footer-about'>
        <div className='footer-about-card'>
            <h3>Get to know us</h3>
            <p>Careers</p>
            <p>Blog</p>
            <p>About Amazon</p>
            <p>Investor Relations</p>
            <p>Amazon Devices</p>
            <p>Amazon Science</p>
        </div>
        <div className='footer-about-card'>
            <h3>Make Money with Us</h3>
            <p>Sell Products on Amazon</p>
            <p>Sell on Amazon Business</p>
            <p>Sell apps on Amazon</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
            <p>Host an Amazon Hub</p>
        </div>
        <div className='footer-about-card'>
            <h3>Amazon Payment Products</h3>
            <p>Amazon Business Card</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency Converter</p>
        </div>
        <div className='footer-about-card' style={{width : "140px"}}>
            <h3>Let Us Help You</h3>
            <p>Amazon and COVID-19</p>
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Shipping Rates & Policies</p>
            <p>Returns & Replacements</p>
            <p>Manage Your Content and Devices</p>
            <p>Amazon Assistant</p>
            <p>Help</p>
        </div>
      </div>
      <div className='footer-language-container'>
        <img src={process.env.PUBLIC_URL + '/images/logo/amazon-logo.svg'} alt="Amazon Logo" className='footer-amazon-logo-img' />
        <div className='footer-div footer-lang'>
        <LanguageOutlinedIcon fontSize='small' sx={{color : '#fff'}}/>
        <span>English</span>
        </div>
        <div className='footer-div'>$ USD - U.S. Dollar</div>
        <div className='footer-div'>United States</div>
      </div>
    </div>
  )
}
