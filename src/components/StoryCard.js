import React from 'react'
import startupImage from "../images/test.jpg"

export default function StoryCard(props) {
    return (
        <div className='storyCard'>
            <div className='storyCardImage'>
                <img src={props.image}></img>
            </div>
            <div className='storyCardContent'>
                <div className='startupName text-secondary'>
                    {props.name}
                </div>
                <div className='startupDescription'>
                    {props.description.slice(0,100)}
                </div>
            </div>
            <div className='storyCardEnd'>
                <button className='btn'>
                    Read More
                </button>
            </div>

        </div>
    )
}
