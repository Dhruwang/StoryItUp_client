import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
const host = "http://localhost:8000"

export default function Login(props) {

    const [credentials, setcredentials] = useState({ email: "", password: "" })
    const Navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json()
        if (json.success) {
            // save authToken and redirect 
            localStorage.setItem('token', json.token)
            Navigate("/")
            // props.showAlert("success", "login successfully") 
        }
        else {
            // props.showAlert("danger", "login failed") 
        }
    }


    const handleOnChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
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
                                <div className='formItemInline'>
                                    <input type="checkbox"></input>
                                    <label>Remember Me</label>
                                </div>
                                <a className='text-secondary forgetBtn' href='/forgotpassword'>Forgot Password</a>
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
