import React from 'react'
import {useNavigate, Link} from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
  return (
    <>

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{'color':'white', 'fontSize':'28px'}}><strong>SymbiAnatomy.</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/" style={{'color':'white','fontSize':'20px'}}>Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{'color':'white','fontSize':'20px'}}>Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{'color':'white','fontSize':'20px'}}>Contact</a>
        </li>

        
        <li class="nav-item dropdown">
          <a style={{'color':'white','fontSize':'20px'}} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Learning
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to='/SquamousEpithelium'  style={{'color':'rgb(205, 117, 117)', "cursor":"pointer",'fontSize':'20px'}}>Squamous Epithelium</Link></li>
            <li><Link class="dropdown-item" to='/Thyroid'  style={{'color':'rgb(205, 117, 117)', "cursor":"pointer",'fontSize':'20px'}}>Thyroid</Link></li>
            <li className="dropdown-submenu">
                  <a class="dropdown-item"  style={{'color':'rgb(205, 117, 117)', "cursor":"pointer",'fontSize':'20px'}}>Kidney</a>
                  <ul className="dropdown-menu" >
                    <li ><a class="dropdown-item" href="/Medulla" style={{'color':'rgb(205, 117, 117)', "cursor":"pointer",'fontSize':'20px'}}>Medulla</a></li>
                    <li><a class="dropdown-item" href="/Cortex" style={{'color':'rgb(205, 117, 117)', "cursor":"pointer",'fontSize':'20px'}}>Cortex</a></li>
                  </ul>
          </li>
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