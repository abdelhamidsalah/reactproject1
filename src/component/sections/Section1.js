import React from 'react';
import './Section1.css';
const Section1 = () => {
  return (
    <div className='container' id='sec1'>
    <div className='col-md-8 '>
    <img src={require("../Photos/1.png")} alt='logo'/>
    </div>
    <div className='col-md-4  ' id='secw1'>
    <h2>We provide ourselves on making real food from the best ingredients.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
    <button>Learn More</button>
    </div>
    </div>
  )
}

export default Section1