import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const Navigate = useNavigate();

  const goToPublishPage = ()=>{
    Navigate("/publish")
  }

  const goToStoriesPage = ()=>{
    Navigate("/stories")
  }

  return (
    <div className='home'>
      <div className='vectorBackground'>
        <div className='homeContent'>
          <h1>"Stories That Inspires"</h1>
          <p className='text-secondary'>We tell the stories of Startups that are making a difference</p>
          <div className='btnContainer'>
            <button className='btn' onClick={goToPublishPage}>Publish</button>
            <button className='btn-inverted' onClick={goToStoriesPage}>Stories</button>
          </div>
        </div>
      </div>
    </div>
  )
}
