import React from 'react';
import Menu from "../Navbar/MenuComponent/Menu";
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer slider-container'>
            <div className="main_container">
                <div className="footer-navbar">
                    <div className="ft-item item1">
                        <img src="../../img/logo1.png" alt="logo"/>
                        <p>Our wonderful slogan</p>
                    </div>
                    <div className="ft-item item2">
                        <h4>Menu</h4>
                        <Menu/>
                    </div>
                    <div className="ft-item item3">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>
                    <div className="ft-item item4">
                        <h4>Account</h4>
                        <ul>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Watchlist</a></li>
                            <li><a href="#">Collections</a></li>
                            <li><a href="#">User Guide</a></li>
                        </ul>
                    </div>
                    <div className="ft-item item5">
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter system now <br/> to get latest news from us.</p>
                        <form action="#">
                            <input type="text" placeholder="Enter your email"/>
                        </form>
                        <a href="#" className="btn defaultButton">Subscribe now
                            <i className="ion-ios-arrow-forward"></i>
                        </a>
                    </div>
                </div>
                <div className="ft-copyright">
                    <p>Made in Ivano-Frankivsk
                        © 2021 - 2022 Urban Space Radio. All Rights Reserved</p>

                </div>
            </div>


        </footer>
    );
};

export default Footer;
