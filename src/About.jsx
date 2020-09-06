import React from 'react';
import './css/about.css';
import Footer from './Footer';
import logo from '../src/pubgimages/logo.png';
import one from '../src/pubgimages/p3.jpg';
import two from '../src/pubgimages/p2.jpg';
import three from '../src/pubgimages/p1.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>

            <div id="main">

                <div id="section1">
                    <div id="left">
                        <h1>About us</h1>
                        <p>We are the group of organizing different pubg mobile game tournaments. For those people who are playing pubg good and want to earn money from it. We provide them a platform for converting fun into opourtunites. If you support us we can take this on a diiferent level where you achive your goals and being a top class player.</p>
                        <Link to="/signup">Join Now</Link>
                    </div>
                    <div id="right"><img src={logo} alt="" /></div>
                </div>

                <div id="section2">
                    <h2>How we work</h2>
                    <p>We connect players via this web platform. Welcome them with there master team. Organize match and alert them. Get entry fee from them and give them id password of the battle room. Want to know about  
        <Link className="link" to="/feature"> Tournament </Link> ?.</p>
                    {/* <p id="link">Interested in joining us? <Link className="link" to="/signup">Join now</Link>👈 </p> */}
                </div>

                <div id="section3">
                    <h2>Founding team</h2>
                    <div id="cardcontainer">
                        <div className="card">
                            <div id="photo"><img src={one} alt="photo" /></div>
                                <h6>Gourav Lokhande</h6>
                                <p>Manager & Developer</p>
                            </div>
                            <div className="card">
                                <div id="photo"><img src={two} alt="photo" /></div>
                                    <h6>Vipin Deshmukh</h6>
                                    <p>Marketing Incharge</p>
                                </div>
                                <div className="card">
                                    <div id="photo"><img src={three} alt="photo" /></div>
                                        <h6>Chetan Sable</h6>
                                        <p>Creater and Developer</p>
                                    </div>
                                </div>
                            </div>

                            {/* <div id="section4">
                                <h2>Our investors</h2>
                                <p>We are always enjoy to work with our investors in the india. There is some of our investors who are
        satisfied with out work.</p>
                                <div id="boxcontainer">
                                    <div className="box">
                                        <h4>Ranjit Singh</h4>
                                        <p>Acxel</p>
                                        <h4>Guiles Rachaus</h4>
                                        <p>Verstile</p>
                                        <h4>Rohit Mehra</h4>
                                        <p>UNIcom Capital</p>
                                    </div>
                                    <div className="box">
                                        <h4>Christs Henchal</h4>
                                        <p>Marketing Versus</p>
                                        <h4>Paul Walker</h4>
                                        <p>Adjust Group</p>
                                        <h4>Pamden Moehriens</h4>
                                        <p>WC Universe</p>
                                    </div>
                                    <div className="box">
                                        <h4>Kamlesh Oswald</h4>
                                        <p>Incharge at Expross</p>
                                        <h4>Mira Novkiasac</h4>
                                        <p>Managing at Uniliver</p>
                                        <h4>Chandra Ramsetu</h4>
                                        <p>Fontestine</p>
                                    </div>
                                </div>
                            </div>
 */}



                        </div>



                        {/* <div id="section5">
                            <h1>Contact us</h1>
                            <div id="box">
                                <div className="box">
                                    <i className="fa fa-slack  "></i>
                                    <h3>Email.</h3>
                                    <p>SSMtech@slack.com</p>
                                </div>
                                <div className="box">
                                    <i className="fa fa-phone"></i>
                                    <h3>phone.</h3>
                                    <p>+234(98745-25034)</p>
                                </div>
                                <div className="box">
                                    <i className="fa fa-map-marker  "></i>
                                    <h3>Address.</h3>
                                    <p>🇺🇸 India
                                    One Anand Place, Suite 2600
            Anand</p>
                                </div>

                                <div className="box">
                                    <i className="fa fa-envelope-o "></i>
                                    <h3>Email.</h3>
                                    <p>SSMtech@gmail.com</p>
                                </div>
                            </div>
                        </div> */}
                        <Footer />
        </>
    )
}

export default About;