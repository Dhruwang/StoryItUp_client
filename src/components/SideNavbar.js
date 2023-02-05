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
        </div>
    )
}
