import React from 'react';
import Animate from './Animate';
import '../src/css/Signup.css';

function Login() {
    return (
        <>
        <Animate />
        <form className="SignForm">
                <h1>Login</h1>
               
                <div className="field">
                    <input type="text email" name="email" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>Email or Pubg User-Id</label>
                </div>
                <div className="field">
                    <input type="password" name="password" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>Password</label>
                </div>
               
                <button className="signbtn"><a href="#">Sign In</a></button>
              
            </form>
          
        </>
    )
}

export default Login;
