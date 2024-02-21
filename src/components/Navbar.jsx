import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
  return (
    <>

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{'color':'white', 'padding':'17px 170px'}}><strong>SymbiAnatomy.</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{'color':'white'}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{'color':'white'}}>Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{'color':'white'}}>Contact</a>
        </li>
        <li class="nav-item dropdown">
          <a style={{'color':'white'}} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Learning
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" onClick={() => navigate('SquamousEpithelium')} style={{'color':'rgb(205, 117, 117)', "cursor":"pointer"}}>Squamous Epithelium</a></li>
            <li><a class="dropdown-item" onClick={() => navigate('Thyroid')} style={{'color':'rgb(205, 117, 117)', "cursor":"pointer"}}>Thyroid</a></li>
            {/* <li><a class="dropdown-item" href="#" style={{'color':'white'}}>Something else here</a></li> */}
          </ul>
        </li>

      </ul>
    </div>

  </div>
</nav>
        
    </>
  )
}

export default Navbar