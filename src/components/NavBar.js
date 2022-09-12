import React from 'react'
import "../App.css"
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className='navBar'>

            <div className="logo">
                <Link to="/"> <i className="fa-solid fa-camera"></i></Link>
                <Link to="/"> <span>PhotoFolio</span></Link>
            </div>

            <div className="navContent">
                <ul>
                    <li>
                        <Link className='first' to="/" autoFocus >Home</Link>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navSocial">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
            </div>

        </div>
    )
}
