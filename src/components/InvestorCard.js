import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function InvestorCard(props) {
    const Navigate = useNavigate();
    const goUp = ()=>{
        document.getElementById(`investorCardInner${props.index}`).style.transform = "translateY(-50%)"
    }
    const goDown = ()=>{
        document.getElementById(`investorCardInner${props.index}`).style.transform = "translateY(0%)"
    }
    function decodeToken(token) {
        var ca = token;
        var base64Url = ca.split('.')[1];
        var decodedValue = JSON.parse(window.atob(base64Url));
        return decodedValue.user
    }
    
    const message=()=>{
        Navigate(`/chat/${props.details.id}${decodeToken(localStorage.getItem("token")).id}`)
    }
    const{name,description,interest,email,imgLink,profession,linkedIn,twitter,experience} = props.details
    return (
        <div className='investorCard'>
            <div className='investorCardInner' id={`investorCardInner${props.index}`}>
                <div className='investorCardSection1'>
                    <div className='investorImage'>
                        <img src={imgLink}></img>
                    </div>
                    <div className='investorInfo'>
                        <h4 className='text-secondary'>{name}</h4>
                        <p>{profession}</p>
                        <div className='investorLinks'>
                        <a href={`mailto:${email}`} id='mailIcon'><i class="bi bi-envelope" ></i></a>
                        <a href={linkedIn}><i class="bi bi-linkedin"></i></a>
                        <a href={twitter}><i class="bi bi-twitter"></i></a>
                        {localStorage.getItem("token")&&<button onClick={message} className="messageBtn">Message</button>}
                        </div>
                    </div>
                    <div className='investorInterestDiv'>
                        <h4>Interests</h4>
                        <div className='investorInterest'>
                            <span>{interest}</span>
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
                        <p>{description}</p>
                    </div>
                    <div className='investorPast'>
                        <h4>Past Investments</h4>
                        <p>{experience}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
