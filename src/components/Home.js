import React from 'react'

export default function Home() {
    return (
        <div className='home'>
            <div className='vectorBackground'>
                <div className='homeContent'>
                    <h1>"Stories That Inspires"</h1>
                    <p className='text-secondary'>We tell the stories of startups that are making a difference</p>
                    <div className='btn-container'>
                        <button className='btn'>Learn More</button>
                        <button className='btn-inverted'>Stories</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
