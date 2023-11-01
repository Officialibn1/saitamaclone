import Image from 'next/image'
import React from 'react'
import './styles/UtilityToken.css'

const UtilityToken = () => {
  return (
    <div className='container2 mt-10'>
        <div className="utilityToken">
            <div className="cryptoMadeVideo">
                <Image src={'/design-left1.png'} width={150} height={100} quality={75} alt='design-left2.png saitama image' />
            </div>

            <div className="utilityTokenText">
                <div className="sectionHeading">
                    <span></span>

                    <h1>
                        Our Utility Token
                    </h1>
                </div>

                <p>
                    With a steady stream of new utilities and use cases being released and adding value for its holders, the Saitama token is rapidly emerging as a powerful force in the crypto world. Our token is set to power a brand-new finance-oriented blockchain, open up a world of exciting possibilities for our users. <br /><br />

                    Slide through, do your research and start holding Saitama today to join us
                </p>

                <div className="buttonsContainer">
                    <button>Buy Saitama</button>
                    
                    <button>Read Whitepaper</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UtilityToken