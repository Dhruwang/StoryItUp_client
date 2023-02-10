import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'


export default function Login(props) {

    const host = "https://storyitupbackend.onrender.com"   
    // const host = "http://localhost:8000" 

    const [credentials, setcredentials] = useState({ email: "", password: "" })
    const Navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        props.setProgress(20)
        e.preventDefault();
        const response = await fetch(`${host}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json()
        if(json.error==="invalid credentials"){
            document.getElementById("invalidCred").style.display = "block"
        }
        if (json.success) {
            props.setProgress(100)
            // save authToken and redirect 
            localStorage.setItem('token', json.token)
            props.decodeToken(json.token)
            Navigate("/")
            window.location.reload()
            // props.showAlert("success", "login successfully") 
        }
        else {
            props.setProgress(100)
            // props.showAlert("danger", "login failed") 
        }
    }


    const handleOnChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    const checkLoginStatus =()=>{
        if(localStorage.getItem("token")){
            Navigate("/")
        }
    }

    useEffect(() => {
      checkLoginStatus()
    }, [])
    
    return (
        <div className='login'>
            <div className='vectorBackground'>
                <div className='loginInner'>
                    <div className='loginInnerLeft'>
                        <div className='loginInnerLeftContent'>
                            <h2>Welcome Back</h2>
                            <p>Please enter your details</p>
                            <p>Don't have an account ? <Link className='text-secondary' to="/signup">Click Here</Link></p>
                            <form className='loginForm' onSubmit={handleOnSubmit}>
                                <div className='formItem'>
                                    <label>Email</label>
                                    <input type="email" name="email" className='formInput' value={credentials.email} onChange={handleOnChange} placeholder='Enter your email'></input>
                                </div>
                                <div className='formItem'>
                                    <label>Password</label>
                                    <input type="password" name='password' className='formInput' value={credentials.password} onChange={handleOnChange} placeholder='Enter your password'></input>
                                </div>
                                <p className='text-red ' id='invalidCred'>Invalid Credentials</p>
                                <br></br>
                                <button className='btn' type='submit'>Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
