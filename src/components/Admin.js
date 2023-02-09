import React,{useEffect} from 'react'

export default function Admin(props) {

    useEffect(() => {
      if(props.decodeToken(localStorage.getItem("token")).role!=="admin"){
        document.getElementById("admin").style.display = "none"
      }
    }, [])
    
  return (
    <div className='admin' id='admin'>
        This is an admin Login
    </div>
  )
}
