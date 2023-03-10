import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Storyfull(props) {
    const host = "https://storyitupbackend.onrender.com" 
    // const host = "http://localhost:8000"; 
    const Navigate = useNavigate();
    const [story, setstory] = useState()
    const [editable, seteditable] = useState("false")
    const [bookmark, setbookmark] = useState(false)
    let verify = ""



    const fetchStory=async()=>{
        const index = window.location.href.lastIndexOf("/")
        const id = window.location.href.slice(index+1,)
        const response = await fetch(`${host}/story/fetchStory?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json()
        setstory(json)

    }
    const handleEdit=()=>{
        seteditable("true")
        document.getElementById("storyEditBtn").style.display = "none"
        document.getElementById("storySaveBtn").style.display = "block"
    }
    const handleDelete=async()=>{
        const index = window.location.href.lastIndexOf("/")
        const id = window.location.href.slice(index+1,)
        const response = await fetch(`${host}/story/deleteStory?id=${id}&auth=${localStorage.getItem("token")}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response)
        if(response.ok===true){
            Navigate("/stories")
        }
    }
    const handleSave = async()=>{
        document.getElementById("storySaveBtn").style.display = "none"
        document.getElementById("storyEditBtn").style.display = "block"
        seteditable("false")
        const response = await fetch(`${host}/story/editStory?id=${story._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: document.getElementById("storyName").textContent,
                description: document.getElementById("storyDescription").textContent,
                sector: document.getElementById("storySector").textContent,
                founders: document.getElementById("storyFounder").textContent,
                year: document.getElementById("storyYear").textContent,
                story: document.getElementById("storyContent").textContent,
                funding: document.getElementById("storyFunding").textContent,
                problem: document.getElementById("storyProblem").textContent,
                solution: document.getElementById("storySolution").textContent,
                website: story.website,
                linkedin: story.linkedin,
                imgLink:story.imgLink
            })

        });
        
    }
    const handleVerify =async ()=>{
        if(story.verified===true){
            verify = false
        }
        else{
            verify = true;
        }
       
        const response = await fetch(`${host}/story/editVerify?id=${story._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                verified:verify
            })
        });
        if(response.ok){
            window.location.reload()
        }
        console.log(response.ok)
    }
    const handleBookMark=()=>{
        if(bookmark===false){
            setbookmark(true)
        }
        else{
            setbookmark(false)
        }
    }
    const checkPending=()=>{
        if(localStorage.getItem("pending")){
          Navigate("/investorRegister")
        }
      }

    useEffect(() => {
      fetchStory()
      checkPending();
    }, [])
    

    return (
        story && <div className='storyfull'>
            <div className='vectorBackground storiesMain'>
                <div className='storyfullInner'>
                    <div className='storyFullInnerTop'>
                        {localStorage.getItem("token") && props.decodeToken(localStorage.getItem("token")).role ==="admin" && <div className='storyEditIcons'>
                            <button className='btn' onClick={handleDelete}><i class="bi bi-trash"></i></button>
                            <button className='btn' onClick={handleEdit} id="storyEditBtn"><i class="bi bi-pen"></i></button> 
                            <button className='btn' onClick={handleSave} id="storySaveBtn"><i class="bi bi-save"></i></button> 
                            <button className='btn' onClick={handleVerify} id="storyVerifyBtn"><i class="bi bi-patch-check"></i></button> 
                            
                        </div>}
                    
                        <p>JOURNEY OF </p>
                        <div className='storyFullInnerTopMain'>
                            <h1 contentEditable={editable} id="storyName" >{story.name}{story.verified && <i class="bi bi-patch-check verified"></i>}</h1>
                            <p contentEditable={editable} id="storyDescription">{story.description}</p>
                        </div>
                        <div className='startupLinks'>
                            {story.linkedIn && <a href={story.linkedIn} target="_blank">
                                <i class="bi bi-linkedin"></i>
                            </a>}
                            {story.website && <a href={story.website} target="_blank">
                                <i class="bi bi-link"></i>
                            </a>}
                            <button className='storyBookmarkBtn' onClick={handleBookMark} id="storyBookmarkBtn"><i class={`bi bi-${bookmark?"bookmark-check-fill":"bookmark"}`}></i></button> 

                        </div>
                        <div className='storyFullInnerCover'>
                            <img src={story.imgLink}></img>
                        </div>
                        <div className='startupStoryDiv'>
                            <h3>Our Story</h3>
                            <p contentEditable={editable} id="storyContent">
                               {story.story}
                            </p>
                        </div>
                        <div className='factSheetDiv'>
                            <h3>Factsheet</h3>
                            {story.sector && <div className='factSheetInner'>
                                <label>Sector</label>
                                <p contentEditable={editable} id="storySector">{story.sector}</p>
                            </div>}
                            {story.funding && <div className='factSheetInner'>
                                <label>Funding</label>
                                <p contentEditable={editable} id="storyFunding">{story.funding}</p>
                            </div>}
                            {story.year_established && <div className='factSheetInner'>
                                <label>Year Established</label>
                                <p contentEditable={editable} id="storyYear">{story.year_established}</p>
                            </div>}
                            {story.founders && <div className='factSheetInner'>
                                <label>Founders</label>
                                <p contentEditable={editable} id="storyFounder">{story.founders[0]}</p>
                            </div>}
                        </div>
                        {story.problems && <div className='problemSolutionDiv'>
                            <h3>Problems Faced</h3>
                            <p className='problemP' contentEditable={editable} id="storyProblem">{story.problems}</p>
                            <p className='solutionP' contentEditable={editable} id="storySolution">{story.solution}</p>
                        </div>}
                    </div>
                <Footer />
                </div>
            </div>
        </div>
    )
}
