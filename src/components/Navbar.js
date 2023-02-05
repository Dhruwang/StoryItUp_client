import React from 'react'
import logo from "../images/logo.png"

export default function Navbar() {
    const showResponsiveNavbar = ()=>{
        const sideNavbar = document.getElementById("sideNavbar")
        if(sideNavbar.style.left === "100vw"){
            sideNavbar.style.left = 0;
        }
        else{
            sideNavbar.style.left = "100vw";
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
                        <li>Home</li>
                        <li>Stories</li>
                        <li>Investors</li>
                        <li>About</li>
                        <li>Login/Signup</li>
                    </ul>
                    <button onClick={showResponsiveNavbar} className="navbarBtn">
                        <i class="bi bi-list-nested hamburgerIcon"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
