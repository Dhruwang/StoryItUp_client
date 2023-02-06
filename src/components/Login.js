import React from 'react'
import googleIcon from "../images/google.png"
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login'>
            <div className='vectorBackground'>
                <div className='loginInner'>
                    <div className='loginInnerLeft'>
                        <div className='loginInnerLeftContent'>
                            <h2>Welcome Back</h2>
                            <p>Please enter your details</p>
                            <p>Don't have an account ? <Link className='text-secondary' to="/signup">Click Here</Link></p>
                            <form className='loginForm'>
                                <div className='formItem'>
                                    <label>Email</label>
                                    <input type="email" className='formInput' placeholder='Enter your email'></input>
                                </div>
                                <div className='formItem'>
                                    <label>Password</label>
                                    <input type="password" className='formInput' placeholder='Enter your password'></input>
                                </div>
                                <div className='formItemInline'>
                                    <input type="checkbox"></input>
                                    <label>Remember Me</label>
                                </div>
                                <a className='text-secondary forgetBtn' href='/forgotpassword'>Forgot Password</a>
                                <br></br>
                                <button className='btn'>Sign In</button>
                                <button className='googleBtn'>Sign In with <img src={googleIcon} alt="googleIcon"></img> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
