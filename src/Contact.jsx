import React from 'react';
import '../src/css/contact.css'

const Contact = () => {
    return (
        <>
        <div className="contact">
        <form className="container">
       <h1>Contact us</h1>
       <div className="line"></div>
       <input type="text" name="Name" placeholder="Enter your full name" required />
       <input type="email" name="Email" placeholder="Enter your full email" required />
        <textarea name="Message" id="" cols="30" rows="10" placeholder="Message..."></textarea>
         <button type="submit">Send message</button>
    </form>
    </div>
        </>
    )
}

export default Contact;