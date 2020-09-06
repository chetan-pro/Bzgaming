import React from 'react';
import '../src/css/features.css';
import logo from '../src/pubgimages/logo.png';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <>
            <div className="featureHead">
                <div className="overlay">
                    <div className="fcontent">
                        <div className="logo"><img src={logo} alt="" srcset=""/></div>
                        <div><p>TYPE : SQUAD</p>
                        <p>DAY : 20AUGUST</p>
                        <p>ENTRY FEE : RS.50 PER SQUAD</p>
                        <p>PRIZE : 1ST RS.500<br/>
                                       &nbsp; &emsp; &emsp; 2ND RS.150<br/>
                                       &nbsp; &emsp; &emsp; 3RD RS.100 (For top kills team)</p></div>
                                       <button><Link to="/register">Join Now</Link></button>
                    </div>
                    <div className="man">
                        
                    </div>
                </div>
            </div>
            <div className='fatch'>
                <h1>Get all the things required and for joining Tournaments,100% free</h1>
                <p>Anyone can join it</p>
                <div className="fatchBox">
                    <Fcard
                        title='Join Simply'
                        para='Register via website share the link of registration to your team member register them and join in tournament with team.' />
                    <Fcard
                        title='Enhance Game'
                        para='You can enhance your gaming skills via playing tournaments with different teams with same intension like to win the match.' />
                    <Fcard
                        title='Organize Tournament'
                        para='Organize tournaments with our team and get exciting experience on working skills and we help you to create your tournament.' />

                </div>
                <button>Register now</button>
            </div>
            <Footer />
        </>
    )
}

export default Features;


const Fcard = (props) => {
    return (
        <>
            <div className="fcBox">
                <div className="imgBox"></div>
                <h5>{props.title}</h5>
                <p>{props.para}</p>
            </div>
        </>
    )
}