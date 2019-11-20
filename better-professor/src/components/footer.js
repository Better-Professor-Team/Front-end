import React from "react";
import './Footer.css'
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div class="copyright">
                <p> Better Professor </p>
            </div>
            <div class="social">
                <a href="#" class="support">Contact Us</a>
                <a href="#" class="face">fb</a>
                <a href="#" class="tweet">t</a>
                <a href="#" class="linkedin">in</a> 
            </div>
        </footer>
    )
}

export default Footer;