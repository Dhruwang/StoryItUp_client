import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Signup(props) {

    const [credentials, setCredentials] = useState({ email: "", password: "", cpassword: "", role: "" })
    const Navigate = useNavigate();
    const host = "https://storyitupbackend.onrender.com"

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if(credentials.email.length===0 || credentials.password.length===0){
            document.getElementById("fillAlert").style.display = "block"
            return;
        }
        if(credentials.password!==credentials.cpassword){
            document.getElementById("passwordMatchAlert").style.display = "block"
            return;
        }
        props.setProgress(20) 
        const response = await fetch(`${host}/auth/createUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password ,role : credentials.role })

        });
        const json = await response.json()

        // show error if user already exist 
        if(json.error==="user already exist"){
            document.getElementById("fillAlert2").style.display = "block"
            return
        }
        if (json.success) {
            // save authToken and redirect 
            props.setProgress(100)
            localStorage.setItem('token', json.token)
            
            // props.showAlert("success", "SignUp successfull") 
            Navigate("/")
        }
        
        else {
            // props.showAlert("danger", "invalid details") 
        }
    }

    const handleOnChange = (event) => {
        setCredentials({ email:document.getElementById("email").value,password : document.getElementById("password").value,cpassword : document.getElementById("cpassword").value, role:document.getElementById("role").value || "reader" })
    }

    return (
        <div className='signup'>
            <div className='vectorBackground'>
                <div className='loginInner'>
                    <div className='loginInnerLeft'>
                        <div className='loginInnerLeftContent'>
                            <h2>Create Account</h2>
                            <p>Already have an account ? <Link className='text-secondary' to="/login">Click Here</Link></p>
                            <p className='text-red' id='fillAlert'>Fill required Information</p>
                            <p className='text-red' id='fillAlert2'>email already registered</p>
                            <form className='loginForm' onSubmit={handleOnSubmit}>
                                <div className='formItem'>
                                    <label>Email</label>
                                    <input type="email" id='email' name="email" value={credentials.email} onChange={handleOnChange} className='formInput' placeholder='Enter your email'></input>
                                </div>
                                <div className='formItem'>
                                    <label>Password</label>
                                    <input type="password" id='password' name="password" value={credentials.password} onChange={handleOnChange} className='formInput' placeholder='Enter your password'></input>
                                </div>
                                <div className='formItem'>
                                    <label>Confirm Password</label>
                                    <input type="password" name="cpassword" id='cpassword' value={credentials.cpassword} onChange={handleOnChange} className='formInput' placeholder='Confirm password'></input>
                                </div>
                                <p className='text-red ' id='passwordMatchAlert'>Passwords does not match</p>
                                <div className='formItem'>
                                    <label>Select Role</label>
                                    <select name="role" id="role" className='formInput' onChange={handleOnChange} defaultValue="reader">
                                        <option value="reader">Reader</option>
                                        <option value="startupOwner">Startup Owner</option>
                                        <option value="investor">Investor</option>
                                    </select>
                                </div>
                                <button type='submit' className='btn' id='submitBtn' >Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
