import React from "react";
import './footer.css'
import {Facebook, Instagram, Twitter, Pinterest, Room, Phone, Email, ArrowForward} from "@material-ui/icons"


const Footer = () => {
    return ( 
        <div className="footer-container">

            <div className="vof">
                <h1 style={{color:"orangered"}}>VOF</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nesciunt, soluta modi ut mollitia illum inventore cumque sapiente dignissimos placeat?</p>
                <div className="icons-container">
                   <Facebook className="icons" style={{color:"blue"}}/>
                   <Instagram className="icons" style={{color:"red"}}/> 
                   <Twitter className="icons" style={{color:"skyblue"}}/> 
                   <Pinterest className="icons" style={{color:"red"}}/> 
                </div>
            </div>

            <div className="my-acct">
                <div className="desc">My Account</div>
                <ul>
                    <li><ArrowForward className="arrowForward"/> <span>My Account</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Order Tracking</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Wishilist</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Men Fashion</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Women Fashion</span></li>
                </ul>
            </div>

            <div className="info">
                <div className="desc">Information</div>
                <ul>
                    <li><ArrowForward className="arrowForward"/><span>Return</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Order Tracking</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Privacy Policy</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Terms & Conditions</span></li>
                    <li><ArrowForward className="arrowForward"/><span>Contact Us</span></li>
                </ul>
            </div>

            <div className="contact">
                <div className="desc">Contact</div>
                <ul>
                    <li><Room style={{color:"ora"}}/> 622 Richmond Cresc, Royal Spring 89905</li>
                    <li><Phone/> +234 5676 6754 76</li>
                    <li><Email/> contact@vof.com</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>

        </div>
     );
}
 
export default Footer;