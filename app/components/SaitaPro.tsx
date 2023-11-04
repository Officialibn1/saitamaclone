import React from 'react'
import './styles/SaitaPro.css'
import Image from 'next/image'

const SaitaPro = () => {
  return (
    <div className="container2">
        <div className='saitaPro'>
            <div className="sectionHeading">
                <span></span>

                <h1>
                    SaitaPro
                </h1>
            </div>

            <div className="saitaProContent">
                <button>Free App</button>

                <h2>
                    Crypto Made For
                </h2>

                <h1>
                    Simplicity
                </h1>

                {/* List of texts */}
                <section>
                    <span>1.</span> SaitaPro is a Non-custodial Wallet, Which Means Your Money is 100% In Your Hands.
                    
                    <span>2.</span> No Middleman.

                    <span>3.</span>  Buy Crypto Easily With Your Card - ePay.me SaitaPro Integration.

                    <span>4.</span>  Manage Your SaitaCard on SaitaPro.

                    <span>5.</span>  Staking and Farming Pools: Make Your Crypto Work For You.

                    <span>6.</span>  Multiple Levels of Security.

                    <span>7.</span>  Transfer & Bulk Send to Send Money for Family, Friends, Employees and More.
                </section>

                {/* Download image will hand holding phone */}
                <div className="appBgImg">
                    
                </div>

                {/* Download button */}
                <div className="saitaProDownloadBtns">

                    <h1>
                        Install and Compare
                    </h1>

                    <p>
                        SaitaPro is easier to use and safer than other wallets
                    </p>
                    <div className="saitaProDownloadAni">
                        <Image src={'/download-icon.png'} width={100} height={100} quality={100} alt='download-icon.png saitapro' />
                    </div>

                    <div className="saitaProDownload">
                        <div><Image src={'/logo-icon4.jpg'} width={300} height={60} quality={100} alt='logo-icon4.jpg saitapro' /></div>

                        <div><Image src={'/logo-icon5.jpg'} width={300} height={60} quality={100} alt='logo-icon5.jpg saitapro' /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaitaPro