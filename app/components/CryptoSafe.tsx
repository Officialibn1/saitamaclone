import React from 'react'
import './styles/CryptoSafe.css'
import Image from 'next/image'


const CryptoSafe = () => {
  return (
    <div className="container2">
        <div className='cryptoSafe'>
            <div className="sectionHeading">
                <span></span>

                <h1>
                    Crypto Can Be Safe
                </h1>
            </div>

            <div className="cryptoSafeText">
                <p>
                    The perception of crypto being unsafe is largely linked to concerns around centralization, with many people believing that it lacks the regulatory oversight and security measures of traditional finance. In Decentralized Finance, individuals can have greater control and security over their crypto assets. Learn how.
                </p>

                <button>
                    Watch Video Now <Image src={'/video-icon.jpg'} width={40} height={40} quality={60} alt='saitama video-icon.jpg' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default CryptoSafe