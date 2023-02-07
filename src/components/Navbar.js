import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';

export default function Navbar() {
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
        <div className='navbar'>
            <div className='navbarInner'>
                <div className='navbarInnerLeft'>
                    <img id='logo' src={logo} alt="logo"></img>
                </div>
                <div className='navbarInnerRight'>
                    <ul className='navbarList'>
                        <li><Link to="/">Home</Link></li>
                        <li>Stories</li>
                        <li>Investors</li>
                        <li>About</li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    <button className='navbarBtn' onClick={handleResponsiveNavbar}>
                        <i class="bi bi-list-nested hamburgerIcon"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
