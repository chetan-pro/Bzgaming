import React from 'react';
import Animate from './Animate';
function Register() {
    return (
        <>
        <Animate />
        <form className="SignForm">
                <h1>Register For Battle</h1>
               
                <div className="field">
                    <input type="text" name="name" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>Your Name</label>
                </div>
                <div className="field">
                    <input type="text" name="teamName" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>Team Name</label>
                </div>
                <div className="field">
                    <input type="text" name="leaderPubgId" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>Team Leader Pubg-Id</label>
                </div>
                <div className="field">
                    <input type="text" name="teamplayer" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>1. Team player</label>
                </div>
                <div className="field">
                    <input type="text" name="teamplayer" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>2. Team player</label>
                </div>
                <div className="field">
                    <input type="text" name="teamplayer" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>3. Team player</label>
                </div>
               
               
                <button className="signbtn"><a href="#">Sign In</a></button>
              
            </form>
        </>
    )
}

export default Register;
