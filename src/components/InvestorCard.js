import React from 'react'
import test from "../images/test2.jpg"

export default function InvestorCard() {
    const goUp = ()=>{
        document.getElementById("investorCardInner").style.transform = "translateY(-50%)"
    }
    const goDown = ()=>{
        document.getElementById("investorCardInner").style.transform = "translateY(0%)"
    }
    return (
        <div className='investorCard'>
            <div className='investorCardInner' id='investorCardInner'>
                <div className='investorCardSection1'>
                    <div className='investorImage'>
                        <img src={test}></img>
                    </div>
                    <div className='investorInfo'>
                        <h4>Dhruwang Jariwala</h4>
                        <p>CEO at StoryItUp</p>
                        <div className='investorLinks'>
                        <a href='mailto:dhruwangjariwala18@gmail.com' id='mailIcon'><i class="bi bi-envelope" ></i></a>
                        <i class="bi bi-linkedin"></i>
                        <i class="bi bi-twitter"></i>
                        </div>
                    </div>
                    <div className='investorInterestDiv'>
                        <h4>Interests</h4>
                        <div className='investorInterest'>
                            <span>Education</span>
                            <span>Finance</span>
                        </div>
                    </div>
                </div>
                <div className='cardToggle1'>
                    <button className='cardToggleBtn ' onClick={goUp}>Read More</button>
                </div>
                <div className='cardToggle2'>
                    <button className='cardToggleBtn ' onClick={goDown}>Read Less</button>
                </div>
                <div className='investorCardSection1'>
                    <div className='investorBio'>
                        <h4>About</h4>
                        <p>I am a star investor and i am extremely rich. I usually invest in real estate and tech</p>
                    </div>
                    <div className='investorPast'>
                        <h4>Past Investments</h4>
                        <p>Investor at Google</p>
                        <p>Investor at Facebook</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
