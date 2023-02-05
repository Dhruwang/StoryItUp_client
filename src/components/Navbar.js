import React from 'react'
import logo from "../images/logo.png"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbarInner'>
            <div className='navbarInnerLeft'>
                <img id='logo' src={logo}></img>
            </div>
            <div className='navbarInnerRight'>
                <ul className='navbarList'>
                    <li>Home</li>
                    <li>Stories</li>
                    <li>Investors</li>
                    <li>About</li>
                    <li>Login/Signup</li>
                </ul>
                <i class="bi bi-list-nested hamburgerIcon"></i>
            </div>
            
        </div>
    </div>
  )
}
