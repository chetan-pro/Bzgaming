import React from 'react';
import '../src/css/home.css';
import './index.css';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import Card from './Card';
import Footer from './Footer';
import Animate from './Animate.jsx';
import '../src/script';

const Home = () => {
    return (
        <>
            <Animate />
            <div className="home">
                <div className="content">
                    <h1>Play Your First Pubg Tournament Here And Earn Money </h1>
                    <p>Are you a pubg player and ready to show your playing skills?
                    Join and play pubg tournament with us and earn cash prize
                    and show your skills upfront with your team
                    </p>
                    <button><Link to="/signup">Join now</Link></button>
                </div>
            </div>
            <div className="tournament">
                <div className="imgdets"></div>
                <div className="dets">
                    <h1>Tournament</h1>
                    <p>So,Without any delay join with us and being a part of tournament. We make sure to you that we take care of your entertainment and if you wanna work with us your most welcome. We also try to organize the game live on youtube if it is possible in future</p>
                    <p>For more details regarding to game <br /> click on below link.</p>
                    <button> <Link to="/features">Know more</Link></button>
                </div>
            </div>
            <div className="org">
                <h1>Organized Status</h1>
                <div className="cardBox">
                  <Card 
                  Num = '250' 
                  Title = 'Total Players played' />
                  <Card 
                  Num = '50' 
                  Title = 'Total Teams played' />
                  <Card 
                  Num = '03' 
                  Title = 'Total Game played' />
                  <Card 
                  Num = '10' 
                  Title = 'Total Number of Winners' />
                </div>
            </div>
            <Contact />
            <Footer/>
        </>
    )
}

export default Home;