import React from 'react';
import './Section2.css';
const Section2 = () => {
  return (
    <div className='container' id='sec2'>
    <div className='col-md-8' id='secw2'>
    <h2>We make everything by hand with the best possible ingredients.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus 
    bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains,
     far from the countries Vokalia and Consonantia, there live the blind texts.</p>
     <span> <i class="fa-solid fa-check"></i> Etiam sed dolor ac diam volutpat.</span>
     <span> <i class="fa-solid fa-check"></i> Erat volutpat aliquet imperdiet.</span>
     <span> <i class="fa-solid fa-check"></i> purus a odio finibus bibendum.</span>
     <button>Learn More</button>
    </div>
    <div className='col-md-4'>
    <img src={require("../Photos/2.png")} alt='logo'/>
    </div>
    </div>
  )
}

export default Section2