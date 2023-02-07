import React from 'react'
import startupImage from "../images/test.jpg"

export default function StoryCard() {
    return (
        <div className='storyCard'>
            <div className='storyCardImage'>
                <img src={startupImage}></img>
            </div>
            <div className='storyCardContent'>
                <div className='startupName text-secondary'>
                    Cherry
                </div>
                <div className='startupDescription'>
                    Japnese startup cherry maps user data flow
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
