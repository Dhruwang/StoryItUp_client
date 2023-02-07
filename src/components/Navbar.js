import React from 'react'
import logo from "../images/logo.png"
import { Link,useNavigate } from 'react-router-dom';

export default function Navbar() {
    const Navigate = useNavigate();
    const handleResponsiveNavbar = ()=>{
        const sideNavbar = document.getElementById("sideNavbar");
        if(sideNavbar.style.left==="100vw"){
            sideNavbar.style.left="0vw"
        }
        else{
            sideNavbar.style.left="100vw" 
        }
    }
    const handleLogOut = () => {
        localStorage.removeItem('token')
        Navigate("/login")
      }

      const handleLogin = () => {
        Navigate("/login")
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
                        <li><Link to="/stories">Stories</Link></li>
                        <li>Investors</li>
                        <li>About</li>
                       <li>{ !localStorage.getItem("token")&& <button className='btn' onClick={handleLogin} >Login</button>}
                       { localStorage.getItem("token")&& <button className='btn' onClick={handleLogOut}>Logout</button>}</li>

                    </ul>
                    <button className='navbarBtn' onClick={handleResponsiveNavbar}>
                        <i class="bi bi-list-nested hamburgerIcon"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
