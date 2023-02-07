import React from 'react'

export default function Publish() {
    const addProblem = (e) => {
        e.preventDefault();
        const problemsAndSolutionsInner = document.getElementById("problemsAndSolutionsInner")
        const problemSolClone = problemsAndSolutionsInner.cloneNode(true)
        problemSolClone.childNodes[0].childNodes[1].value=""
        problemSolClone.childNodes[0].childNodes[3].value=""
        problemsAndSolutionsInner.insertAdjacentElement("afterend", problemSolClone)
    }
    return (
        <div className='publish'>
            <div className='vectorBackground publishMain'>
                <div className='publishInner'>
                    <h1>PUBLISH YOUR <span className='text-secondary'>STORY!</span></h1>
                    <form className='storyForm'>
                        <div className='storyFormElement'>
                            <label>Startup Name*</label>
                            <input type="text" className='storyFormInput'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>Short Description Of Your Startup*</label>
                            <textarea type="text" className='storyFormTextarea' rows="5"></textarea>
                        </div>
                        <div className='storyFormElement'>
                            <label>Sector*</label>
                            <select name="role" id="sector" className='storyFormInput sectorDropdown' >
                                <option value="reader">Reader</option>
                                <option value="startupOwner">Startup Owner</option>
                                <option value="investor">Investor</option>
                            </select>
                        </div>
                        <div className='storyFormElement'>
                            <label>Year Founded*</label>
                            <input type="number" className='storyFormInput'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>Funding</label>
                            <input type="text" className='storyFormInput'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>Founded by*</label>
                            <input type="text" className='storyFormInput'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>Startup's Journey*</label>
                            <textarea type="text" className='storyFormTextarea' rows="15"></textarea>
                        </div>
                        <div className='problemsAndSolutions' id='problemsAndSolutions'>
                            <label>What Were The Problems Faced and how were they Solved ?*</label>
                            <div className='problemsAndSolutionsInner' id='problemsAndSolutionsInner'>
                                <div className='storyFormElement'>
                                    Problem :<textarea type="text" className='storyFormTextarea' rows="2"></textarea>
                                    Solution :<textarea type="text" className='storyFormTextarea' rows="5"></textarea>
                                </div>
                            </div>

                        </div>
                        <button className='btn-inverted' onClick={addProblem}>Add More +</button>
                        <div className='storyFormElement'>
                            <label>Future Plans</label>
                            <textarea type="text" className='storyFormTextarea' rows="5"></textarea>
                        </div>
                        <div className='storyFormElement'>
                            <label>Website Link</label>
                            <input type="text" className='storyFormInput' placeholder='https://www.xyz.com'></input>
                        </div>
                        <div className='storyFormElement'>
                            <label>LinkedIn profile link</label>
                            <input type="text" className='storyFormInput' placeholder='https://www.linkedin.com/startupName/'></input>
                        </div>
                        <button className='btn'>Publish</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
