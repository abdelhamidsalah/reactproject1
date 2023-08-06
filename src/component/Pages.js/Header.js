import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <header>
    <div className='container'>
    <div className='col-md-6' id='word'>
    <h2>Good food choices are good investments.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
    <button id='btn1'>Order Now <i class="fa-solid fa-cart-shopping"></i></button>
    <button id='btn2'>Learn More <i class="fa-thin fa-chevron-right"></i></button>
    </div>

    <div className='col-md-6'>
    
    </div>
    </div>
    </header>
  )
}

export default Header