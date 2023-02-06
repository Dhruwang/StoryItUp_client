import React from 'react'
import googleIcon from "../images/google.png"
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className='signup'>
            <div className='vectorBackground'>
                <div className='loginInner'>
                    <div className='loginInnerLeft'>
                        <div className='loginInnerLeftContent'>
                            <h2>Create Account</h2>
                            <p>Already have an account ? <Link className='text-secondary' to="/login">Click Here</Link></p>
                            <form className='loginForm'>
                                <div className='formItem'>
                                    <label>Email</label>
                                    <input type="email" className='formInput' placeholder='Enter your email'></input>
                                </div>
                                <div className='formItem'>
                                    <label>Password</label>
                                    <input type="password" className='formInput' placeholder='Enter your password'></input>
                                </div>
                                <div className='formItem'>
                                    <label>Confirm Password</label>
                                    <input type="password" className='formInput' placeholder='Confirm password'></input>
                                </div>
                                <div className='formItem'>
                                    <label>Select Role</label>
                                    <select name="roles" id="roles"  className='formInput'>
                                        <option value="reader">Reader</option>
                                        <option value="startupOwner">Startup Owner</option>
                                        <option value="admin">Admin</option>
                                        <option value="investor">Investor</option>
                                    </select>
                                </div>
                                <button className='btn'>Create</button>
                                <button className='googleBtn'>Sign In with <img src={googleIcon} alt="googleIcon"></img> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
