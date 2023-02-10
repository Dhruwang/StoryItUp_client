import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Publish(props) {

    const [details, setdetails] = useState({ name: "", description: "", sector: "", founders: "", year: "", story: "", funding: "", problem: "", solution: "", future: "", website: "", linkedin: "", imgLink: "" })
    const Navigate = useNavigate();
    const host = "https://storyitupbackend.onrender.com" 
    // const host = "http://localhost:8000" 
    useEffect(() => {
        props.setProgress(100)
        if(!localStorage.getItem("token")){
            document.getElementById("publishForm").style.display = "none"
        }
        else{
            document.getElementById("publishInnerAlt").style.display = "none"
        }
    }, [])

    const addProblem = (e) => {
        e.preventDefault();
        const problemsAndSolutionsInner = document.getElementById("problemsAndSolutionsInner")
        const problemSolClone = problemsAndSolutionsInner.cloneNode(true)
        problemSolClone.childNodes[0].childNodes[1].value = ""
        problemSolClone.childNodes[0].childNodes[3].value = ""
        problemsAndSolutionsInner.insertAdjacentElement("afterend", problemSolClone)
    }
    const handleOnSubmit = async (e) => {
        if(details.name===""||details.description===""||details.sector===""||details.founders===""||details.year===""||details.story===""||details.imgLink===""){
            document.getElementById("MissingFieldAlert").style.display = "block"
        }
        e.preventDefault();
        const response = await fetch(`${host}/story/publishStory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: details.name,
                description: details.description,
                sector: details.sector,
                founders: details.founders,
                year: details.year,
                story: details.story,
                funding: details.funding,
                problem: details.problem,
                solution: details.solution,
                website: details.website,
                linkedin: details.linkedin,
                imgLink:details.imgLink
            })

        });
        if(response.ok===true){
            setdetails({ name: "", description: "", sector: "", founders: "", year: "", story: "", funding: "", problem: "", solution: "", future: "", website: "", linkedin: "", imgLink: "" })
        }


    }
    const goToLogin =()=>{
        Navigate("/login")
    }
    const handleOnChange = (event) => {
        setdetails({ ...details, [event.target.name]: event.target.value })
    }
    return (
        <div className='publish'>
            <div className='vectorBackground publishMain'>
                <div className='publishInner'>
                    <div id='publishInnerAlt'>
                        <h1>Login to Publish Your own story</h1>
                        <button className='btn' onClick={goToLogin}>Login</button>
                    </div>
                    <div className='publishForm' id='publishForm'>
                    <h1>PUBLISH YOUR <span className='text-secondary'>STORY!</span></h1>
                    <form className='storyForm' onSubmit={handleOnSubmit}>
                        <div className='storyFormElement' >
                            <label>Startup Name*</label>
                            <input type="text" name='name' value={details.name} id='name' onChange={handleOnChange} className='storyFormInput'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>Short Description Of Your Startup*</label>
                            <textarea type="text" name='description' value={details.description} id='description' onChange={handleOnChange} className='storyFormTextarea' rows="5"></textarea>
                        </div>
                        <div className='storyFormElement'>
                            <label>Sector*</label>
                            <input type="text" name='sector' value={details.sector} id='sector' onChange={handleOnChange} className='storyFormInput'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>Year Founded*</label>
                            <input type="number" name='year' id='year' value={details.year} onChange={handleOnChange} className='storyFormInput'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>Funding</label>
                            <input type="text" id='funding' name='funding' value={details.funding} onChange={handleOnChange} className='storyFormInput'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>Founded by*</label>
                            <input type="text" name='founders' id="founders" value={details.founders} onChange={handleOnChange} className='storyFormInput'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>Startup's Journey*</label>
                            <textarea type="text" name='story' id='story' value={details.story} onChange={handleOnChange} className='storyFormTextarea' rows="15"></textarea>
                        </div>
                        <div className='problemsAndSolutions' id='problemsAndSolutions'>
                            <label>What Were The Problems Faced and how were they Solved ?*</label>
                            <div className='problemsAndSolutionsInner' id='problemsAndSolutionsInner'>
                                <div className='storyFormElement'>
                                    Problem :<textarea type="text" name='problem' value={details.problem} id='problem' onChange={handleOnChange} className='storyFormTextarea' rows="2"></textarea>
                                    Solution :<textarea type="text" name='solution' value={details.solution} id='solution' onChange={handleOnChange} className='storyFormTextarea' rows="5"></textarea>
                                </div>
                            </div>

                        </div>
                        <button className='btn-inverted' onClick={addProblem}>Add More +</button>
                        <div className='storyFormElement'>
                            <label>Future Plans</label>
                            <textarea type="text" name='future' id='future' className='storyFormTextarea' value={details.future} onChange={handleOnChange} rows="5"></textarea>
                        </div>
                        <div className='storyFormElement'>
                            <label>Website Link</label>
                            <input type="text" name='website' id='website' onChange={handleOnChange} className='storyFormInput' value={details.website} placeholder='https://www.xyz.com'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>LinkedIn profile link</label>
                            <input type="text" name='linkedin' id='linkedin' onChange={handleOnChange} className='storyFormInput' value={details.linkedin} placeholder='https://www.linkedin.com/startupName/'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>Cover Image Link</label>
                            <input type="text" name='imgLink' id='imgLink' onChange={handleOnChange} value={details.imgLink} className='storyFormInput'></input>
                        </div>
                        <p className='text-red' id='MissingFieldAlert'>All fields marked with * are compulsary</p>
                        <button className='btn'>Publish</button>
                    </form>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
