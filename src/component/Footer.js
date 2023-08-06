import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div id='footer'>
    <div id='lin'>
    <a href='/'>Register</a>
    <a href='/'>Forum</a>
    <a href='/'>Affiliate</a>
    <a href='/'>FAQ</a>
    </div>

    <div id='icons'>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-youtube"></i>
    <i class="fa-solid fa-earth-americas"></i>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-instagram"></i>
    </div>

    <p>© 2021. Foodera. All rights reserved.</p>
    </div>
  )
}

export default Footer