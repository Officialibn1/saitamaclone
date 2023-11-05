import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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

const Footer = () => {
  return (
    <footer>
        <div className="footerLinks">

            {/* footer logo image */}
            <div className="footerLogo">
                <Link href={''}>
                    <Image src={'/footer-icon.png'} width={80} height={160} quality={100} alt='saitama footer logo' />
                </Link>
            </div>

            {/* Links under the company title */}
            <div className="companyLinks">
                <h1>
                    Company
                </h1>

                <ul>
                    <li><Link href={''}>saitama token</Link></li>
                    <li><Link href={''}>crypto can be safe</Link></li>
                    <li><Link href={''}>read our whitepaper</Link></li>
                    <li><Link href={''}>support</Link></li>
                    <li><Link href={''}>blog</Link></li>
                    <li><Link href={''}>certic audit</Link></li>
                    <li><Link href={''}>user agreement</Link></li>
                </ul>
            </div>

            {/* links under Products & Utilities section */}
            <div className="productsUtilities">
                <h1>
                    Products & Utilities
                </h1>

                <div>
                    {/* Link group one */}
                    <ul>
                        <li><Link href={''}>SaitaCard</Link></li>
                        <li><Link href={''}>SaitaPro</Link></li>
                        <li><Link href={''}>SaitaSwap</Link></li>
                        <li><Link href={''}>Fang</Link></li>
                    </ul>
                    
                    {/* Link group two */}
                    <ul>
                        <li><Link href={''}>SaitaLogistics</Link></li>
                        <li><Link href={''}>SaitaReality DAO</Link></li>
                        <li><Link href={''}>Edutainment</Link></li>
                        <li><Link href={''}>Wolfcater Games</Link></li>
                    </ul>
                </div>
            </div>

            {/* Contact Us */}
            <div className="contactMe">
                <h1>
                    Contact Me
                </h1>

                <ul>
                    <li><a href='mailto:officialibn001@gmail.com'>officialibn001@gmail.com</a></li>
                </ul>
            </div>
        </div>

        <div className="footerImgIcons">
            <div className="copyRight">
                <p>
                    Copyright Saitama Technology LLC.
                </p>

                <p>
                    !&copy;2023 Redesign of the original Saitama website by @ibn.
                </p>
            </div>

            <div className="footerLogos">
                <div><Image src={'/payme.jpeg'} width={300} height={60} quality={75} alt='payme.jpeg saitama footer' /></div>
                <div><Image src={'/footer-logo2.png'} width={300} height={60} quality={75} alt='footer-logo2.png saitama footer' /></div>
            </div>
    
            {/* Navbar social media icons container */}
            <div className="mediaIcons">
                <Link href={'/'}>
                    <FaLinkedin />
                </Link>
                
                <Link href={'/'}>
                    <FaXTwitter />
                </Link>

                <Link href={'/'}>
                    <FaFacebook />
                </Link>

                <Link href={'/'}>
                    <FaReddit />
                </Link>

                <Link href={'/'}>
                    <FaGithubAlt />
                </Link>

                <Link href={'/'}>
                    <FaYoutube />
                </Link>

                <Link href={'/'}>
                    <FaTelegram />
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer