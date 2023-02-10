import React, { useEffect, useState } from 'react'
import successIllustartion from "../images/ddemo.jpg"
import StoryCard from './StoryCard'


export default function Stories(props) {

    const [stories, setstories] = useState()
    const host = "https://storyitupbackend.onrender.com" 
    // const host = "http://localhost:8000" 

    const fetchStories = async () => {
        const response = await fetch(`${host}/story/fetchStories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json()
        setstories(json)

    }
    async function handleSearch (){
        const response = await fetch(`${host}/story/searchStory`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({ search: document.getElementById("search").value })
        });
        const json = await response.json()
        setstories(json)
        
    }

    useEffect(() => {
        props.setProgress(100)
        fetchStories()
    }, [])

    return (
        <div className='stories'>
            <div className='vectorBackground storiesMain'>
                <div className='storiesInner'>
                    <div className='storiesInnerTop'>
                        <h1>"Explore the Stories Behind Thriving Startups and Chart Your Course to Entrepreneurial Success."</h1>
                        <img src={successIllustartion} alt="titleImage" className='imgTop'></img>
                    </div>
                    <div className='storiesInnerBottom'>
                        <h4>ALL STORIES</h4>
                        <div className='searchAndFilters'>
                            <div className='storySearch'>
                                <input type="text" placeholder='Search Stories' id='search' name="search" onChange={handleSearch}></input>
                                <button className='btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='storiesContainer '>
                            {stories && stories.map((element) => {

                                return <StoryCard name={element.name} description={element.description} image={element.imgLink} _id={element._id} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
