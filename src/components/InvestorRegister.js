import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function InvestorRegister() {
    const Navigate = useNavigate();

    const [details, setdetails] = useState({ name: "", email: "", experience: "", profession: "", interest: "", description: "", imgLink: "", linkedin: "", twitter: "" })
    // const host = "http://localhost:8000" 
    const host = "https://storyitupbackend.onrender.com"


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (details.name === "" || details.description === "" || details.profession === "" || details.interest === "" || details.experience === "" || details.imgLink === "" || details.linkedin === "") {
            document.getElementById("InvestorMissingFieldAlert").style.display = "block"
            return
        }

        const response = await fetch(`${host}/investor/saveInvestor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: details.name,
                email: details.email,
                description: details.description,
                profession: details.profession,
                linkedin: details.linkedin,
                imgLink: details.imgLink,
                twitter: details.twitter,
                interest: details.interest,
                experience: details.experience
            })

        });
        if (response.ok === true) {
            // setdetails({ name: "", email: "", experience: "", profession: "", interest: "", description: "", imgLink: "", linkedin: "", twitter: "" })
            localStorage.removeItem("pending")
            Navigate("/")
        }


    }

    const handleOnChange = (event) => {
        setdetails({ ...details, [event.target.name]: event.target.value })
    }

    return (
        <div className="publish">
            <div className="vectorBackground publishMain">
                <div className="publishInner">
                    <div id="publishForm" >
                    <div className="investorRegisterCover">
                        <img src="https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
                    </div>

                    <p className="registerInvestorQuote">
                        "Invest in the future,<br></br>
                        Be a part of the next big thing,<br></br>
                        In our rapidly developing world,
                        where new businesses are founded every day, Stay ahead in the game
                        <br></br>
                        <span className="text-secondary">Invest now!!"</span>
                    </p>
                    <h1>
                        REGISTER YOURSELF AS AN{" "}
                        <span className="text-secondary">INVESTOR</span>
                    </h1>
                    <form className="storyForm" onSubmit={handleOnSubmit}>
                        <div className="storyFormElement">
                            <label>Full name *</label>
                            <input
                                type="text"
                                id="name"
                                value={details.name}
                                name="name"
                                className="storyFormInput"
                                placeholder="Please provide us with your full name"
                                onChange={handleOnChange}
                            ></input>
                        </div>
                        <div className="storyFormElement">
                            <label>Current Role *</label>
                            <input
                                type="text"
                                id="profession"
                                value={details.profession}
                                name="profession"
                                className="storyFormInput"
                                placeholder="ex : CEO at xyz"
                                onChange={handleOnChange}
                            ></input>
                        </div>
                        <div className="storyFormElement">
                            <label>Email*</label>
                            <input
                                type="email"
                                id="email"
                                value={details.email}
                                name="email"
                                className="storyFormInput"
                                placeholder="Please provide us with a valid email address"
                                onChange={handleOnChange}
                            ></input>
                        </div>
                        <div className="storyFormElement">
                            <label>Investment Experience*</label>
                            <textarea
                                type="text"
                                id="experience"
                                value={details.experience}
                                name="experience"
                                className="storyFormTextarea"
                                rows="5"
                                placeholder="Please describe your prior investments and your experience with them"
                                onChange={handleOnChange}
                            ></textarea>
                        </div>
                        <div className="storyFormElement">
                            <label>area Of Interest For Investment*</label>
                            <textarea
                                type="text"
                                id="interest"
                                value={details.interest}
                                name="interest"
                                className="storyFormTextarea"
                                rows="5"
                                placeholder="what kinds of startups are you interested in funding"
                                onChange={handleOnChange}
                            ></textarea>
                        </div>
                        <div className="storyFormElement">
                            <label>Description*</label>
                            <textarea
                                type="text"
                                id="description"
                                value={details.description}
                                name="description"
                                className="storyFormTextarea"
                                rows="5"
                                placeholder="whatever further information you would like to add as an investor"
                                onChange={handleOnChange}
                            ></textarea>
                        </div>
                        <div className="storyFormElement">
                            <label>Please Provide Your Profile Photo Link*</label>
                            <input type="text" id="imgLink" value={details.imgLink} name="imgLink" className="storyFormInput" onChange={handleOnChange}></input>
                        </div>
                        <div className="storyFormElement">
                            <label>LinkedIn Profile Link*</label>
                            <input
                                type="text"
                                id="linkedin"
                                value={details.linkedin}
                                name="linkedin"
                                className="storyFormInput"
                                placeholder="https://www.linkedin.com/startupName/"
                                onChange={handleOnChange}
                            ></input>
                        </div>
                        <div className="storyFormElement">
                            <label>Twitter Profile Link</label>
                            <input
                                type="text"
                                id="twitter"
                                value={details.twitter}
                                name="twitter"
                                className="storyFormInput"
                                placeholder="https://www.twitter.com/startupName/"
                                onChange={handleOnChange}
                            ></input>
                        </div>
                        <p id="InvestorMissingFieldAlert" className="text-red">Fields marked with * are compulsary to fill</p>
                        <button className="btn">Submit</button>
                    </form>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}