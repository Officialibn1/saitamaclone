'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { 
    FaBars, 
    FaLinkedin, 
    FaXTwitter, 
    FaFacebook, 
    FaReddit, 
    FaGithubAlt, 
    FaYoutube, 
    FaTelegram, 
    FaAnglesLeft
} from "react-icons/fa6";


const Navbar = () => {
    
    const [toggleNav, setToggleNav] = useState(false)

    const toggler = () => {
        setToggleNav((prev) => !prev);
    }

  return (
    <nav>

        {/* Navbar Links */}
        <div className={`navLinks ${!toggleNav ? '-left-[200vw]' : 'left-0'}`} >
            <ul>
                <li><button onClick={toggler}><FaAnglesLeft /></button></li>
                <li onClick={toggler} className='linksItem'><Link href={`/`} >Home</Link></li>
                <li onClick={toggler} className='linksItem'><Link href={`/`} >Download Saita Pro</Link></li>
                <li onClick={toggler} className='linksItem'><Link href={`/`} >Trade Crypto</Link></li>
                <li onClick={toggler} className='linksItem'><Link href={`/`} >Buy Saitama</Link></li>
            </ul>
        </div>

        {/* Toggle Button for nav Links */}
        <div className="toggleBtn" onClick={toggler}>
            <FaBars />
        </div>

        {/* Navbar logo Icon */}
        <div className="navLogo">
            <img src='/logo.svg' alt='saitama website clone logo' />
        </div>

        {/* Navbar social media icons container */}
        <div className="mediaIcons">
            <FaLinkedin />
            
            <FaXTwitter />

            <FaFacebook />

            <FaReddit />

            <FaGithubAlt />

            <FaYoutube />

            <FaTelegram />
        </div>
    </nav>
  )
}

export default Navbar