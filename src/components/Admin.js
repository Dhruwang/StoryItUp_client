import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'

export default function Admin(props) {

    const location = useLocation();

    const checkAdmin=()=>{
        if(!localStorage.getItem("token")){
            document.getElementById("admin").style.display = "none"
            return
        } 
        
        else if (localStorage.getItem("token") && props.decodeToken(localStorage.getItem("token")).role!=="admin") {
            console.log(props.decodeToken(localStorage.getItem("token")).role) 
            document.getElementById("admin").style.display = "none"
        }
    }

    useEffect(() => {
      checkAdmin()
    }, [location])
    
  return (
    <div className='admin' id='admin'>
        This is an admin Login
    </div>
  )
}
