import React from 'react'
import './styles/Hero.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='hero'>
        
        <div className="heroBlur">
            <div className="heroText">
                <h1>
                    Tokenized <br />Real Estate <br /> Is Here
                </h1>

                <button className='button1'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero