import React from 'react'
import './Navs.css';
const Navs = () => {
  return (
    <div id='nnvv' className='container'>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
    <img src={require("../Photos/logo.png")} alt='logo'></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" className="ml-auto">
      <ul class="navbar-nav" id='nnn'>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Explore Foods</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true" href='/'>Reviews</a>
        </li>
        <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true" href='/'>FAQ</a>
      </li>
      <button id='btn'>1800 789 123</button>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navs