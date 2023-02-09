import React,{useEffect,useState} from 'react'
import InvestorCard from './InvestorCard'
import { useNavigate } from 'react-router-dom'

export default function Investor(props) {
  const Navigate = useNavigate();
  const [investors, setinvestors] = useState()
  // const host = "http://localhost:8000" 
  const host = "https://storyitupbackend.onrender.com" 


  const goToRegister=()=>{
    Navigate("/investorRegister")
  }
  const fetchInvestors = async () => {
    const response = await fetch(`${host}/investor/fetchInvestors`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const json = await response.json()
    setinvestors(json)

}

useEffect(() => {
    props.setProgress(100)
    fetchInvestors()
}, [])

  return (
    <div className='investor'>
        <div className='vectorBackground storiesMain'>
          <div className='investorInner'> 
          <h1>FIND POTENTIAL <span className='text-secondary'>INVESTORS</span></h1>
          <div className='investorPageCoverImg'>
            <img src='https://s21.q4cdn.com/399680738/files/design/slider/2016_08_22_131442_40m_RGB.jpg'></img>
          </div>
          <div className='registerInvestorDiv'><button className='registerInvestorBtn btn' onClick={goToRegister}>Become an Investor</button></div>
          <div className='investorCardContainer'>
            {investors && investors.map((element,index)=>{
              return <InvestorCard details={element} index={index} />
            })}
          </div>
            </div>  
        </div>
    </div>
  )
}
