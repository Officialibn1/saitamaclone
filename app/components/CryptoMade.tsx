import React from 'react'
import './styles/CryptoMade.css'
import Image from 'next/image'

const CryptoMade = () => {
  return (
    <div className="container2">
        <div className='cryptoMade '>
            <div className="cryptoMadeVideo">
                <Image src={'/design-left2.png'} width={150} height={100} quality={75} alt='design-left2.png saitama image' />
            </div>

            <div className="cryptoMadeText">
                <div className="sectionHeading">
                    <span></span>

                    <h1>
                        Latest From Saitama
                    </h1>
                </div>

                <p>
                    Life is too good to be stressed out over crypto. At Saitama, we make it easy by seamlessly integrating crypto into your daily routine. Experience its true power whenever you dine out, shop, or send money to friends. Join us today and discover how we&apos;re simplifying your finances and making the things you love even better with crypto.
                </p>
            </div>
        </div>
    </div>
  )
}

export default CryptoMade