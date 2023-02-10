import React from 'react'
import logo from "../images/logo.png"

export default function Footer() {
  return (
    <div>
        <div className="end">
            <div className="end1">
            <img id='logo' src={logo} alt="logo"></img>
            <br /><br />
            <h3>
                Thank you for visiting Story
                <span className="text-secondary">It</span>Up. We look forward to
                featuring your startup story and helping you reach new heights.
            </h3>
            </div>
            <br />
            <hr />
            <br />
            <div className="end2">
                <h3>
                © Copyright 2023 StoryItUp | All rights reserved
                </h3>
            </div>
          </div>
    </div>
  )
}
