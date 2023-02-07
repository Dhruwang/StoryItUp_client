import React,{useEffect,useState} from 'react'
import successIllustartion from "../images/ddemo.jpg"
import StoryCard from './StoryCard'


export default function Stories(props) {

    const [stories, setstories] = useState()
    const host = "https://storyitupbackend.onrender.com"

    const fetchStories=async()=>{
        console.log("hello")
        const response = await fetch(`${host}/story/fetchStories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
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
                        <img src={successIllustartion} alt="titleImage"></img>
                    </div>
                    {console.log(stories)}
                    <div className='storiesInnerBottom'>
                        <h4>ALL STORIES</h4>
                        <div className='searchAndFilters'>
                            <div className='storySearch'>
                                <input type="text" placeholder='Search Stories'></input>
                                <button className='btn'>Search</button>
                            </div>
                            <div className='categories'>
                                <select name="role" id="role" className=' categoryDropdown'>
                                    <option value="reader">All</option>
                                    <option value="startupOwner">Education</option>
                                    <option value="investor">Finance</option>
                                </select>
                            </div>
                        </div>

                        <div className='storiesContainer'>
                            {stories && stories.map((element)=>{
                                return <StoryCard name={element.name} description={element.description} image={element.imgLink}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
