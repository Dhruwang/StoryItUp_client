import React from 'react'

export default function SideNavbar() {
    const showResponsiveNavbar = () => {
        const sideNavbar = document.getElementById("sideNavbar")
        if (sideNavbar.style.left === "100vw") {
            sideNavbar.style.left = 0;
        }
        else {
            sideNavbar.style.left = "100vw";
        }
    }
    return (
        <div className='sideNavbar' id='sideNavbar'>
            <button onClick={showResponsiveNavbar} className="navbarBtn">
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
