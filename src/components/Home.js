import React from 'react'
import vector from '../images/vector.png' 

export default function Home() {
  return (
    <div className='home'>
        <div className='vectorBackground'>
            <div className='homeContent'>
                <h1>"Stories That Inspires"</h1>
                <p className='text-secondary'>We tell the stories of startups that are making a difference</p>
                <button className='btn'>Learn More</button>
            </div>
        </div>
    </div>
  )
}
