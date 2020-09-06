import React from 'react';
import '../src/css/footer.css';

const Footer = () => {
    return(
        <>
           
    <footer>
        <div id="topfooter">
            <div id="logo">
                <h3>B<span>Z</span> gaming</h3>
            </div>
            <div id="productlist" className="list">
                <h5>Product</h5>
                <ul>
                    <li><a href="#">Marketing place</a></li>
                    <li><a href="#">Spaces</a></li>
                    <li><a href="#">Network</a></li>
                </ul>
            </div>
            <div id="companylist" className="list">
                <h5>Work</h5>
                <ul>
                    <li><a href="#">Tournaments</a></li>
                    <li><a href="#">Organizers</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div id="connectlist" className="list">
                <h5>Company</h5>
                <ul>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Terms and condition</a></li>
                </ul>
            </div>
        </div>
        <div id="bottomfooter">
            <span>©2020 CGtech Inc. All Rights Reserved.</span>
        </div>
    </footer>
  

        </>
    )
}

export default Footer;