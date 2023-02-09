import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function SideNavbar() {
  const Navigate = useNavigate();
  const handleResponsiveNavbar = ()=>{
    const sideNavbar = document.getElementById("sideNavbar");
    if(sideNavbar.style.left==="100vw"){
        sideNavbar.style.left="0vw"
        return
    }
    else{
        sideNavbar.style.left="100vw" 
    }
    
}
const handleLogOut = () => {
  handleResponsiveNavbar()
  localStorage.removeItem('token')
  Navigate("/login")
}

  return (
    <div className='sideNavbar' id='sideNavbar' style={{left:"100vw"}}>
      <button className='navbarBtn'onClick={handleResponsiveNavbar}>
        <i class="bi bi-x cross"></i>
      </button>
      <div className='sideNavbarInner'>
        <ul>
          <li><Link to="/" onClick={handleResponsiveNavbar}>Home</Link></li>
          <li><Link to="/stories" onClick={handleResponsiveNavbar}>Stories</Link></li>
          <li><Link to="/publish" onClick={handleResponsiveNavbar}>Publish</Link></li>
          <li><Link to="/investor" onClick={handleResponsiveNavbar}>Investor</Link></li>
          <li><Link to="/about" onClick={handleResponsiveNavbar}>About</Link></li>

          {!localStorage.getItem("token") && <li><Link to="/login" onClick={handleResponsiveNavbar}>Login</Link></li>}
          {localStorage.getItem("token") && <li><button className='sideNavBarBtn' id='sideNavBarBtn' onClick={handleLogOut}>Logout</button></li>}
        </ul>
      </div>
    </div>
  )
}
