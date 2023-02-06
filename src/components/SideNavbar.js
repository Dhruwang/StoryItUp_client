import React from 'react'

export default function SideNavbar() {
  const handleResponsiveNavbar = ()=>{
    const sideNavbar = document.getElementById("sideNavbar");
    if(sideNavbar.style.left==="100vw"){
        sideNavbar.style.left="0vw"
    }
    else{
        sideNavbar.style.left="100vw" 
    }
}
  return (
    <div className='sideNavbar' id='sideNavbar'>
      <button className='navbarBtn'onClick={handleResponsiveNavbar}>
        <i class="bi bi-x cross"></i>
      </button>
      <div className='sideNavbarInner'>
        <ul>
          <li>Home</li>
          <li>Stories</li>
          <li>Investors</li>
          <li>About</li>
          <li>Login/Signup</li>
        </ul>
      </div>
    </div>
  )
}
