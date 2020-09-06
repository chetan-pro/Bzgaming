import React from 'react';
import './css/Signup.css';
import Animate from './Animate';

const Signup = () =>{
    return(
        <>
        <Animate />
       
      
            <form className="SignForm">
                <h1>Sign Up</h1>
                <div className="field">
                    <input type="text" name="name" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>Full Name</label>
                </div>
                <div className="field">
                    <input type="text" name="name" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>Pubg User-Id</label>
                </div>
                <div className="field">
                    <input type="email" name="email" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>Email Address</label>
                </div>
                <div className="field">
                    <input type="tel" name="number" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>Mobile Number</label>
                </div>
                <div className="field">
                    <input type="password" name="password" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>Set Password</label>
                </div>
                <div className="field">
                    <input type="password" name="password" required onkeyup="this.setAttribute('value',this.value);"
                        value="" />
                    <label>Confirm Password</label>
                </div>
                <button className="signbtn"><a href="#">Sign In</a></button>
                {/* <div className="checkdiv">
                    <span>
                        <input type="checkbox" /><label>Remember me</label>
                    </span>
                    <a>Need help?</a>
                </div> */}
                 {/* <div className="bottomform">
                     <div className="fblogin">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg==" alt="" />
                        <a href="#">Login with Facebook</a>
                    </div> 
                    <h4>New to Netflix ?  <a href="#">Sign up now</a></h4>
                    <p>This page is protected by google reCAPTCHA to ensure you're not a bot. <a href="#"> Learn more.</a></p>
                </div>  */}
            </form>
          
          
      
    
        </>
    )
}

export default Signup;