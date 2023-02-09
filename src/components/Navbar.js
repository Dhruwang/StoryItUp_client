import React,{useEffect} from 'react'
import logo from "../images/logo.png"
import { Link,useNavigate,useLocation } from 'react-router-dom';

export default function Navbar(props) {
    const Navigate = useNavigate();
    let location = useLocation();
    let role = ""
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

      const checkRole =()=>{
        if(localStorage.getItem("token")){
            role = props.decodeToken(localStorage.getItem("token")).role
        }
        if(role==="investor"){
            // document.getElementById("investors").style.display = "none" 
        }
      }
      useEffect(() => {
        checkRole()
      }, [])
      

    
    return (
        <div className='navbar'>
            <div className='navbarInner'>
                <div className='navbarInnerLeft'>
                    <Link to="/"><img id='logo' src={logo} alt="logo"></img></Link>
                </div>
                <div className='navbarInnerRight'>
                    <ul className='navbarList'>
                        <li id='home'><Link to="/">Home</Link></li>
                        <li id="stories"><Link to="/stories">Stories</Link></li>
                        <li id='publish'><Link to="/publish">Publish</Link></li>
                        <li id='investors'><Link to="/investor">Investors</Link></li>
                        <li id='about'>About</li>
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
