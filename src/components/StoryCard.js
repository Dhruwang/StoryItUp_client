import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StoryCard(props) {

    const Navigate = useNavigate();

    const handleReadMore=()=>{
        Navigate(`/story/${props._id}`)
    }
    return (
        <div className='storyCard'>
            <div className='storyCardImage'>
                <img src={props.image}></img>
            </div>
            <div className='storyCardContent'>
                <div className='startupName text-secondary'>
                    {props.name}{props.verified && <i class="bi bi-patch-check verified"></i>}
                </div>
                <div className='startupDescription'>
                    {props.description.slice(0,100)}
                </div>
            </div>
            <div className='storyCardEnd'>
                <button className='btn' onClick={handleReadMore}>
                    Read More
                </button>
            </div>

        </div>
    )
}
