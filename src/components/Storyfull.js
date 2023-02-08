import React,{useEffect,useState} from 'react'
import test from "../images/test.jpg"

export default function Storyfull() {
    const host = "http://localhost:8000"
    const [story, setstory] = useState()


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

    useEffect(() => {
      fetchStory()
    }, [])
    

    return (
        story && <div className='storyfull'>
            <div className='vectorBackground storiesMain'>
                <div className='storyfullInner'>
                    {console.log(story)}
                    <div className='storyFullInnerTop'>
                        <p>JOURNEY OF </p>
                        <div className='storyFullInnerTopMain'>
                            <h1>{story.name}</h1>
                            <p>{story.description}</p>
                        </div>
                        <div className='startupLinks'>
                            {story.linkedIn && <a href={story.linkedIn} target="_blank">
                                <i class="bi bi-linkedin"></i>
                            </a>}
                            {story.website && <a href={story.website} target="_blank">
                                <i class="bi bi-link"></i>
                            </a>}
                        </div>
                        <div className='storyFullInnerCover'>
                            <img src={story.imgLink}></img>
                        </div>
                        <div className='startupStoryDiv'>
                            <h3>Our Story</h3>
                            <p>
                               {story.story}
                            </p>
                        </div>
                        <div className='factSheetDiv'>
                            <h3>Factsheet</h3>
                            {story.sector && <div className='factSheetInner'>
                                <label>Sector</label>
                                <p>{story.sector}</p>
                            </div>}
                            {story.funding && <div className='factSheetInner'>
                                <label>Funding</label>
                                <p>{story.funding}</p>
                            </div>}
                            {story.year_established && <div className='factSheetInner'>
                                <label>Year Established</label>
                                <p>{story.year_established}</p>
                            </div>}
                            {story.founders && <div className='factSheetInner'>
                                <label>Founders</label>
                                <p>{story.founders[0]}</p>
                            </div>}
                        </div>
                        {story.problems && <div className='problemSolutionDiv'>
                            <h3>Problems Faced</h3>
                            <p className='problemP'>{story.problems}</p>
                            <p className='solutionP'>{story.solution}</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
